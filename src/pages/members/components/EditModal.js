import React from "react";
import {Modal,Button} from 'react-bootstrap' ;
import { useHistory, useLocation } from "react-router-dom";


function EditModal(props){
// const [close, setClose] = useState(false);
  const location=useLocation();
  const history=useHistory();
  
  const {editModalShow,setEditModalShow,editModalText,forgotModalText,forgotPassText}=props;

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
      <Modal show={editModalShow} onHide={handleClose} animation={false} centered>
        <Modal.Body className="tysu_editModal">{editModalText}{forgotModalText}{forgotPassText}</Modal.Body>
        <Modal.Footer className="tysu_editModalFooter">
          <Button  className="tysu_editModalBtn" onClick={handleClose}>
            OK
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
    }

export default EditModal