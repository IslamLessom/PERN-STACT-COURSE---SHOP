import React from 'react'

//bootstrap
import Modal from 'react-bootstrap/Modal'
import { Button, Form } from 'react-bootstrap'

function CreateDevice({ show, onHide }) {
    return (
        <div>
            <Modal
                show={show}
                onHide={onHide}
                size="lg"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Добавить тип
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Control
                            placeholder={"Введите название типа"}
                        />
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button valiant="outline-danger" onClick={onHide}>Закрыть</Button>
                    <Button valiant="outline-success" onClick={onHide}>Добавить</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default CreateDevice
