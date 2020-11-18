import React, {useState} from 'react'
import NavBar from '../navbar/NavbarBPBA';
import { Link } from 'react-router-dom';
import { ButtonGroup, Button, Table, Form, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'

function ShowPba(props) {
    const[modalDelete, setModalDelete] = useState(false);
    return (
        
        <Table striped bordered hover responsive>
            <thead style={{textAlign:'center'}}>
                <tr>
                    <th>No.</th>
                    <th>WAKTU</th>
                    <th>LOKASI</th>
                    <th>DESKRIPSI</th>
                    
                </tr>
            </thead>
            <tbody style={{textAlign:'center'}}>
                <tr>
                    <td>1</td>
                    <td>12 DESEMBER 2020</td>
                    <td>Cabang Kelas 1 Geger Kalong Bandung</td>
                    <td>Meeting bersama mba revi membahas keuangan</td>
                </tr>
            </tbody>
        </Table>
    )
}

export default function Laporan() {
    return (
        <div>
            <div>
                <NavBar />
            </div>
            <React.Fragment>
                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                        <h2 style={{ fontWeight: 'bold' }}> LAPORAN </h2>
                    </div>
                </div>
                <div className="container">
                <Form.Group as={Row} controlId="formGroupRole">
                        <Form.Label>Tampil Berdasarkan : </Form.Label>
                        <Col>
                            <Form.Control as="select" defaultValue="Choose...">
                                <option>Penilaian</option>
                                <option>Jumlah Bertemu</option>
                                <option>Rating</option>
                            </Form.Control>
                        </Col>
                <ButtonGroup className="mb-4 float-right">
                <Button variant="primary" type="submit"> <FontAwesomeIcon icon={faDownload} /> DOWNLOAD </Button>
            </ButtonGroup>
            </Form.Group>
                    <ShowPba />
                </div>
            </React.Fragment>
        </div>
    )
}