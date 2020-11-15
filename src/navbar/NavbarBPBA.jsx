import React, { Component } from 'react'
import { Navbar, Nav } from 'react-bootstrap'

export default class NavbarBPBA extends Component {
    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="/">Litle Store</Navbar.Brand>
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
