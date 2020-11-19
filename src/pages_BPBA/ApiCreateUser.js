import React, { Component } from "react";
import { Form, Col, Row, Button, Modal, Table, ButtonGroup } from 'react-bootstrap'


class PostUsers extends Component {
  
    constructor(props) {
        super(props);
        this.state = {
          nama: '',
          alamat: '',
          role_id: '',
          email1: '',
          email2: '',
          phone1: '',
          phone2: '',
          status: '',
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
        body: JSON.stringify(this.state)
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
                    <Col sm="3">
                    <Form.Control name="status" type="number" value={this.state.status} onChange={this.handleInputChange} />
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
