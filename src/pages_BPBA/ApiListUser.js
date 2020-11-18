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
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title: 'React POST Request Example' })
        };
        fetch('http://18.191.9.5:8090/user/read', requestOptions)
            .then(response => response.json())
            //.then((data) => console.log('This is your data', data))
            .then(data => this.setState({ 
                postId: data.user.Id,
                postNama: data.user.nama,
                postHp: data.user.phone1,
                postEmail1: data.user.email1,
                postEmail2: data.email2,
                postAlamat: data.user.alamat,
                postRole: data.user.role_id,
                postStatus: data.user.status
            }));
}

render() {
    const { postId, postAlamat, postNama, postEmail1, postEmail2, postHp, postRole, postStatus } = this.state;
    
    return (
        <div>
            <Table striped bordered hover responsive>
            <thead style={{textAlign:'center'}}>
                    <tr>
                        <th>No.</th>
                        <th>ID User</th>
                        <th>Nama User</th>
                        <th>Role</th>
                        <th>Status</th>
                        <th>No.Handphone</th>
                        <th>Email 1</th>
                        <th>Email 2</th>
                        <th>Alamat</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody style={{textAlign:'center'}}>
                <tr>
                        <td>1</td>
                        <td>{postId}</td>
                        <td>{postNama}</td>
                        <td>{postRole}</td>
                        <td>{postStatus}</td>
                        <td>{postHp}</td>
                        <td>{postEmail1}</td>
                        <td>{postEmail2}</td>
                        <td>{postAlamat}</td>
                        <td style={{textAlign:'center'}}> <Button style={{"width" : "100%"}} variant="warning" onClick={() => this.setState({modalEdit: !this.state.modalEdit})}> <FontAwesomeIcon icon={faEdit} /> UBAH </Button> </td>
                        <EditUsersModal 
                            show={this.state.modalEdit}
                            onHide={() => this.setState({modalEdit: !this.state.modalEdit})}
                            />
                    </tr>
                </tbody>
            </Table>
        </div>
    );
    }
}
function EditUsersModal(props) {
    return (
        <Modal
            {...props}
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
                            <Button variant="warning">Reset Password</Button>
                        </Col>
                    </Row>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="success">Simpan</Button>
                <Button variant="danger" onClick={props.onHide}>Batal</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default GetUsers;
