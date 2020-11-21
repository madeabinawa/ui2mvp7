import React, { Component } from "react";
import { Form, Col, Row, Button, Modal, Table, ButtonGroup } from 'react-bootstrap'
import './Form.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

class RoleApiUpdate extends Component {
    constructor(props) {
        super(props);
        //Variabel Temporary State nya sesuai isian dari Form request
        this.state = {
            id: '',  
			name: '',
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
        fetch('http://18.191.9.5:8090/role/update', {
            method: 'Post',
            body: JSON.stringify({
                //Json yang dikirim
                "id": this.state.id,
				"name": this.state.name
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
				<h4 style={{textAlign:'center', marginBottom:25}}>Update Role</h4>
				<Form onSubmit={this.handleSubmit}>	
					<Form.Group controId="formGroupRole">                            
						<Form.Control name="id" type="text" placeholder="Enter Role ID" value={this.state.id} onChange={this.handleInputChange} />
					</Form.Group>				
					<Form.Group controId="formGroupRole">                            
						<Form.Control name="name" type="text" placeholder="Enter Role Name" value={this.state.name} onChange={this.handleInputChange} />
					</Form.Group>
					<Button variant="primary" type="submit" className="btn btn-primary btn-block">Update</Button>                        
				</Form>
			</div>
		</div>		
        );
    }
}

export default RoleApiUpdate;