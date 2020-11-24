import React,{ useState, Component } from 'react'
import { Form, Col, Row, Button, Modal, Table, ButtonGroup } from 'react-bootstrap'
import NavBar from '../navbar/NavbarBPBA';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import ShowAllHoliday from './ApiListJadwalLibur';


class AddHolidayModal extends Component {

    constructor(props) {
        super(props);
        this.state ={
            id: '',
            tanggal: '',
            tanggal2:'',
            deskripsi: '',
            onHide: false,
            show: false,
        };
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
       // const value = target.type === 'checkbox' ? target.checked : target.value;
        const value = target.type === 'select' ? target.selected : target.value;
        const name = target.name;
    
        this.setState({
            [name]: value
        });
    }

    handleSubmit = (event) => {
        alert('data telah di tambahkan: ');
        fetch('http://18.191.9.5:8090/day-off/create', {
            method: 'POST',
            body: JSON.stringify({
                "tanggal": new Date(this.state.tanggal).toISOString(),
                "tanggal2": new Date(this.state.tanggal).toISOString(),
                "deskripsi": this.state.deskripsi,
            })
        }).then(function(response) {
            console.log(response)
            return response.json();
        });
        this.props.onHide();
        window.location.reload();
        event.preventDefault();

    }
render () {
    
        return (
        <Modal show={this.props.show} onHide={this.props.onHide}
            size="lg"
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
                    <Form.Control name="tanggal" type="date" value={this.state.tanggal} onChange={this.handleInputChange} />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formGroupHolidayEnd">
                    <Form.Label column sm="4">Tanggal Berakhir: </Form.Label>
                    <Col sm="8">
                    <Form.Control name="tanggal2" type="date" value={this.state.tanggal} onChange={this.handleInputChange} />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formGroupEmail2">
                    <Form.Label column sm="4">Deskripsi: </Form.Label>
                    <Col sm="8">
                    <Form.Control as="textarea" rows={3} name="deskripsi" value={this.state.deskripsi} onChange={this.handleInputChange}/>
                    </Col>
                </Form.Group>
            </Form>
        </Modal.Body>
        <Modal.Footer>
        <Button variant="success" type="submit" value="Submit" onClick={this.handleSubmit}>Simpan</Button> {' '}
            <Button variant="danger" onClick={this.props.onHide}>Batal</Button>
        </Modal.Footer>
        </Modal>
    )
  }

}


function DeleteHolidayModal(props) {
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
        <p>Apakah anda yakin menghapus Libur Hari Natal?</p>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="success">Ya</Button>
            <Button variant="danger" onClick={props.onHide}>Tidak</Button>
        </Modal.Footer>
        </Modal>
    )
}

export default function JadwalPage() {
    const[modalAdd, setModalAdd] = useState(false);
    return (
        <React.Fragment>
            <div>
                <NavBar />
            </div>
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h2 style={{fontWeight:'bold'}}>JADWAL LIBUR</h2>
                </div>
            </div>
            <div className="container">
                <ButtonGroup className="mb-2 float-right">
                    <Button variant="primary" type="submit" onClick={() => setModalAdd(true)}><FontAwesomeIcon icon={faPlus} /> TAMBAH JADWAL</Button>
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
