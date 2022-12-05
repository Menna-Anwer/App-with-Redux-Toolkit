import React from 'react'
import {Button,ButtonGroup} from "react-bootstrap";
const PostsList = ({data ,loading ,error,deleteRecords}) => {
    const deleteConfirm = (item)=>{
        if (window.confirm(`Do you really want to Delete ${item.title}?`)) {
           deleteRecords(item.id)
        }
    }
    const recordes =data.map((ele,index)=>
           ( <tr key={ele.id} >
            <td>#{++index}</td>
            <td>{ele.title}</td>
            <td>{ele.description}</td>
            <td>
              <ButtonGroup aria-label="Basic example">
                <Button variant="success">Edit</Button>
                <Button variant="danger" onClick={()=>deleteConfirm(ele)}>Delete</Button>
              </ButtonGroup>
            </td>
            </tr>))
  return (
    <>
        { loading ? 
        ( <tr>
           <td colSpan={4}> Loading Pleace Wait...</td>
        </tr>)
         : error ? 
        ( <tr>
            <td colSpan={4}> Sorry Error</td>
        </tr>)
          :(recordes) }
    </>
  )
}

export default PostsList
