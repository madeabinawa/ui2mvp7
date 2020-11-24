import React, { Component } from "react";
import { Form, Col, Row, Button, Modal, Table } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'


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
    
    fetch("http://18.191.9.5:8090/pba/not-pbam")
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
        <h3 style={{ color: 'green' }}> Available PBA </h3>
                      <Table striped bordered hover responsive>
                <thead style={{textAlign:'center'}}>
                        <tr>
                            <th>No</th>
                            <th>Id User </th>
                            <th>Employee Id</th>
                            <th> PBAM </th>
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
                        <td>{getPbamId ? '-' : {getPbamId} }</td>
                        <td style={{textAlign:'center'}}> 
                            <Button style={{"width" : "100%"}} variant="success" onClick={() => this.setState({modalAdd: !this.state.modalAdd})}> 
                            <FontAwesomeIcon icon={faPlus} /> TAMBAH </Button> 
                        </td>
                        <AddPBAModal 
                            show={this.state.modalAdd}
                            onHide={() => this.setState({modalAdd: !this.state.modalAdd})}
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

function AddPBAModal(props) {
    return (
        <Modal
        {...props}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        >
        <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
            Notifikasi
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <p>Apakah anda yakin menambahkan ? </p>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="success">Ya</Button>
            <Button variant="danger" onClick={props.onHide}>Tidak</Button>
        </Modal.Footer>
        </Modal>
    )
}

export default GetUsers;
