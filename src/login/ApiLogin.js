import React, { Component } from "react";
import { Form, Col, Row, Button, Modal, Table, ButtonGroup } from 'react-bootstrap'
import './Login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

class ApiLogin extends Component {  
    constructor(props) {
        super(props);
		//Variabel Temporary State nya sesuai isian dari Form request
        this.state = {
          email: '',
          pwd: '',
        };    
        this.handleInputChange = this.handleInputChange.bind(this);
      }
    
      handleInputChange(event) {
        const target = event.target;       
        const value = target.type === 'select' ? target.selected : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
      }

  // handleSubmit = (event) => {    
  //   fetch('http://18.191.9.5:8090/user/login', {
  //       method: 'Post',
  //       body: JSON.stringify({
	// 	//Json yang dikirim
  //         "email1": this.state.email,
  //         "password": this.state.pwd          
  //       })
  //     }).then(function(response) {
  //       console.log(response)
  //       return response.json();
  //     });
	// //localStorage.setItem("token", data.data.token);
  //   event.preventDefault();
  // }

  handleSubmit = (event) => {    
    fetch('http://18.191.9.5:8090/user/login', {
        method: 'Post',
        body: JSON.stringify({
		  //Json yang dikirim
          "email1": this.state.email,
          "password": this.state.pwd          
        })
      }).then((response) => response.json())
      .then((data) => console.log('This is your data', data));;
      //localStorage.setItem("token", data.data.token);
    event.preventDefault();
  }
  render() {
    return (		
		<div className="Login">
			<div className="auth-inner">
			<h1 style={{textAlign:'center'}}><FontAwesomeIcon icon={faUserCircle} /> </h1>
				<h4 style={{textAlign:'center', marginBottom:25}}>PLEASE LOGIN</h4>
				<Form onSubmit={this.handleSubmit}>				
					<Form.Group controId="formGroupEmail">                            
						<Form.Control name="email" type="text" placeholder="Enter Email" value={this.state.email} onChange={this.handleInputChange} />
					</Form.Group>
					<Form.Group controId="formGroupPassword">                            
						<Form.Control name="pwd" type="password" placeholder="Enter Password" value={this.state.pwd} onChange={this.handleInputChange} />
					</Form.Group>         
					<div className="a" onClick={() => this.setState({modalReset: !this.state.modalReset})}>Reset Password</div>
					<ResetModal 
                        show={this.state.modalReset}
                        onHide={() => this.setState({modalReset: !this.state.modalReset})}
                    />
					<Button variant="primary" type="submit" className="btn btn-primary btn-block">LOGIN</Button>                        
				</Form>
			</div>
		</div>				
    );
  }
}

function ResetModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Reset Password
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>                                        
                    <Form.Group as={Row} controlId="formGroupEmail">
                        <Form.Label column sm="2">Email : </Form.Label>
                        <Col sm="10">
                            <Form.Control type="email"/>
                        </Col>
                    </Form.Group>   
				<Row>
                    <Col sm="2" />
                    <Col sm="3">
                        <Button variant="success" type="submit" className="btn btn-primary btn-block">Request</Button>   	
                    </Col>
					<Col sm="3">
                        <Button variant="danger" onClick={props.onHide}>Cancel</Button>		
                    </Col>
                </Row>																					
                </Form>                
            </Modal.Body>            
        </Modal>
    )
}

export default ApiLogin;