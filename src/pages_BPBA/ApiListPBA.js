import React, { Component } from "react";
import { Form, Col, Row, Button, Modal, Table } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'


class GetUsers extends Component {
    constructor(props) {
    super(props);
    this.state = {
        items: [],
        modalAdd: false,
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
          {items.length > 0
            ? items.map(item => {
                const { getId, getUserid, getEmployee, getPbamId } = item;
                return (
                  <div>
                      <h3 style={{ color: 'orange', marginTop: 30 }}> Anggota PBA - <b> {getPbamId} </b> </h3>

                      <Table striped bordered hover responsive>
                <thead style={{textAlign:'center'}}>
                        <tr>
                            <th>No</th>
                            <th>Id User (baca nama User)</th>
                            <th>Employee Id</th>
                            <th>Nama PBAM </th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody style={{textAlign:'center'}}>
                    <tr>
                            
                            <td>{getId}</td>
                            <td>{getUserid}</td>
                            <td>{getEmployee}</td>
                            <td>{getPbamId}</td>
                            
                            <td style={{textAlign:'center'}}> 
                                <Button style={{"width" : "100%"}} variant="warning" onClick={() => this.setState({modalAdd: !this.state.modalAdd})}> 
                                <FontAwesomeIcon icon={faEdit} /> TAMBAH </Button> 
                            </td>
                            <AddPBAModal 
                                show={this.state.modalAdd}
                                onHide={() => this.setState({modalAdd: !this.state.modalAdd})}
                                />
                        </tr>
                    </tbody>
                </Table>
                  </div>
                );
              })
            : null}
      </div>
    );
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
            Nortifikasi
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <p>Apakah anda yakin menambahkan Nina Marlina sebagai PBA Revi Yay?</p>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="success">Simpan</Button>
            <Button variant="danger" onClick={props.onHide}>Batal</Button>
        </Modal.Footer>
        </Modal>
    )
}

export default GetUsers;
