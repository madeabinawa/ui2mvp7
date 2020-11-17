import React, {useState} from 'react'
import { Form, Col, Row, Button, Modal, Table, ButtonGroup } from 'react-bootstrap'

function ShowAllHoliday(props) {
    return(
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>ID Libur</th>
                    <th>Tanggal Mulai</th>
                    <th>Tanggal Berakhir</th>
                    <th>Deskripsi</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
            <tr>
                    <td>JD01</td>
                    <td>25 Desember 2020</td>
                    <td>25 Desember 2020</td>
                    <td>Hari Natal</td>
                    <td></td>
                </tr>
            </tbody>
        </Table>
    )
}
function AddHolidayModal(props) {
    return (
        <Modal
        {...props}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        >
        <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
            Tambah Tanggal Libur
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
export default function JadwalPage() {
    const[modalAdd, setModalAdd] = useState(false);
    return (
        <React.Fragment>
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h2 style={{fontWeight:'bold'}}>JADWAL LIBUR</h2>
                </div>
            </div>
            <div className="container">
                <ButtonGroup className="mb-2 float-right">
                    <Button variant="primary" type="submit" onClick={() => setModalAdd(true)}>TAMBAH JADWAL</Button>
                </ButtonGroup>
                <AddHolidayModal 
                    show={modalAdd}
                    onHide={() => setModalAdd(false)}
                />
                <ShowAllHoliday />
            </div>
        </React.Fragment>
    )
}
