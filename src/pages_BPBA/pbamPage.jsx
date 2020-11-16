import React, { Component } from 'react';
import NavBar from '../navbar/NavbarBPBA';
import { Button, Table, ButtonGroup } from 'react-bootstrap';


function ShowAllUsers(props) {
    return(
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>ID User</th>
                    <th>Nama User</th>
                    <th>Role</th>
                    <th>Email 1</th>
                    <th>Email 2</th>
                    <th>Status</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
            <tr>
                    <td>PCU01</td>
                    <td>Caca Marica</td>
                    <td>PCU</td>
                    <td>caca01@gmail.com</td>
                    <td></td>
                    <td>Disable</td>
                    <td><i class="fa fa-edit"></i></td>
                </tr>
            </tbody>
        </Table>
    )
}

class pbamPage extends Component {
    state = {  }
    render() {
        return (
            <div>
            <div>
                <NavBar />
            </div>
             <React.Fragment>
             <div className="jumbotron jumbotron-fluid">
                 <div className="container">
                     <h2 style={{fontWeight:'bold'}}>DATA PBAM </h2>
                 </div>
             </div>
             <div className="container">
                <ShowAllUsers />
             </div>
         </React.Fragment>
         </div>
        );
    }
}
export default pbamPage;