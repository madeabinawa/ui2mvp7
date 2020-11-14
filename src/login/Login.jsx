import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'
import './Login.css'

export default class Login extends Component {
    render() {
        return (
            <div className="Login">
                <div className="auth-inner">
                    <h2 style={{textAlign:'center'}}>Login</h2>
                    <Form>
                        <Form.Group controId="formGroupEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter Email" id="email"/>
                        </Form.Group>
                        <Form.Group controId="formGroupPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Enter Password" id="password"/>
                        </Form.Group>
                        <Button variant="primary" type="submit" className="btn btn-primary btn-block">Login</Button>
                    </Form>
                </div>
            </div>
        )
    }
}
