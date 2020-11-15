import React, { Component } from 'react'
import {Form, Col, Row, Button } from 'react-bootstrap'

export default class usersPage extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                        <h3>DATA USERS</h3>
                    </div>
                </div>
                <div>
                    <Form>
                        <Form.Group as={Row} controlId="formSearch">
                            <Form.Label column sm="1">Cari: </Form.Label>
                            <Col sm="5">
                                <Form.Control type="text" placeholder="Role/Nama/Email" />
                            </Col>
                        </Form.Group>
                        <h3>Daftar Users</h3>
                        <Button variant="success" type="submit" className="float-right">TAMBAH USER</Button>
                    </Form>
                </div>
            </React.Fragment>
        )
    }
}
