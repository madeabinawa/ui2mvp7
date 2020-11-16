import React, { Component } from 'react';
import NavBar from '../navbar/NavbarBPBA';
import { Button, Table, ButtonGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'


function ShowPba(props) {
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>No.</th>
                    <th>Nama PBA</th>
                    <th>Status</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Caca Marica</td>
                    <td>Disable</td>
                    <td><FontAwesomeIcon icon={faTrash} /></td>
                </tr>
            </tbody>
        </Table>
    )
}

function ShowAvalPba(props) {
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Id Users</th>
                    <th>Nama PBA</th>
                    <th>Status</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>PB02</td>
                    <td>Nina Marlina</td>
                    <td>Enable</td>
                    <td><Button variant="success">TAMBAH</Button></td>
                </tr>
            </tbody>
        </Table>
    )
}

class pbamPage extends Component {
    state = {}
    render() {
        return (
            <div>
                <div>
                    <NavBar />
                </div>
                <React.Fragment>
                    <div className="jumbotron jumbotron-fluid">
                        <div className="container">
                            <h2 style={{ fontWeight: 'bold' }}>DATA PBAM </h2>
                        </div>
                    </div>
                    <div className="container">
                        <h3> Anggota PBA </h3>
                        <ShowPba />
                        <h3> Available PBA </h3>
                        <ShowAvalPba />
                    </div>
                </React.Fragment>
            </div>
        );
    }
}
export default pbamPage;