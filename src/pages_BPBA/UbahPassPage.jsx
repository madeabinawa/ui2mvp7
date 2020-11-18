import React, { Component } from 'react'
import { Form, Col, Row, Button} from 'react-bootstrap'
import {Redirect} from 'react-router-dom'
import NavBar from '../navbar/NavbarBPBA';

export default class UbahPassPage extends Component {
    constructor(props) {
        super(props)
        this.state ={
            newPassword: "",
            confNewPassword: "",
            isChange: false
        }
        this.controlChangePassword = this.controlChangePassword.bind(this);
    }

    controlChangePassword() {
        const isNewPassword = document.getElementById("newPassword").value  
        const isConfNewPasssword = document.getElementById("confNewPassword").value
        if(isNewPassword === isConfNewPasssword)
        {
            this.setState({isChange: true})
        }
    }
    render() {
        const isChange = this.state.isChange
        if(isChange === false) {
            return (
                <div>
                    <div>
                        <NavBar />
                    </div>
                    <div className="jumbotron jumbotron-fluid">
                        <div className="container">
                            <h2 style={{fontWeight:'bold'}}>GANTI PASSWORD</h2>
                        </div>
                    </div>
                    <div className="container">
                        <Form onSubmit={this.controlChangePassword}>
                            <Form.Group as={Row} controlId="formGroupPassword">
                                <Form.Label column sm="2">Password: </Form.Label>
                                <Col sm="5">
                                    <Form.Control type="password"/>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} controlId="formGroupNewPassword">
                                <Form.Label column sm="2">Password Baru: </Form.Label>
                                <Col sm="5">
                                    <Form.Control type="password" id="newPassword" required/>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} controlId="formGroupConfNewPassword">
                                <Form.Label column sm="2">Konfirmasi Password: </Form.Label>
                                <Col sm="5">
                                    <Form.Control type="password" id="confNewPassword" required/>
                                </Col>
                            </Form.Group>
                            <Row>
                                <Col sm="2"/>
                                <Col sm="5">
                                <Button variant="success" type= "submit" className="btn btn-primary btn-block">Simpan</Button>
                                </Col>
                            </Row>
                        </Form>
                    </div>
                </div>
            )
        }
        else {
            return(
                <Redirect to="/userPage" />
            );
        }
    }
}
