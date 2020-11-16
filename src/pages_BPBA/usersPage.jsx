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
            Modal heading
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <h4>Centered Modal</h4>
            <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.
            </p>
        </Modal.Body>
        <Modal.Footer>
            <Button onClick={props.onHide}>Close</Button>
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