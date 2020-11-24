import React, { Component } from "react";
import { Form, Col, Row, Button, Modal, Table } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'


class GetUsers extends Component {
    constructor(props) {
    super(props);
    this.state = {
        items: [],
        modalDelete: false,
        };
    }

   /* SAMPLE UNTUK POST DATA */
   componentDidMount() {
    
    fetch("http://18.191.9.5:8090/pba/list")
      .then(res => res.json())
      .then(parsedJSON =>
        parsedJSON.pba.map(data => ({
          getId: `${data.Id}`,
          getUserid: `${data.user_id}`,
          getEmployee: `${data.employee_id}`,
          getPbamId: `${data.pbam_id}`,
        }))
      )
      .then(items =>
        this.setState({
          items,
          isLoaded: false
        })
      )
      .catch(error => console.log("parsing failed", error));
  }

  render() {
    
    const { items } = this.state;
    return (
      <div>
          <h3 style={{ color: 'orange', marginTop: 30 }}> Anggota PBA </h3>
          <Table striped bordered hover responsive>
            <thead style={{textAlign:'center'}}>
                <tr>
                    <th>No</th>
                    <th>Id User </th>
                    <th>Employee Id</th>
                    <th>Nama PBAM </th>
                    <th>Action</th>
                </tr>
                </thead>
          <tbody style={{textAlign:'center'}}>
          {items.length > 0
            ? items.map(item => {
                const { getId, getUserid, getEmployee, getPbamId } = item;
                return (
                    
                    <tr>
                            <td>{getId}</td>
                            <td>{getUserid}</td>
                            <td>{getEmployee}</td>
                            <td>{getPbamId}</td>
                            
                            <td style={{textAlign:'center'}}> 
                                <Button style={{"width" : "100%"}} variant="danger" onClick={() => this.setState({modalDelete: !this.state.modalDelete})}> 
                                <FontAwesomeIcon icon={faTrash} /> DELETE </Button> 
                            </td>
                            <DeletePBAModal 
                                show={this.state.modalDelete}
                                onHide={() => this.setState({modalDelete: !this.state.modalDelete})}
                                />
                        </tr>
                        )
                })
            : null}
            </tbody>
        </Table>
      </div>
    )
  }
   
}

function DeletePBAModal(props) {
    return (
        <Modal
        {...props}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        >
        <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
            Nortifikasi
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <p>Apakah anda yakin menghapus data ini?</p>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="success">Ya</Button>
            <Button variant="danger" onClick={props.onHide}>Tidak</Button>
        </Modal.Footer>
        </Modal>
    )
}

export default GetUsers;
