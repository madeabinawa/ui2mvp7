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

  handleSubmit = (event) => {    
    fetch('http://18.191.9.5:8090/user/login', {
        method: 'Post',
        body: JSON.stringify({
		//Json yang dikirim
          "email1": this.state.email,
          "password": this.state.pwd          
        })
      }).then(function(response) {
        console.log(response)
        return response.json();
      });
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
					<Button variant="primary" type="submit" className="btn btn-primary btn-block">LOGIN</Button>                        
				</Form>
			</div>
		</div>				
    );
  }
}

export default ApiLogin;