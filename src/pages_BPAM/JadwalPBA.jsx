import React, {useState} from 'react'
import NavBar from '../navbar/NavbarBPBA';
import { Button, Table, Form, Row, Col, Modal, ButtonGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

function ShowLokasi(props) {
    const[modalDelete, setModalDelete] = useState(false);
    return (
        <Table striped bordered hover responsive>
            <thead style={{textAlign:'center'}}>
                <tr>
                    <th>No.</th>
                    <th>Kantor</th>
                    <th>Alamat Kantor</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody style={{textAlign:'center'}}>
                <tr>
                    <td>1</td>
                    <td>Cabang Kelas 1 Bandung</td>
                    <td>Jl. Gegerkalong No.25</td>
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

function ShowHari(props) {
    const[modalAddPDA, setModalAddPDA] = useState(false);
    return (
        <div>
            <Table striped bordered hover>
                <thead style={{textAlign:'center'}}>
                    <tr>
                        <th>No.</th>
                        <th>Tanggal Mulai</th>
                        <th>Tanggal Berakhir</th>
                        <th>Waktu Mulai</th>
                        <th>Waktu Akhir</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody style={{textAlign:'center'}}>
                    <tr>
                        <td>1</td>
                        <td>16 Desember 2020</td>
                        <td>16 Desember 2020</td>
                        <td>09:00</td>
                        <td>11:00</td>
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

function ShowCuti(props) {
    const[modalAddPDA, setModalAddPDA] = useState(false);
    return (
        <div>
            <Table striped bordered hover>
                <thead style={{textAlign:'center'}}>
                    <tr>
                        <th>No.</th>
                        <th>Tanggal Mulai</th>
                        <th>Tanggal Berakhir</th>
                        <th>Deskripsi</th>
                        
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody style={{textAlign:'center'}}>
                    <tr>
                        <td>1</td>
                        <td>16 Desember 2020</td>
                        <td>18 Desember 2020</td>
                        <td>Cuti Kerja</td>
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
export default function JadwalPBA() {
    const[modalAddPDA, setModalAddPDA] = useState(false);
    return (
        <div>
            <div>
                <NavBar />
            </div>
            <React.Fragment>
                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                        <h2 style={{ fontWeight: 'bold' }}> DATA PBA </h2>
                    </div>
                </div>
                <div className="container">
                    <h4> Nama: Niana Marlina </h4>
                    <h4> Role: Personal Banking Asistant (PBA) </h4>

                    <h2 style={{ color: 'orange' }} > LOKASI KERJA </h2>
                    <ButtonGroup className="mb-2 float-right">
                    <Button variant="primary" type="submit" onClick={() => setModalAddPDA(true)}> <FontAwesomeIcon icon={faPlus} /> TAMBAH LOKASI  </Button>
                    </ButtonGroup>
                    <ShowLokasi />
                    <h2 style={{ color: 'green' }}> JADWAL HARI & JAM KERJA </h2>
                    <ButtonGroup className="mb-2 float-right">
                    <Button variant="primary" type="submit" onClick={() => setModalAddPDA(true)}> <FontAwesomeIcon icon={faPlus} /> TAMBAH JADWAL KERJA  </Button>
                    </ButtonGroup>
                    <ShowHari />
                    <h2 style={{ color: 'red' }}> JADWAL CUTI </h2>
                    <ButtonGroup className="mb-2 float-right">
                    <Button variant="primary" type="submit" onClick={() => setModalAddPDA(true)}> <FontAwesomeIcon icon={faPlus} /> TAMBAH CUTI  </Button>
                    </ButtonGroup>
                    <ShowCuti />
                </div>
            </React.Fragment>
        </div>
    )
}