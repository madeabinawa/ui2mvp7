import React, { Component, useState } from 'react';
import NavBar from '../navbar/NavbarPBA';
import { Button, Table, Form, Row, Col, Modal } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPlus } from '@fortawesome/free-solid-svg-icons';

function ShowPCu(props) {
    const[modalDelete, setModalDelete] = useState(false);
    return(
        <Table striped bordered hover responsive>
            <thead style={{textAlign:'center'}}>
                <tr>
                    <th>No.</th>
                    <th>Nama PCu</th>
                    <th>Email 1</th>
                    <th>Email 2</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody style={{textAlign:'center'}}>
                <tr>
                    <td>1</td>
                    <td>Caca Marica</td>
                    <td>caca01@gmail.com</td>
                    <td>lalalili@gmail.com</td>
                    <td>
                        <Button variant="danger" onClick={() => setModalDelete(true)}> <FontAwesomeIcon icon={faTrash} /> HAPUS</Button>
                        <DeletePCuModal 
                            show={modalDelete}
                            onHide={() => setModalDelete(false)}/></td>
                </tr>
            </tbody>
        </Table>
    )
}

function ShowAvailPCu (props) {
    const[modalAdd, setModalAdd] = useState(false);
    return(
        <div>
            <Table striped bordered hover>
                <thead style={{textAlign:'center'}}>
                    <tr>
                        <th>Id Users</th>
                        <th>Nama PCu</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody style={{textAlign:'center'}}>
                    <tr>
                        <td>PB02</td>
                        <td>Nina Marlina</td>
                        <td>Enable</td>
                        <td><Button variant="success" onClick={() => setModalAdd(true)}> <FontAwesomeIcon icon={faPlus} /> TAMBAH</Button></td>
                    </tr>
                </tbody>
            </Table>
            <AddPCuModal 
                    show={modalAdd}
                    onHide={() => setModalAdd(false)}
                />
        </div>
    )
}

function AddPCuModal(props) {
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
        <p>Apakah anda yakin menambah PCu ini?</p>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="success">Ya</Button>
            <Button variant="danger" onClick={props.onHide}>Tidak</Button>
        </Modal.Footer>
        </Modal>
    )
}

function DeletePCuModal(props) {
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
        <p>Apakah anda yakin menghapus PCu ini?</p>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="success">Ya</Button>
            <Button variant="danger" onClick={props.onHide}>Tidak</Button>
        </Modal.Footer>
        </Modal>
    )
}

export default class PCuPage extends Component {
    render() {
        return (
            <div>
                <div>
                    <NavBar />
                </div>
                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                        <h2 style={{ fontWeight: 'bold' }}>DATA PCu </h2>
                    </div>
                </div>
                <div className="container">
                    <h3 style={{ color: 'orange' }}> PCu Anda </h3>
                    <ShowPCu />
                    <h3 style={{ color: 'green' }}> Available PCu </h3>
                    <ShowAvailPCu />
                </div>
            </div>
        )
    }
}
