import React, {useState} from 'react'
import NavBar from '../navbar/NavbarPBAM';
import { Button, Table, Form, Row, Col, Modal, ButtonGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faPlus, faEdit } from '@fortawesome/free-solid-svg-icons'

function ShowLokasi(props) {
    const[modalAdd, setModalAdd] = useState(false);
    const[modalDelete, setModalDelete] = useState(false);
    return (
        <div>
            <h2 style={{ color: 'orange', marginTop:30 }} > LOKASI KERJA </h2>
                    <ButtonGroup className="mb-2 float-right">
                    <Button variant="primary" type="submit" onClick={() => setModalAdd(true)}> <FontAwesomeIcon icon={faPlus} /> TAMBAH LOKASI  </Button>
                    </ButtonGroup>
                    <AddLokasiModal 
                    show={modalAdd}
                    onHide={() => setModalAdd(false)}
                />
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
        </div>
    )
}

function ShowHari(props) {
    const[modalAdd, setModalAdd] = useState(false);
    const[modalEdit, setModalEdit] = useState(false);
    const[modalDelete, setModalDelete] = useState(false);
    return (
        <div>
            <h2 style={{ color: 'green', marginTop:30  }}> JADWAL HARI & JAM KERJA </h2>
            <ButtonGroup className="mb-2 float-right">
                <Button variant="primary" type="submit" onClick={() => setModalAdd(true)}> <FontAwesomeIcon icon={faPlus} /> TAMBAH HARI KERJA  </Button>
            </ButtonGroup>
            <AddHariModal 
                    show={modalAdd}
                    onHide={() => setModalAdd(false)} />
            <Table striped bordered hover responsive>
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
                        <td>
                            <Button variant="warning" onClick={() => setModalEdit(true)}> <FontAwesomeIcon icon={faEdit} /> UBAH </Button>{' '}
                            <Button variant="danger" onClick={() => setModalDelete(true)}> <FontAwesomeIcon icon={faTrash} /> HAPUS</Button>
                            <EditHariModal
                                show={modalEdit}
                                onHide={() => setModalEdit(false)}/>
                            <DeletePBAModal 
                                show={modalDelete}
                                onHide={() => setModalDelete(false)}
                            />
                        </td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}

function ShowCuti(props) {
    const[modalAdd, setModalAdd] = useState(false);
    const[modalEdit, setModalEdit] = useState(false);
    const[modalDelete, setModalDelete] = useState(false);
    return (
        <div>
            <h2 style={{ color: 'red', marginTop:30  }}> JADWAL CUTI </h2>
            <ButtonGroup className="mb-2 float-right">
                <Button variant="primary" type="submit" onClick={() => setModalAdd(true)}> <FontAwesomeIcon icon={faPlus} /> TAMBAH CUTI  </Button>
            </ButtonGroup>
            <AddCutiModal 
                show={modalAdd}
                onHide={() => setModalAdd(false)} />
            <Table striped bordered hover responsive>
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
                        <td>
                            <Button variant="warning" onClick={() => setModalEdit(true)}> <FontAwesomeIcon icon={faEdit} /> UBAH </Button>{' '}
                            <Button variant="danger" onClick={() => setModalDelete(true)}> <FontAwesomeIcon icon={faTrash} /> HAPUS </Button>
                            <EditCutiModal show={modalEdit}
                                onHide={() => setModalEdit(false)}/>
                            <DeletePBAModal 
                                show={modalDelete}
                                onHide={() => setModalDelete(false)}
                            />
                        </td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}

function AddHariModal(props) {
    return (
        <Modal
        {...props}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        >
        <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
            Tambah Jadwal Hari & Jam Kerja
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
                <Form.Group as={Row} controlId="formGroupWorkStart">
                    <Form.Label column sm="4">Tanggal Mulai: </Form.Label>
                    <Col sm="8">
                        <Form.Control type="date" placeholder="Tanggal"/>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formGroupWorkEnd">
                    <Form.Label column sm="4">Tanggal Berakhir: </Form.Label>
                    <Col sm="8">
                        <Form.Control type="date" placeholder="Tanggal"/>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formGroupTimeStart">
                    <Form.Label column sm="4">Waktu Mulai: </Form.Label>
                    <Col sm="8">
                        <Form.Control type="time" placeholder="Tanggal"/>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formGroupTimeStart">
                    <Form.Label column sm="4">Waktu Akhir: </Form.Label>
                    <Col sm="8">
                        <Form.Control type="time" placeholder="Tanggal"/>
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

function AddCutiModal(props) {
    return (
        <Modal
        {...props}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        >
        <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
            Tambah Tanggal Cuti
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
                <Form.Group as={Row} controlId="formGroupHolidayStart">
                    <Form.Label column sm="4">Tanggal Mulai: </Form.Label>
                    <Col sm="8">
                        <Form.Control type="date" placeholder="Tanggal"/>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formGroupHolidayEnd">
                    <Form.Label column sm="4">Tanggal Berakhir: </Form.Label>
                    <Col sm="8">
                        <Form.Control type="date" placeholder="Tanggal"/>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formGroupEmail2">
                    <Form.Label column sm="4">Deskripsi: </Form.Label>
                    <Col sm="8">
                        <Form.Control as="textarea" rows={3}/>
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

function AddLokasiModal(props) {
    return(
        <Modal
            {...props}
            aria-labelledby="contained-modal-title-vcenter"
            centered
            >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                Tambah Lokasi SLP
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group as={Row} controlId="formGroupRole">
                        <Form.Label column sm="5">Sentra Layanan Prioritas</Form.Label>
                        <Col sm="10">
                            <Form.Control as="select" defaultValue="Choose...">
                                <option>Bandung Dago</option>
                                <option>Banjarmasin</option>
                                <option>Denpasar</option>
                                <option>Jakarta Kelapa Gading</option>
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
function EditHariModal(props) {
    return (
        <Modal
        {...props}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        >
        <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
            Ubah Jadwal Hari & Jam Kerja
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
                <Form.Group as={Row} controlId="formGroupWorkStart">
                    <Form.Label column sm="4">Tanggal Mulai: </Form.Label>
                    <Col sm="8">
                        <Form.Control type="date" placeholder="Tanggal"/>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formGroupWorkEnd">
                    <Form.Label column sm="4">Tanggal Berakhir: </Form.Label>
                    <Col sm="8">
                        <Form.Control type="date" placeholder="Tanggal"/>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formGroupTimeStart">
                    <Form.Label column sm="4">Waktu Mulai: </Form.Label>
                    <Col sm="8">
                        <Form.Control type="time" placeholder="Tanggal"/>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formGroupTimeStart">
                    <Form.Label column sm="4">Waktu Akhir: </Form.Label>
                    <Col sm="8">
                        <Form.Control type="time" placeholder="Tanggal"/>
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

function EditCutiModal(props) {
    return (
        <Modal
        {...props}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        >
        <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
            Ubah Tanggal Cuti
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
                <Form.Group as={Row} controlId="formGroupHolidayStart">
                    <Form.Label column sm="4">Tanggal Mulai: </Form.Label>
                    <Col sm="8">
                        <Form.Control type="date" placeholder="Tanggal"/>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formGroupHolidayEnd">
                    <Form.Label column sm="4">Tanggal Berakhir: </Form.Label>
                    <Col sm="8">
                        <Form.Control type="date" placeholder="Tanggal"/>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formGroupEmail2">
                    <Form.Label column sm="4">Deskripsi: </Form.Label>
                    <Col sm="8">
                        <Form.Control as="textarea" rows={3}/>
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
function DeletePBAModal(props) {
    return (
        <Modal
        {...props}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        >
        <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
            Notifikasi
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <p>Apakah anda yakin menghapus data ini?</p>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="success">Ya</Button>
            <Button variant="danger" onClick={props.onHide}>Tidak</Button>
        </Modal.Footer>
        </Modal>
    )
}

export default function JadwalPBA() {
    const ColoredLine = ({ color }) => (
        <hr
            style={{
                color: color,
                backgroundColor: 'black',
                height: 3
            }}
        />
    );
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

                    <ColoredLine color="black" />

                    <ShowLokasi />

                    <ColoredLine color="black" />

                    <ShowHari />

                    <ColoredLine color="black" />

                    <ShowCuti />
                </div>
            </React.Fragment>
        </div>
    )
}