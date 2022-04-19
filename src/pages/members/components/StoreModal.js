import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'

function StoreModal(props) {
    const history = useHistory()

    const { show, setShow, storeModalText, setShowStoreAdd } = props

    const handleClose = () => {
        setShowStoreAdd(false)
        setShow(false)
    }

    return (
        <>
            <Modal
                show={show}
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                {/* <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            Modal heading
          </Modal.Title>
        </Modal.Header> */}
                <Modal.Body className="tysu_editModal">
                    <h4>{storeModalText}</h4>
                </Modal.Body>
                <Modal.Footer className="tysu_editModalFooter">
                    <Button
                        className="tysu_editModalBtn tysu_storeModalBtn"
                        onClick={handleClose}
                    >
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default StoreModal
