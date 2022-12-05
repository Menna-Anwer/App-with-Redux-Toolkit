import React, { useCallback, useEffect } from "react";
import {useSelector , useDispatch} from "react-redux"
import Rows from './components/Rows/Rows';
import { deletePosts, fetchPosts } from './State/Slices/postSlice';

function App() {
  const {records,loading ,error} = useSelector(state => state.posts)
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(fetchPosts())
  },[dispatch])

  const  deleteRecords = useCallback((id)=>{
     dispatch(deletePosts(id))
  },[dispatch])
  return (
    <div className="App">
      <Rows data={records}  loaging={loading} error={error} deleteRecords={deleteRecords}/>
    </div>
  );
}

export default App;
