import React from 'react'
import { Form, Col, Row, Button, Modal, Table, ButtonGroup } from 'react-bootstrap'

export default function JadwalPage() {
    return (
        <React.Fragment>
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h2 style={{fontWeight:'bold'}}>JADWAL LIBUR</h2>
                </div>
            </div>
            <div className="container">
                <ButtonGroup className="mb-2 float-right">
                    <Button variant="primary" type="submit">TAMBAH JADWAL</Button>
                </ButtonGroup>
            </div>
        </React.Fragment>
    )
}
