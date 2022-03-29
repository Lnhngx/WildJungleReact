import React,{useState} from "react";
import { useEffect } from "react";
import {Modal,Button} from 'react-bootstrap' ;
import { Link, useHistory, useLocation } from "react-router-dom";
import Config from "../Config";

function EditModal(props){
// const [close, setClose] = useState(false);
const location=useLocation();
const history=useHistory();
const {editModalShow,setEditModalShow,editModalText,forgotModalText,forgotPassText}=props;

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
  const usp=new URLSearchParams(location.pathname);
  const pathurl=usp.has('/members/password-change')
  console.log(pathurl)
  const handleClose = () => {
    setEditModalShow(false);
    if(forgotPassText==='已更改成功，請重新登入'){
      history.push('/members/login');
    }
    
  };

  
  
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
        <Modal.Body className="tysu_editModal">{editModalText}{forgotModalText}{forgotPassText}</Modal.Body>
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