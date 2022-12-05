import React, { memo } from 'react'
import {Table} from "react-bootstrap";
import PostsList from './PostsList';

const Rows = ({data ,loading ,error ,deleteRecords}) => {
 
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th style={{ width: "15%" }}>Title</th>
            <th style={{ width: "65%" }}>Decription</th>
            <th style={{ width: "15%" }}>Actions</th>
          </tr>
        </thead>
        <tbody>
           <PostsList data={data} loading={loading} error={error} deleteRecords={deleteRecords}/>
        </tbody>
      </Table>
    </div>
  )
}

export default memo(Rows) 
