import React, { Component } from "react";
import { Form, Col, Row, Button, Modal, Table } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'


class GetUsers extends Component {
    constructor(props) {
    super(props);
    this.state = {
        items: [],
        modalEdit: false,
        };
    }

   /* SAMPLE UNTUK POST DATA */
    componentDidMount() {
    
        fetch("http://18.191.9.5:8090/user/list")
            .then(res => res.json())
            .then(parsedJSON =>
            parsedJSON.user.map(data => ({
                getId: `${data.Id}`,
                getNama: `${data.nama}`,
                getAlamat: `${data.alamat}`,
                getHp: `${data.phone1}`,
                getEmail1: `${data.email1}`,
                getEmail2: `${data.email2}`,
                getRole: `${data.role.name}`,
                getStatus: `${data.status}`,
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
        <Table striped bordered hover responsive>
            <thead style={{textAlign:'center'}}>
                <tr>
                    <th>Id User</th>
                    <th>Nama User</th>
                    <th>Role</th>
                    <th>Email 1</th>
                    <th>Email 2</th>
                    <th>Status</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody style={{textAlign:'center'}}>
                {items.length > 0 ? items.map(item => {
                    const { getId, getNama, getAlamat, getHp, getEmail1, getEmail2, getRole, getStatus } = item;
                    return(
                        <tr key={getId}>
                            <td>{getId}</td>
                            <td>{getNama}</td>
                            <td>{getRole}</td>
                            <td>{getEmail1}</td>
                            <td>{getEmail2}</td>
                            <td>{getStatus ? 'ENABLE': 'DISABLE'}</td>
                            <td style={{textAlign:'center'}}> 
                            <Button style={{"width" : "100%"}} variant="warning" onClick={() => this.setState({modalEdit: !this.state.modalEdit})}> 
                                <FontAwesomeIcon icon={faEdit} /> UBAH </Button> 
                            </td>
                            <EditUsersModal 
                                show={this.state.modalEdit}
                                onHide={() => this.setState({modalEdit: !this.state.modalEdit})}
                            />
                        </tr>
                    )
                })
            : null}
            </tbody>
        </Table>
    )
    }
}

class EditUsersModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: null,
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
        }
    }
    
    handleResetPassword = (event) => {
        fetch('http://18.191.9.5:8090/user/reset', {
            method:'POST',
            body: JSON.stringify({
                "Id": parseFloat(this.state.id)
            })
        }).then(function(response) {
            console.log(response)
            return response.json();
        });
        this.props.onHide();
        event.preventDefault();
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
                        Ubah User
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group as={Row} controlId="formGroupRole">
                            <Form.Label column sm="2">Role: </Form.Label>
                            <Col sm="10">
                                <Form.Control as="select" defaultValue="Choose...">
                                        <option>Priority Customers (PCu)</option>
                                        <option>Personal Banking Assistent (PBA)</option>
                                        <option>Personal Banking Assistent Manager (PBAM) </option>
                                        <option>Banking Premium Booking Administration (BPBA) </option>
                                </Form.Control>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="formGroupName">
                            <Form.Label column sm="2">Nama: </Form.Label>
                            <Col sm="10">
                                <Form.Control type="text"/>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="formGroupEmail">
                            <Form.Label column sm="2">Email 1: </Form.Label>
                            <Col sm="10">
                                <Form.Control type="email"/>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="formGroupEmail2">
                            <Form.Label column sm="2">Email 2: </Form.Label>
                            <Col sm="10">
                                <Form.Control type="email"/>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="formGroupStatus">
                            <Form.Label column sm="2">Status: </Form.Label>
                            <Col sm="3">
                                <Form.Control as="select" defaultValue="Choose...">
                                    <option>Enable</option>
                                    <option>Disable</option>
                                </Form.Control>
                            </Col>
                        </Form.Group>
                    </Form>
                    <Row>
                        <Col sm="2" />
                        <Col sm="5">
                            <Button variant="warning" onClick={this.handleResetPassword}>Reset Password</Button>
                        </Col>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="success">Simpan</Button>
                    <Button variant="danger" onClick={this.props.onHide}>Batal</Button>
                </Modal.Footer>
            </Modal>
        )
    }
}
// function EditUsersModal(props) {
//     return (
//         <Modal
//             {...props}
//             size="lg"
//             aria-labelledby="contained-modal-title-vcenter"
//             centered
//         >
//             <Modal.Header closeButton>
//                 <Modal.Title id="contained-modal-title-vcenter">
//                     Ubah User
//                 </Modal.Title>
//             </Modal.Header>
//             <Modal.Body>
//                 <Form>
//                     <Form.Group as={Row} controlId="formGroupRole">
//                         <Form.Label column sm="2">Role: </Form.Label>
//                         <Col sm="10">
//                             <Form.Control as="select" defaultValue="Choose...">
//                                 <option>Priority Customers (PCu)</option>
//                                 <option>Personal Banking Assistent (PBA)</option>
//                                 <option>Personal Banking Assistent Manager (PBAM) </option>
//                                 <option>Banking Premium Booking Administration (BPBA) </option>
//                             </Form.Control>
//                         </Col>
//                     </Form.Group>
//                     <Form.Group as={Row} controlId="formGroupName">
//                         <Form.Label column sm="2">Nama: </Form.Label>
//                         <Col sm="10">
//                             <Form.Control type="text"/>
//                         </Col>
//                     </Form.Group>
//                     <Form.Group as={Row} controlId="formGroupEmail">
//                         <Form.Label column sm="2">Email 1: </Form.Label>
//                         <Col sm="10">
//                             <Form.Control type="email"/>
//                         </Col>
//                     </Form.Group>
//                     <Form.Group as={Row} controlId="formGroupEmail2">
//                         <Form.Label column sm="2">Email 2: </Form.Label>
//                         <Col sm="10">
//                             <Form.Control type="email"/>
//                         </Col>
//                     </Form.Group>
//                     <Form.Group as={Row} controlId="formGroupStatus">
//                         <Form.Label column sm="2">Status: </Form.Label>
//                         <Col sm="3">
//                             <Form.Control as="select" defaultValue="Choose...">
//                                 <option>Enable</option>
//                                 <option>Disable</option>
//                             </Form.Control>
//                         </Col>
//                     </Form.Group>
//                 </Form>
//                 <Row>
//                     <Col sm="2" />
//                     <Col sm="5">
//                         <Button variant="warning">Reset Password</Button>
//                     </Col>
//                 </Row>
//             </Modal.Body>
//             <Modal.Footer>
//                 <Button variant="success">Simpan</Button>
//                 <Button variant="danger" onClick={props.onHide}>Batal</Button>
//             </Modal.Footer>
//         </Modal>
//     )
// }

export default GetUsers;
