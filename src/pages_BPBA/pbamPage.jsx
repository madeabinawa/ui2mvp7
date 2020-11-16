import React, {useState} from 'react'
import NavBar from '../navbar/NavbarBPBA';
import { Button, Table, Form, Row, Col, Modal, ButtonGroup } from 'react-bootstrap';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faTrash } from '@fortawesome/free-solid-svg-icons'

function ShowPba(props) {
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>No.</th>
                    <th>Nama PBA</th>
                    <th>Status</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Caca Marica</td>
                    <td>Disable</td>
                    {/* <td><FontAwesomeIcon icon={faTrash} /></td> */}
                </tr>
            </tbody>
        </Table>
    )
}

function ShowAvalPba(props) {
    const[modalAddPDA, setModalAddPDA] = useState(false);
    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Id Users</th>
                        <th>Nama PBA</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>PB02</td>
                        <td>Nina Marlina</td>
                        <td>Enable</td>
                        <td><Button variant="success" onClick={() => setModalAddPDA(true)}>TAMBAH</Button></td>
                    </tr>
                </tbody>
            </Table>
            <AddPBAModal 
                    show={modalAddPDA}
                    onHide={() => setModalAddPDA(false)}
                />
        </div>
    )
}

function AddPBAModal(props) {
    return (
        <Modal
        {...props}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        >
        <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
            Nortifikasi
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <p>Apakah anda yakin menambahkan Nina Marlina sebagai PBA Revi Yay?</p>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="success">Simpan</Button>
            <Button variant="danger" onClick={props.onHide}>Batal</Button>
        </Modal.Footer>
        </Modal>
    )
}
export default function PbamPage() {
    return (
        <div>
            <div>
                <NavBar />
            </div>
            <React.Fragment>
                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                        <h2 style={{ fontWeight: 'bold' }}>DATA PBAM </h2>
                    </div>
                </div>
                <div className="container">
                    <Form>
                        <Form.Group as={Row} controlId="formGroupRole">
                            <Form.Label column sm="1">PBAM: </Form.Label>
                            <Col sm="5">
                                <Form.Control as="select" defaultValue="Choose...">
                                    <option>Revi Yey</option>
                                </Form.Control>
                            </Col>
                        </Form.Group>
                    </Form>
                    <h3 style={{ color: 'orange' }}> Anggota PBA </h3>
                    <ShowPba />
                    <h3 style={{ color: 'green' }}> Available PBA </h3>
                    <ShowAvalPba />
                </div>
            </React.Fragment>
        </div>
    )
}