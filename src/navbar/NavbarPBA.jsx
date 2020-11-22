import React from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import LogoBRI from '../Assets/BANK_BRI_logo.svg'
import Users from '../Assets/user.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell} from '@fortawesome/free-solid-svg-icons'

export default function NavbarPBA() {
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
                    <Nav.Link href="/pcuPage">PCu</Nav.Link>
                    <Nav.Link href="/schedulePage">Jadwal Pertemuan</Nav.Link>
                </Nav>
                <Navbar.Collapse className="justify-content-end">
                    <Nav.Link><FontAwesomeIcon icon={faBell} /></Nav.Link>
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
                        Hai, PBA 1
                    </Navbar.Text>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}
