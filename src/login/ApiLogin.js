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
          token: '',
        };    
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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
	// 	  //Json yang dikirim
  //         "email1": this.state.email,
  //         "password": this.state.pwd          
  //       })
  //     }).then((response) => response.json())
  //     .then((data) => console.log('This is your data', data));
  //   event.preventDefault();
  // }
  handleSubmit = (event, me) => {    
    fetch('http://18.191.9.5:8090/user/login', {
        method: 'Post',
        body: JSON.stringify({
		  //Json yang dikirim
          "email1": this.state.email,
          "password": this.state.pwd          
        })
      }).then((response) => response.json())
      .then(function (data)
      { console.log(data)
        me.setState({ token: data.user.role.Id})
      });
    event.preventDefault();
  }
  render() {
    return (		
		<div className="Login">
			<div className="auth-inner">
			<h1 style={{textAlign:'center'}}><FontAwesomeIcon icon={faUserCircle} /> </h1>
				<h4 style={{textAlign:'center', marginBottom:25}}>PLEASE LOGIN</h4>
				<Form onSubmit={(e)=>this.handleSubmit(e,this)}>				
					<Form.Group controlId="formGroupEmail">                            
						<Form.Control name="email" type="text" placeholder="Enter Email" value={this.state.email} onChange={this.handleInputChange} />
					</Form.Group>
					<Form.Group controlId="formGroupPassword">                            
						<Form.Control name="pwd" type="password" placeholder="Enter Password" value={this.state.pwd} onChange={this.handleInputChange} />
					</Form.Group>         
					<Button variant="primary" type="submit" className="btn btn-primary btn-block">LOGIN</Button>
          <div style={{textAlign:"center"}}>
          <a style={{fontSize:13}} href={("#")} onClick={() => this.setState({modalReset: !this.state.modalReset})}>Reset Password</a>
          </div>
					<ResetModal 
            show={this.state.modalReset}
            onHide={() => this.setState({modalReset: !this.state.modalReset})}
            />                        
				</Form>
			</div>
		</div>				
    );
  }
}

class ResetModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email:'',
      onHide: false,
      show: false,
    };
  }

    handleSubmit = (event) => {
      fetch('http://18.191.9.5:8090/user/resetbymail', {
        method: 'POST',
        body: JSON.stringify({
          "email1": this.state.email
        })
      }).then((response) => response.json())
      .then((data) => console.log('This is your data', data));
      // this.props.onHide();
      // window.location.reload();
      event.preventDefault();
    }
  render() {
    return(
      <Modal show={this.props.show} onHide={this.props.onHide}
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
              </Form>                
          </Modal.Body>
          <Modal.Footer>
            <Button variant="success" type="submit" onClick={this.handleSubmit}>Request</Button>
            <Button variant="danger" onClick={this.props.onHide}>Cancel</Button>		
          </Modal.Footer>            
      </Modal>
    )
}
}

export default ApiLogin;