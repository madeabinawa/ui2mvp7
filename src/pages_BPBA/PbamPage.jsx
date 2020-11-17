import React, {useState} from 'react'
import NavBar from '../navbar/NavbarBPBA';
import { Button, Table, Form, Row, Col, Modal } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

function ShowPba(props) {
    const[modalDelete, setModalDelete] = useState(false);
    return (
        <Table striped bordered hover responsive>
            <thead style={{textAlign:'center'}}>
                <tr>
                    <th>No.</th>
                    <th>Nama PBA</th>
                    <th>Status</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody style={{textAlign:'center'}}>
                <tr>
                    <td>1</td>
                    <td>Caca Marica</td>
                    <td>Disable</td>
                    <td>
                        <Button variant="danger" onClick={() => setModalDelete(true)}> <FontAwesomeIcon icon={faTrash} /> HAPUS</Button>
                        <DeletePBAModal 
                            show={modalDelete}
                            onHide={() => setModalDelete(false)}/></td>
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
                <thead style={{textAlign:'center'}}>
                    <tr>
                        <th>Id Users</th>
                        <th>Nama PBA</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody style={{textAlign:'center'}}>
                    <tr>
                        <td>PB02</td>
                        <td>Nina Marlina</td>
                        <td>Enable</td>
                        <td><Button variant="success" onClick={() => setModalAddPDA(true)}> <FontAwesomeIcon icon={faPlus} /> TAMBAH</Button></td>
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

function DeletePBAModal(props) {
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
        <p>Apakah anda yakin menghapus PBA Nina Marlina?</p>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="success">Ya</Button>
            <Button variant="danger" onClick={props.onHide}>Tidak</Button>
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