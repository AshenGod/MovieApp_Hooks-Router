import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Rating from '@mui/material/Rating';




const AddMovie=({setMovieDate,movieDate})=>{

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [title,setTitle] = useState('')
  const [description,setDescription] = useState('')
  const [posterURL,setPosterURL] = useState('')
  const [rating,setRating] = useState(0)

  const handleAdd =()=>{
    setMovieDate ([...movieDate,{title,description,posterURL,rating,id:Math.random()}])
    handleClose()
  }
 
    return(
        <div>
          <Button variant="primary" onClick={handleShow}>Add Movie</Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Add Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Movie Title</Form.Label>
        <Form.Control onChange={(e)=> setTitle(e.target.value)} type="text" placeholder="Enter Movie Title" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Movie Description</Form.Label>
        <Form.Control onChange={(e)=> setDescription(e.target.value)} type="text" placeholder="Enter Movie Description" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Movie Poster</Form.Label>
        <Form.Control onChange={(e)=> setPosterURL(e.target.value)} type="text" placeholder="Add Movie Poster URL" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Movie Rating</Form.Label>
        <Rating
        name="simple-controlled"
        onChange={(e)=> setRating(e.target.value)}
      />
      </Form.Group>
    </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAdd}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
        </div>
    );
}
export default AddMovie