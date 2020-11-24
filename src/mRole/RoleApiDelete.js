import React, { Component } from "react";
import { Form, Col, Row, Button, Modal, Table, ButtonGroup } from 'react-bootstrap'
import '../login/Login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

class RoleApiDelete extends Component {
    constructor(props) {
        super(props);
        //Variabel Temporary State nya sesuai isian dari Form request
        this.state = {
            id: '',  			
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
        fetch('http://18.191.9.5:8090/role/delete', {
            method: 'Post',
            body: JSON.stringify({
                //Json yang dikirim
                "id": this.state.id			
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
        <div className="Form-Input">
			<div className="auth-inner">
			<h1 style={{textAlign:'center'}}><FontAwesomeIcon icon={faUserCircle} /> </h1>
				<h4 style={{textAlign:'center', marginBottom:25}}>Delete Role</h4>
				<Form onSubmit={this.handleSubmit}>	
					<Form.Group controId="formGroupRole">                            
						<Form.Control name="id" type="text" placeholder="Enter Role ID" value={this.state.id} onChange={this.handleInputChange} />
					</Form.Group>		
					<Button variant="primary" type="submit" className="btn btn-primary btn-block">Delete</Button>                        
				</Form>
			</div>
		</div>		
        );
    }
}

export default RoleApiDelete;