import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'
import './Login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'

export default class Login extends Component {
    render() {
        return (
            <div className="Login">
                <div className="auth-inner">
                <h1 style={{textAlign:'center'}}><FontAwesomeIcon icon={faUserCircle} /> </h1>
                    <h4 style={{textAlign:'center', marginBottom:25}}>PLEASE LOGIN</h4>
                    <Form>
                        <Form.Group controId="formGroupEmail">
                            
                            <Form.Control type="email" placeholder="Enter Email" id="email"/>
                        </Form.Group>
                        <Form.Group controId="formGroupPassword">
                            
                            <Form.Control type="password" placeholder="Enter Password" id="password"/>
                        </Form.Group>
                        <Button variant="primary" type="submit" className="btn btn-primary btn-block">LOGIN</Button>
                    </Form>
                </div>
            </div>
        )
    }
}
