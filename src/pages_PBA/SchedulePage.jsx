import React, {useState} from 'react'
import { Button, Table, Form, Modal } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBan, faCheck, faEdit, faComment, faTimes } from '@fortawesome/free-solid-svg-icons';

function ShowMeeting (props) {
    const[modalCancel, setModalCancel] = useState(false);
    const[modalFeedback, setModalFeedback] = useState(false);
    return(
        <Table striped bordered hover responsive>
            <thead style={{textAlign:'center'}}>
                <tr>
                    <th>ID User</th>
                    <th>Nama PCu</th>
                    <th>Tanggal</th>
                    <th>Jam Mulai</th>
                    <th>Deskripsi</th>
                    <th>Status</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody style={{textAlign:'center'}}>
            <tr>
                    <td>JD01</td>
                    <td>Caca Marica</td>
                    <td>20 Desember 2020</td>
                    <td>08:00</td>
                    <td>Membuat Asuransi Pendidikan</td>
                    <td>On Going</td>
                    <td>
                        <Button variant="danger" onClick={() => setModalCancel(true)}> <FontAwesomeIcon icon={faBan} /> CANCEL </Button>
                        <CancelModal show={modalCancel}
                            onHide={() => setModalCancel(false)}/>
                    </td>
                </tr>
                <tr>
                    <td>JD02</td>
                    <td>Giri Ginanjar</td>
                    <td>18 Desember 2020</td>
                    <td>08:00</td>
                    <td>Membuat Asuransi Pensiun</td>
                    <td>Finish</td>
                    <td>
                        <Button variant="info" onClick={() => setModalFeedback(true)}> <FontAwesomeIcon icon={faComment} /> FEEDBACK </Button>
                        <FeedbackModal show={modalFeedback}
                            onHide={() => setModalFeedback(false)}/>
                    </td>
                </tr>
            </tbody>
        </Table>
    )
}
function ShowRequest (props) {
    const[modalDecline, setModalDecline] = useState(false);
    return(
        <Table striped bordered hover responsive>
            <thead style={{textAlign:'center'}}>
                <tr>
                    <th>ID User</th>
                    <th>Nama PCu</th>
                    <th>Tanggal</th>
                    <th>Jam Mulai</th>
                    <th>Deskripsi</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody style={{textAlign:'center'}}>
            <tr>
                    <td>JD01</td>
                    <td>Caca Marica</td>
                    <td>25 Desember 2020</td>
                    <td>08:00</td>
                    <td>Membuat Asuransi Pendidikan</td>
                    <td>
                        <Button variant="success"> <FontAwesomeIcon icon={faCheck} /> TERIMA</Button>{' '}
                        <Button variant="danger" onClick={() => setModalDecline(true)}> <FontAwesomeIcon icon={faTimes} /> TOLAK </Button>
                        <DeclineModal show={modalDecline}
                            onHide={() => setModalDecline(false)}/>
                    </td>
                </tr>
            </tbody>
        </Table>
    )
}
function ShowDecline (props) {
    const[modalUpdate, setModalUpdate] = useState(false);
    return(
        <Table striped bordered hover responsive>
            <thead style={{textAlign:'center'}}>
                <tr>
                    <th>ID User</th>
                    <th>Nama PCu</th>
                    <th>Tanggal</th>
                    <th>Jam Mulai</th>
                    <th>Deskripsi</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody style={{textAlign:'center'}}>
            <tr>
                    <td>JD01</td>
                    <td>Caca Marica</td>
                    <td>25 Desember 2020</td>
                    <td>08:00</td>
                    <td>Membuat Asuransi Pendidikan</td>
                    <td>
                        <Button variant="warning" onClick={() => setModalUpdate(true)}> <FontAwesomeIcon icon={faEdit} /> UPDATE </Button>{' '}
                        <UpdateDeclineModal show={modalUpdate}
                            onHide={() => setModalUpdate(false)}/>
                    </td>
                </tr>
            </tbody>
        </Table>
    )
}
function CancelModal(props) {
    return(
        <Modal
        {...props}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                Batal Pertemuan
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group>
                        <Form.Label style={{textAlign:'center'}}>Pesan</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="success" onClick={props.onHide}>Kirim</Button>
            </Modal.Footer>
        </Modal>
    )
}
function FeedbackModal (props) {
    return(
        <Modal
        {...props}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                Feedback
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group>
                        <Form.Label>Pesan</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="success" onClick={props.onHide}>Kirim</Button>
            </Modal.Footer>
        </Modal>
    )
}
function DeclineModal (props) {
    return (
        <Modal
        {...props}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                Tolak Pertemuan
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group>
                        <Form.Label>Pesan</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="success" onClick={props.onHide}>Kirim</Button>
            </Modal.Footer>
        </Modal>
    )
}
function UpdateDeclineModal (props) {
    return (
        <Modal
        {...props}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                Update Tolak Pertemuan
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group>
                        <Form.Label>Pesan</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="success" onClick={props.onHide}>Kirim</Button>
            </Modal.Footer>
        </Modal>
    )
}
export default function SchedulePage() {
    return (
        <div>
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h2 style={{ fontWeight: 'bold' }}> JADWAL PERTEMUAN </h2>
                </div>
            </div>
            <div className="container">
                <h3 style={{ color: 'dodgerblue' }}> Pertemuan Terjadwal </h3>
                <ShowMeeting />
                <h3 style={{ color: 'green' }}> Permintaan Pertemuan </h3>
                <ShowRequest />
                <h3 style={{ color: 'red' }}> Pertemuan Ditolak </h3>
                <ShowDecline />
            </div>
        </div>
    )
}
