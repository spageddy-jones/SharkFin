import React from "react";
import ReactDOM from "react-dom"
import {Navbar, NavItem, NavLink, Button, Container, Row, Col, Nav, Dropdown} from 'react-bootstrap';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';


function TopNavbar(){

    return(
        <Navbar expand="lg" bg="pink" variant="dark" sticky="top" id="timelineNav">
            <Col md={4}>
                <Navbar.Brand href="/">&nbsp;&nbsp;SharkFin</Navbar.Brand>
            </Col>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Col md={8} id="navContent">
                    <Nav justify>
                        <Nav.Link href="#"><i class="fa-solid fa-globe"></i><Row><i>Explore</i></Row></Nav.Link>
                        <Nav.Link href="#"><i class="fa-solid fa-bell"></i><Row><i>Notifications</i></Row></Nav.Link>
                        <Dropdown as={NavItem}>
                        <Dropdown.Toggle as={NavLink}><i class="fa-solid fa-user"></i><Row><i>Account</i></Row></Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item>Go to Account</Dropdown.Item>  
                                <Dropdown.Item>Edit Account</Dropdown.Item>
                                <Dropdown.Item>Account Settings</Dropdown.Item>    
                            </Dropdown.Menu>
                        </Dropdown>
                        <Nav.Link href="#"></Nav.Link>
                        <Nav.Link href="#"><i class="fa-solid fa-message"></i><Row><i>Messages</i></Row></Nav.Link>
                        <Nav.Link href="#"><i class="fa-solid fa-pencil"></i><Row><i>Post</i></Row></Nav.Link>
                    </Nav>
                </Col>
            </Navbar.Collapse>
        </Navbar>
    );
}

export {TopNavbar};