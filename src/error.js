import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import {Link, useRouteError, useNavigate} from 'react-router-dom';
import './styles.css';
import {Button, Container, Row, Col, Form, FormGroup, FormLabel, FormControl, FormSubmit} from 'react-bootstrap';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

function ErrorPage() {
    const navigate = useNavigate();

    return(
        <>
        <Container fluid className="vh-100 d-flex flex-column">
        <Row className="h-100">
            <Col md={2}></Col>
            <Col md={8}>
                <Row>
                    <Col md={12} id="errorMainCol">
                        <h3 id="errorTitle">Oops!</h3>
                        <h5>Looks like you encountered an error. 
                            How about swimming back to safer waters?</h5>
                        <Button variant='login' type='submit' onClick={() => navigate(-1)}>
                            Go Back
                        </Button>
                    </Col>
                </Row>
            </Col>
            <Col md={2}></Col>
        </Row>
    </Container>
    </>
    );
}

export {ErrorPage};
