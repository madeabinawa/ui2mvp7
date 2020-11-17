import React, {useState} from 'react'
import NavBar from '../navbar/NavbarBPBA';
import { Link } from 'react-router-dom';
import { Button, Table, Form, Row, Col, Modal } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faCalendar } from '@fortawesome/free-solid-svg-icons'

function ShowPba(props) {
    const[modalDelete, setModalDelete] = useState(false);
    return (
        <Table striped bordered hover responsive>
            <thead style={{textAlign:'center'}}>
                <tr>
                    <th>No.</th>
                    <th>Nama PBA</th>
                    <th>Email</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody style={{textAlign:'center'}}>
                <tr>
                    <td>1</td>
                    <td>Caca Marica</td>
                    <td>caca@gmail.com</td>
                    <td>
                    <Link to="/jadwalPBA">
                    <Button variant="success" style={{marginRight:10}}> <FontAwesomeIcon icon={faCalendar} /> LIHAT JADWAL </Button>
                    </Link>
                    <Button variant="danger" onClick={() => setModalDelete(true)}> <FontAwesomeIcon icon={faTrash} /> HAPUS</Button>
                        <DeletePBAModal 
                            show={modalDelete}
                            onHide={() => setModalDelete(false)}/>
                    </td>
                </tr>
            </tbody>
        </Table>
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
export default function PbaPage() {
    return (
        <div>
            <div>
                <NavBar />
            </div>
            <React.Fragment>
                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                        <h2 style={{ fontWeight: 'bold' }}>DATA PBA </h2>
                    </div>
                </div>
                <div className="container">
                    <ShowPba />
                </div>
            </React.Fragment>
        </div>
    )
}