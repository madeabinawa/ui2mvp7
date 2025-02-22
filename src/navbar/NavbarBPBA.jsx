import React, { Component } from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import LogoBRI from '../Assets/BANK_BRI_logo.svg'
import Users from '../Assets/user.svg'
import { Link, withRouter } from 'react-router-dom'
import styles from '../App.css'

function NavbarBPBA(props) {

        const pathname = props.location.pathname

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
                    <Nav.Link as={Link} to="/userPage" active={pathname.startsWith('/userPage')}>Data User</Nav.Link>
                    <Nav.Link as={Link} to="/pbamPage" active={pathname.startsWith('/pbamPage')}>PBAM</Nav.Link>
                    <Nav.Link as={Link} to="/jadwalPage" active={pathname.startsWith('/jadwalPage')}>JADWAL LIBUR</Nav.Link>
                    {/* <Nav.Link as={Link} to="/ubahPassPage" active={pathname.startsWith('/ubahPassPage')}>GANTI PASSWORD</Nav.Link>     
                    { <Nav.Link href="/pbamPage">PBAM</Nav.Link>
                    <Nav.Link href="/jadwalPage">Jadwal Libur</Nav.Link> */}
                    </Nav>
                    <Navbar.Collapse className="justify-content-end">
                        {/* Sesuai dengan nama pengguna ketika login */}
                        
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
                            Hai, Admin 1
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }

export default withRouter(NavbarBPBA)
