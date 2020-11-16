import React,{ useState } from 'react'
import { Form, Col, Row, Button, Modal } from 'react-bootstrap'

function AddUsersModal(props) {
    return (
        <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        >
        <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
            Tambah User
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
                <Form.Group as={Row} controlId="formGroupRole">
                    <Form.Label column sm="2">Role: </Form.Label>
                    <Col sm="10">
                        <Form.Control as="select" defaultValue="Choose...">
                            <option>Yes</option>
                        </Form.Control>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formGroupName">
                    <Form.Label column sm="2">Nama: </Form.Label>
                    <Col sm="10">
                        <Form.Control type="text"/>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formGroupEmail">
                    <Form.Label column sm="2">Email 1: </Form.Label>
                    <Col sm="10">
                        <Form.Control type="email"/>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formGroupEmail2">
                    <Form.Label column sm="2">Email 2: </Form.Label>
                    <Col sm="10">
                        <Form.Control type="email"/>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formGroupStatus">
                    <Form.Label column sm="2">Status: </Form.Label>
                    <Col sm="3">
                        <Form.Control as="select" defaultValue="Choose...">
                            <option>Enable</option>
                            <option>Disable</option>
                        </Form.Control>
                    </Col>
                </Form.Group>
            </Form>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="success">Simpan</Button>
            <Button variant="danger" onClick={props.onHide}>Batal</Button>
        </Modal.Footer>
        </Modal>
    )
}

export default function UsersPage() {
    const[modalAdd, setModalAdd] = useState(false);
    return (
        <React.Fragment>
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h2 style={{fontWeight:'bold'}}>DATA USERS</h2>
                </div>
            </div>
            <div className="container">
                <Form>
                    <Form.Group as={Row}>
                    <Form.Label column sm="1">Cari: </Form.Label>
                    <Col sm="5">
                        <Form.Control type="text" placeholder="Role/Nama/Email"/>
                    </Col>
                    </Form.Group>
                </Form>
                <h3>Daftar Users</h3>
                <Button variant="success" type="submit" className="float-right" onClick={() => setModalAdd(true)}>TAMBAH USER</Button>
                
                <AddUsersModal 
                    show={modalAdd}
                    onHide={() => setModalAdd(false)}
                />
            </div>
        </React.Fragment>
    )
}