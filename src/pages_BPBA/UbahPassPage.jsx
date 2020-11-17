import React from 'react'
import { Form, Col, Row, Button} from 'react-bootstrap'

export default function UbahPassPage() {
    return (
        <React.Fragment>
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h2 style={{fontWeight:'bold'}}>GANTI PASSWORD</h2>
                </div>
            </div>
            <div className="container">
                <Form>
                <Form.Group as={Row} controlId="formGroupName">
                    <Form.Label column sm="2">Password: </Form.Label>
                    <Col sm="10">
                        <Form.Control type="password"/>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formGroupName">
                    <Form.Label column sm="2">Password Baru: </Form.Label>
                    <Col sm="10">
                        <Form.Control type="password"/>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formGroupName">
                    <Form.Label column sm="2">Konfirmasi Password: </Form.Label>
                    <Col sm="10">
                        <Form.Control type="password"/>
                    </Col>
                </Form.Group>
                </Form>
                <Button variant="success" >Simpan</Button>
            </div>
        </React.Fragment>
    )
}
