import React,{useState} from "react";
import {Modal,Button} from 'react-bootstrap' ;

function MemberModal(props){
// const [show, setShow] = useState(false);
const {show,setShow,success}=props;

//   const handleClose = () => {setTimeout(() => setShow(false), 700)};
//     // setShow(false);
//   const handleShow = () =>  {setShow(true);
//     setTimeout(() => setShow(false), 700)}

  return (
    <>
      {/* <Button style={{paddingTop:"10rem"}} variant="primary" onClick={handleShow}>
        Launch static backdrop modal
      </Button> */}

      <Modal
        show={show}
        // onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered 
      >
        {/* <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header> */}
        <Modal.Body>
          {success}
        </Modal.Body>
        {/* <Modal.Footer> */}
          {/* <Button variant="secondary" onClick={handleClose}>
            Close
          </Button> */}
          {/* <Button variant="primary">Understood</Button> */}
        {/* </Modal.Footer> */}
      </Modal>
    </>
  );
    }

export default MemberModal