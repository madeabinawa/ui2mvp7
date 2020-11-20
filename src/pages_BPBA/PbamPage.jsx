import React, {useState} from 'react'
import NavBar from '../navbar/NavbarBPBA';
import { Button, Table, Form, Row, Col, Modal } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import ShowAllPba from './ApiListPBA';
import ShowPbaNonPBAM from './ApiListNonPBAM';


export default function PbamPage() {
    return (
        <div>
            <div>
                <NavBar />
            </div>
            <React.Fragment>
                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                        <h2 style={{ fontWeight: 'bold' }}>DATA PBAM </h2>
                    </div>
                </div>
                <div className="container">
                    <Form>
                        <Form.Group as={Row} controlId="formGroupRole">
                            <Form.Label column sm="1">PBAM: </Form.Label>
                            <Col sm="5">
                                <Form.Control as="select" defaultValue="Choose...">
                                    <option>Revi Yey</option>
                                </Form.Control>
                            </Col>
                            <Button type="submit" variant="primary"> TAMPIL </Button> 
                        </Form.Group>
                    </Form>
                    
                    <ShowAllPba />
                    
                    <ShowPbaNonPBAM />
                    
                </div>
            </React.Fragment>
        </div>
    )
}