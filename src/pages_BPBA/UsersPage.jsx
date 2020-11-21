import React,{ useState, Component } from 'react'
import { Form, Col, Row, Button, Modal, Table, ButtonGroup } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import NavBar from '../navbar/NavbarBPBA';
import ShowAllUsers from './ApiListUser';

const options = [
    {
        label: "ENABLE",
        value: 1,
    },
    {
        label: "DISABLE",
        value: 0,
    },
];

const selectrole = [
    { 
        label: "Priority Customers (PCu)",
        value: 1,
    },
    {
        label: "Personal Banking Assistent (PBA)",
        value: 2,
    },
    {
        label: "Personal Banking Assistent Manager (PBAM)",
        value: 3,
    },
    {
        label: "Banking Premium Booking Administration (BPBA)",
        value: 4,
    },
];

class AddUsersModal extends Component {
    constructor(props) {
        super(props);
        this.state ={
            nama: '',
            alamat: '',
            role_id: null,
            email1: '',
            email2: '',
            phone1: '',
            phone2: '',
            password:'123456',
            status: null,
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
        // alert('data telah di tambahkan: ' + this.state.value);
        fetch('http://18.191.9.5:8090/user/create', {
            method: 'POST',
            body: JSON.stringify({
                "nama": this.state.nama,
                "alamat": this.state.alamat,
                "email1": this.state.email1,
                "email2": this.state.email2,
                "phone1": this.state.phone1,
                "phone2": this.state.phone2,
                "password": this.state.password,
                "role_id": parseFloat(this.state.role_id),
                "status": parseFloat(this.state.status)
            })
        }).then(function(response) {
            console.log(response)
            return response.json();
        });
        this.props.onHide();
        window.location.reload();
        event.preventDefault();

    }
    render() {
        return (
            <Modal show={this.props.show} onHide={this.props.onHide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                    Tambah User
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group as={Row} controlId="formGroupRole">
                            <Form.Label column sm="2">Role: </Form.Label>
                            <Col sm="10">
                                <select className="form-control" name="role_id" value={this.state.role_id} onChange={this.handleInputChange}>
                                    {selectrole.map((option) => (
                                    <option value={option.value}>{option.label}</option>
                                    ))}
                                </select>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="formGroupName">
                            <Form.Label column sm="2">Nama: </Form.Label>
                            <Col sm="10">
                                <Form.Control name="nama" type="text" value={this.state.nama} onChange={this.handleInputChange}/>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="formGroupAddress">
                            <Form.Label column sm="2">Alamat: </Form.Label>
                            <Col sm="10">
                                <Form.Control name="alamat" type="text" value={this.state.alamat} onChange={this.handleInputChange} />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="formGroupNumberHP">
                            <Form.Label column sm="2">No. Handphone </Form.Label>
                            <Col sm="10">
                                <Form.Control name="phone1" type="text" value={this.state.phone1} onChange={this.handleInputChange} />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="formGroupEmail">
                            <Form.Label column sm="2">Email 1: </Form.Label>
                            <Col sm="10">
                                <Form.Control name="email1" type="email" value={this.state.email1} onChange={this.handleInputChange}/>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="formGroupEmail2">
                            <Form.Label column sm="2">Email 2: </Form.Label>
                            <Col sm="10">
                                <Form.Control name="email2" type="email" value={this.state.email2} onChange={this.handleInputChange}/>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="formGroupStatus">
                            <Form.Label column sm="2">Status: </Form.Label>
                            <Col sm="3">
                            <select className="form-control" name="status" value={this.state.status} onChange={this.handleInputChange}>
                                {options.map((option) => (
                                <option value={option.value}>{option.label}</option>
                                ))}
                            </select>
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

export default function UsersPage() {
    const[modalAdd, setModalAdd] = useState(false);
    return (
        <div>
            <div>
                <NavBar />
            </div>
        <React.Fragment>
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h2 style={{fontWeight:'bold'}}>DATA USERS</h2>
                </div>
            </div>
            <div className="container">
                <Form>
                    <Form.Group as={Row}>
                    <Form.Label column sm="1">Cari: </Form.Label>
                    <Col sm="5">
                        <Form.Control type="text" placeholder="Role/Nama/Email"/>
                    </Col>
                    </Form.Group>
                </Form>
                <ButtonGroup className="mb-2 float-right">
                    <Button variant="primary" type="submit" onClick={() => setModalAdd(true)}> <FontAwesomeIcon icon={faPlus} /> TAMBAH USER  </Button>
                </ButtonGroup>
                <AddUsersModal 
                    show={modalAdd}
                    onHide={() => setModalAdd(false)}
                />
                <ShowAllUsers />
                
            </div>
        </React.Fragment>
        </div>
    )
}