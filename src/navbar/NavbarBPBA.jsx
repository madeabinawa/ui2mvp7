import React, { Component } from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import LogoBRI from '../Assets/BANK_BRI_logo.svg'
import Users from '../Assets/user.svg'

class NavbarBPBA extends Component {
    render() {
        return (
            <div>
                <Navbar bg="light" variant="light">
                    <Navbar.Brand href="/">
                    <img 
                        alt=""
                        src={LogoBRI}
                        width="150"
                        className="d-inline-block align-top"/>
                    </Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="/userPage">Data User</Nav.Link>
                        <Nav.Link href="/pbamPage">PBAM</Nav.Link>
                        <Nav.Link href="/jadwalPage">Jadwal Libur</Nav.Link>
                    </Nav>
                    <Navbar.Collapse className="justify-content-end">
                        {/* Sesuai dengan nama pengguna ketika login */}
                        <Navbar.Text 
                            className="mr-2"
                            style={{fontWeight:'bold'}}>
                            Hai, Admin 1
                        </Navbar.Text>
                        <img 
                            alt=""
                            src={Users}
                            width="30"
                            />
                    </Navbar.Collapse>
                    <Nav className="ml-auto">
                        <Nav.Link href="/login">Logout</Nav.Link>
                    </Nav>
                </Navbar>
            </div>
        )
    }
}

export default NavbarBPBA;
