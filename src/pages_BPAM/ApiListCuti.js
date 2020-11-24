import React, { Component } from "react";
import { Form, Col, Row, Button, Modal, Table } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'


class GetJadwalCuti extends Component {
    constructor(props) {
    super(props);
    this.state = {
        items: [],
        modalEdit: false,
        };
    }

   /* SAMPLE UNTUK POST DATA */
    componentDidMount() {
    
        fetch("http://18.191.9.5:8090/paid-leave/list")
            .then(res => res.json())
            .then(parsedJSON =>
            parsedJSON.paidleave.map(data => ({
                getId: `${data.Id}`,
                getTanggal: `${new Date(data.mulai_hari).toUTCString()}`,
                getTanggal2: `${new Date(data.akhir_hari).toUTCString()}`,
                getDesc: `${data.deskripsi}`,
                getUser: `${data.user_id}`,
            }))
            )
            .then(items =>
                this.setState({
                    items,
                    isLoaded: false
            })
            )
            .catch(error => console.log("parsing failed", error));
    }

    render() {
    const { items } = this.state;
    return(
        <div>
        

        
        
        <Table striped bordered hover responsive>
            <thead style={{textAlign:'center'}}>
                <tr>
                    <th>Id </th>
                    <th>Tanggal Mulai</th>
                    <th>Tanggal Berakhir</th>
                    <th>deskripsi</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody style={{textAlign:'center'}}>
                {items.length > 0 ? items.map(item => {
                    const { getId, getTanggal, getTanggal2, getDesc } = item;
                    return(
                        <tr key={getId}>
                            <td>{getId}</td>
                            <td>{getTanggal}</td>
                            <td>{getTanggal2}</td>
                            <td>{getDesc}</td>
                            <td style={{textAlign:'center'}}> 
                            <Button style={{marginRight:20}} variant="warning" onClick={() => this.setState({modalEdit: !this.state.modalEdit})}> 
                                <FontAwesomeIcon icon={faEdit} /> UBAH </Button>

                            <Button  variant="danger" onClick={() => this.setState({modalDelete: !this.state.modalDelete})}> 
                            <FontAwesomeIcon icon={faTrash} /> DELETE </Button>

                            </td>
                            <EditJadwalModal 
                                show={this.state.modalEdit}
                                onHide={() => this.setState({modalEdit: !this.state.modalEdit})}
                            />
                             <DeleteHolidayModal 
                            show={this.state.modalDelete}
                            onHide={() => this.setState({modalDelete: !this.state.modalDelete})} />

                        </tr>
                    )
                })
            : null}
            </tbody>
        </Table>
        </div>
    )
    }
}

class EditJadwalModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: null,
            tanggal: '',
            tanggal2: '',
            deskripsi:'',
            onHide: false,
            show: false,
        }
    }
    
    render(){
        return (
            <Modal show={this.props.show} onHide={this.props.onHide}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Ubah Jadwal
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

export default GetJadwalCuti;
