import React, { Component } from 'react'
import { Form, Col, Row, Button} from 'react-bootstrap'
import NavBar from '../navbar/NavbarBPBA';

export default class UbahPassPage extends Component {
    render() {
        return (
            <div>
                <div>
                    <NavBar />
                </div>
                <React.Fragment>
                    <div className="jumbotron jumbotron-fluid">
                        <div className="container">
                            <h2 style={{fontWeight:'bold'}}>GANTI PASSWORD</h2>
                        </div>
                    </div>
                    <div className="container">
                        <Form>
                        <Form.Group as={Row} controlId="formGroupPassword">
                            <Form.Label column sm="2">Password: </Form.Label>
                            <Col sm="5">
                                <Form.Control type="password"/>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="formGroupNewPassword">
                            <Form.Label column sm="2">Password Baru: </Form.Label>
                            <Col sm="5">
                                <Form.Control type="password"/>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="formGroupConfNewPassword">
                            <Form.Label column sm="2">Konfirmasi Password: </Form.Label>
                            <Col sm="5">
                                <Form.Control type="password"/>
                            </Col>
                        </Form.Group>
                        </Form>
                        <Row>
                            <Col sm="2" />
                            <Col sm="5">
                                <Button variant="success" className="btn btn-primary btn-block">Simpan</Button>
                            </Col>
                        </Row>
                    </div>
                </React.Fragment>
            </div>
        )
    }
}
