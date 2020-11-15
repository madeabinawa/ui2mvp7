import React, { Component } from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import LogoBRI from '../Assets/BANK_BRI_logo.svg'
import Users from '../Assets/user.svg'

export default class NavbarBPBA extends Component {
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
                        <Nav.Link href="/DataUser">DATA USER</Nav.Link>
                        <Nav.Link href="/SetPBAM">PBAM</Nav.Link>
                        <Nav.Link href="/JadwalLibur">JADWAL LIBUR</Nav.Link>
                    </Nav>
                    <Nav className="ml-auto">
                        <Nav.Link href="/">Logout</Nav.Link>
                    </Nav>
                </Navbar>
            </div>
        )
    }
}
