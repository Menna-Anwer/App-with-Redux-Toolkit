import React, { useState } from "react";
import {Form ,Button , ButtonGroup } from "react-bootstrap";
import { useDispatch } from 'react-redux';
import { insertPosts } from "../State/Slices/postSlice";
import { useNavigate } from 'react-router-dom';

const AddPost = () => {
  const navigate = useNavigate()

  const [title,setTitle]=useState("")
  const [description,setDescription]=useState("")

  const dispatch =useDispatch()

  const submitHandler =(e)=>{
    e.preventDefault();
    const id = Math.floor(Math.random()*1000)
    dispatch(insertPosts({id,title,description}))
    .unwrap()
    .then(()=>{
      navigate("/")
    }).catch(error=>{
      console.log(error);
    })
  }
  return (
    <div>
      <Form onSubmit={submitHandler}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text"
           value={title} onChange={(e)=>setTitle(e.target.value) } />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Descraption</Form.Label>
          <Form.Control as="textarea" rows={3}
           value={description} onChange={(e)=>setDescription(e.target.value)} />
        </Form.Group>
        <ButtonGroup aria-label="Basic example">
          <Button variant="secondary" type="reset">Cancel</Button>
          <Button type="submit">Submit</Button>
        </ButtonGroup>
      </Form>
    </div>
  );
};

export default AddPost;
