import React from "react";
import ReactDOM from "react-dom"
import {Navbar, Button, Container, Row, Col} from 'react-bootstrap';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

function TopNavbar(){

    return(
        <Navbar expand="lg" bg="pink" variant="dark" sticky="top" id="timelineNav">
            <Navbar.Brand href="/">SharkFin</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse>
            
            </Navbar.Collapse>
        </Navbar>
    );
}

export {TopNavbar};