import React from "react";
import ReactDOM from "react-dom"
import {Button, Container, Row, Col, Card} from 'react-bootstrap';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { TopNavbar } from "./navbar";


function TimelinePage(){
    return(
        <div>
        <TopNavbar />
        <Container fluid className="vh-100 d-flex flex-column">
            <Row className="h-100">
                <Col md={2}></Col>
                <Col md={8}>
                    <SinglePost />
                    <SinglePost />
                    <SinglePost />
                </Col>
                <Col md={2}></Col>
            </Row>
        </Container>
        </div>
    );
}

function SinglePost(){
  
  
    return(
        <Row>
            <Col md={12}>
                <Card className="postCard">
                    <Card.Body>
                        <Card.Text>
                            some lil words right here
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
}

export {TimelinePage};