import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";


const initialState ={records:[] , loading: false , error: null}
//create fetchPosts action
export const fetchPosts = createAsyncThunk(
    "posts/fetchPosts",
    async (_,thunkAPI) =>{
        const  {rejectWithValue} = thunkAPI;
        try {
            const  res = await fetch("http://localhost:5000/posts")
            const data = await res.json()
            return data
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)
//create deletePosts action
export const deletePosts = createAsyncThunk(
    "posts/deletePosts",
    async (id,thunkAPI) =>{
        const  {rejectWithValue} = thunkAPI;
        try {
          await fetch(`http://localhost:5000/posts${id}/delete`,{
            method : "delete"
          })
          return id;
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)
//create insertPosts action
export const insertPosts = createAsyncThunk(
    "posts/insertPosts",
    async (item,thunkAPI) =>{
        const  {rejectWithValue , getState} = thunkAPI;
        const {auth} = getState();
        item.userId = auth.id 
        try {
         const res = await fetch(`http://localhost:5000/posts`,{
            method : "post",
            body: JSON.stringify(item),
            headers:{
                "Content-type": "application/json; charset=utf-8",
            }
          })
          const data = await res.json()
          return data;
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)
const postSlice = createSlice({
    name:"posts",
    initialState,
    reducers:{},
    extraReducers:{
        //fetch posts
        [fetchPosts.pending]:(state)=>{
            state.loading = true;
            state.error = null;
        },
        [fetchPosts.fulfilled]:(state , action)=>{
            state.loading =false;
            state.records = action.payload;
        },
        [fetchPosts.rejected]:(state , action)=>{
            state.loading =false;
            state.error = action.error.message;
        },
        //create post 
        [insertPosts.pending]:(state)=>{
            state.loading = true;
            state.error = null;
        },
        [insertPosts.fulfilled]:(state , action)=>{
            state.loading =false;
            state.records.push(action.payload)
        },
        [insertPosts.rejected]:(state , action)=>{
            state.loading =false;
            state.error = action.error.message;
        },
        //delete post
        [deletePosts.pending]:(state)=>{
            state.loading = true;
            state.error = null;
        },
        [deletePosts.fulfilled]:(state , action)=>{
            state.loading =false;
            state.records = state.records.filter((ele)=> ele.id !== action.payload)
        },
        [deletePosts.rejected]:(state , action)=>{
            state.loading =false;
            state.error = action.error.message;
        },
        //update post
    }
})
export default postSlice.reducer