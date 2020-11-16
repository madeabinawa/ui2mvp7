import React,{ useState } from 'react'
import { Form, Col, Row, Button, Modal, Table, ButtonGroup } from 'react-bootstrap'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faEdit } from '@fortawesome/free-solid-svg-icons'
import NavBar from '../navbar/NavbarBPBA';

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
                            <option>Priority Customers (PCu)</option>
                            <option>Personal Banking Assistent (PBA)</option>
                            <option>Personal Banking Assistent Manager (PBAM) </option>
                            <option>Banking Premium Booking Administration (BPBA) </option>
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
function ShowAllUsers(props) {
    return(
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>ID User</th>
                    <th>Nama User</th>
                    <th>Role</th>
                    <th>Email 1</th>
                    <th>Email 2</th>
                    <th>Status</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
            <tr>
                    <td>PCU01</td>
                    <td>Caca Marica</td>
                    <td>PCU</td>
                    <td>caca01@gmail.com</td>
                    <td></td>
                    <td>Disable</td>
                    {/* <td><FontAwesomeIcon icon={faEdit} /></td> */}
                </tr>
            </tbody>
        </Table>
    )
}
export default function UsersPage() {
    
    const[modalAdd, setModalAdd] = useState(false);
    return (
        <div>
            <div>
            <NavBar />
        </div>

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
               
                <ButtonGroup className="mb-2 float-right">
                    <Button variant="primary" type="submit" onClick={() => setModalAdd(true)}>TAMBAH USER</Button>
                </ButtonGroup>
                <AddUsersModal 
                    show={modalAdd}
                    onHide={() => setModalAdd(false)}
                />
                <ShowAllUsers />
                
            </div>
        </React.Fragment>
        </div>
    )
}