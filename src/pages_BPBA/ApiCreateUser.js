import React, { Component } from "react";
import { Form, Col, Row, Button, Modal, Table, ButtonGroup } from 'react-bootstrap'


const options = [
  {
    label: "ENABLE",
    value: 1,
  },
  {
    label: "DISABLE",
    value: 0,
  },

];

const selectrole = [
  { 
    label: "Priority Customers (PCu)",
    value: 1,
  },
  {
    label: "Personal Banking Assistent (PBA)",
    value: 2,
  },
  {
    label: "Personal Banking Assistent Manager (PBAM)",
    value: 3,
  },
  {
    label: "Banking Premium Booking Administration (BPBA)",
    value: 4,
  },
];

class PostUsers extends Component {
  
    constructor(props) {
        super(props);
        this.state = {
          nama: '',
          alamat: '',
          role_id: null,
          email1: '',
          email2: '',
          phone1: '',
          phone2: '',
          status: null,
        };
    
        this.handleInputChange = this.handleInputChange.bind(this);
      }
    
      handleInputChange(event) {
        const target = event.target;
       // const value = target.type === 'checkbox' ? target.checked : target.value;
        const value = target.type === 'select' ? target.selected : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
      }

  handleSubmit = (event) => {
    alert('data telah di tambahkan: ' + this.state.value);
    fetch('http://18.191.9.5:8090/user/create', {
        method: 'POST',
        body: JSON.stringify({
          "nama": this.state.nama,
          "alamat": this.state.alamat,
          "email1": this.state.email1,
          "email2": this.state.email2,
          "phone1": this.state.phone1,
          "phone2": this.state.phone2,
          "role_id": parseFloat(this.state.role_id),
          "status": parseFloat(this.state.status)
        })
      }).then(function(response) {
        console.log(response)
        return response.json();
      });

    event.preventDefault();
}
  render() {
    return (
    <div>
      <Form onSubmit={this.handleSubmit}>

      <Form.Group as={Row} controlId="formGroupStatus">
                    <Form.Label column sm="2">Role: </Form.Label>
                    <Col sm="10">
                    <select className="form-control" name="role_id" value={this.state.role_id} onChange={this.handleInputChange}>
                        {selectrole.map((option) => (
                          <option value={option.value}>{option.label}</option>
                        ))}
                      </select>
                    </Col>
                </Form.Group>
          
          <Form.Group as={Row} controlId="formGroupName">
              <Form.Label column sm="2">Nama: </Form.Label>
              <Col sm="10">
                  <Form.Control name="nama" type="text" value={this.state.nama} onChange={this.handleInputChange} />
              </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="formGroupName">
              <Form.Label column sm="2">Alamat: </Form.Label>
              <Col sm="10">
                  <Form.Control name="alamat" type="text" value={this.state.alamat} onChange={this.handleInputChange} />
              </Col>
          </Form.Group>
                <Form.Group as={Row} controlId="formGroupName">
                    <Form.Label column sm="2">No. Handphone </Form.Label>
                    <Col sm="10">
                        <Form.Control name="phone1" type="text" value={this.state.phone1} onChange={this.handleInputChange} />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formGroupEmail">
                    <Form.Label column sm="2">Email 1: </Form.Label>
                    <Col sm="10">
                        <Form.Control name="email1" type="email" value={this.state.email1} onChange={this.handleInputChange} />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formGroupEmail2">
                    <Form.Label column sm="2">Email 2: </Form.Label>
                    <Col sm="10">
                        <Form.Control name="email2" type="email" value={this.state.email2} onChange={this.handleInputChange} />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formGroupStatus">
                    <Form.Label column sm="2">Status: </Form.Label>
                    <Col sm="4">
                    <select className="form-control" name="status" value={this.state.status} onChange={this.handleInputChange}>
                        {options.map((option) => (
                          <option value={option.value}>{option.label}</option>
                        ))}
                      </select>
                    </Col>
                </Form.Group>
                <Button variant="success" type="submit" value="Submit">Simpan</Button>
            </Form>
            

        
      </div>
    );
  }

                        /* SAMPLE UNTUK POST DATA */

                        //   componentDidMount() {
                        //     const requestOptions = {
                        //         method: 'POST',
                        //         headers: { 'Content-Type': 'application/json' },
                        //         body: JSON.stringify({ title: 'React POST Request Example' })
                        //     };
                        //     fetch('http://18.191.9.5:8090/user/create', requestOptions)
                        //         .then(response => response.json())
                        //         //.then((data) => console.log('This is your data', data))
                        //         .then(data => this.setState({ 
                        //             postId: data.user.Id,
                        //             postNama: data.user.nama,
                        //             postAlamat: data.user.alamat
                        //         }));
                        // }

                        // render() {
                        //     const { postId, postAlamat, postNama } = this.state;
                            
                        //     return (
                        //             <div className="card text-center m-3">
                        //                 <h5 className="card-header">Simple POST Request</h5>
                        //                 <div className="card-body">
                        //                     Returned Id: {postId} {postNama} {postAlamat}
                        //                 </div>
                        //             </div>
                        //     );
                        // }

}

export default PostUsers;
