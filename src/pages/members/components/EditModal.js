import React,{useState} from "react";
import { useEffect } from "react";
import {Modal,Button} from 'react-bootstrap' ;
import { Link } from "react-router-dom";
import Config from "../Config";

function EditModal(props){
// const [close, setClose] = useState(false);
const {editModalShow,setEditModalShow,editModalText,forgotModalText}=props;

// const [mDataProps,setMDataProps]=useState({})
// useEffect(()=>{
// if(Object.keys(mData).length!==0){
//   setMDataProps({
//     sid:mData.m_sid,
//     email:mData.email,
//     name:mData.m_name,
//      gender:mData.gender, 
//      password:mData.password})}
// },[mData])
  const handleClose = () => {setEditModalShow(false)};

  
  
  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}

      <Modal show={editModalShow} onHide={handleClose} animation={false} centered>
        {/* <Modal.Header>
          <Modal.Title></Modal.Title>
          <button type="button" className="tysu_modalBtn" onClick={handleClose}><i className="fas fa-times"></i></button>
        </Modal.Header> */}
        <Modal.Body className="tysu_editModal">{editModalText}{forgotModalText}</Modal.Body>
        <Modal.Footer className="tysu_editModalFooter">
          {/* <Button className="tysu_editModalBtn">
            確定
          </Button> */}
          <Button  className="tysu_editModalBtn" onClick={handleClose}>
            OK
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
    }

export default EditModal