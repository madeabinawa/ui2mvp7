import React from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import LogoBRI from '../Assets/BANK_BRI_logo.svg'
import Users from '../Assets/user.svg'
import { Link, withRouter } from 'react-router-dom'

export default function NavbarPBAM() {
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
                    <Nav.Link href="/pbaPage">PBA</Nav.Link>
                    <Nav.Link href="/laporanPage">Laporan</Nav.Link>
                </Nav>
                <Navbar.Collapse className="justify-content-end">
                    <NavDropdown
                        title={
                            <div>
                                <img className="thumbnail-image"src={Users} alt=""width= "30"/>
                            </div>
                        }
                        id="basic-nav-dropdown">
                        <NavDropdown.Item href="/ubahPassPage">Ubah Password</NavDropdown.Item>
                        <NavDropdown.Item href="/login">Logout</NavDropdown.Item>
                    </NavDropdown>
                    <Navbar.Text 
                        style={{fontWeight:'bold'}}>
                        Hai, Manager 1
                    </Navbar.Text>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}
