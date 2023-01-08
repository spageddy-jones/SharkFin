import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import {Link, useNavigate, redirect} from 'react-router-dom';
import './styles.css';
import {Button, Container, Row, Col, Form, FormGroup, FormLabel, FormControl, FormSubmit} from 'react-bootstrap';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import sharkPNG from "./images/shorkpng.png";

function LoginPage(){
    return(
    <Container fluid className="vh-100 d-flex flex-column">
        <Row className="h-100 mainRow">
            <Col md={4} className="loginImgCol"></Col>
            <Col md={8} className="loginMainCol">
                <Row>
                    <Col md={12}>
                        <h1 id="Welcome">Welcome to SharkFin!</h1>
                    </Col>
                </Row>
                <Row className="introRow">
                    <Col md={2}></Col>
                    <Col md={8}>
                        <h5 className="introText">An alternative social media site focused on art! Share your gallery,
                        keep up with your favorite artists, and chat with new friends!</h5>
                    </Col>
                    <Col md={2}></Col>
                </Row>
                <Row>
                    <Col md={12} id="logoRow">
                        <img src={sharkPNG} alt="shorky" width="15%" id="shorkyLogo"/>
                    </Col>
                </Row>
                <Row>
                    <Col md={2}></Col>
                        <Col md={8}>
                            <h5 className="introText">Login to continue to site:</h5>
                        </Col>
                    <Col md={2}></Col>
                </Row>
                <Row>
                    <Col md={2}></Col>
                    <Col md={8}>
                        <LoginForm />
                        <RegisterAccountLink />
                    </Col>
                    <Col md={2}></Col>
                </Row>
            </Col>
        </Row>
    </Container>
    );
}

function LoginForm(){
    const [userEmail, setEmail] = useState('');
    const [userPassword, setPassword] = useState('');
    const [failedLogin, setLoginStatus] =  useState(true);
    const navigate = useNavigate();

    const handleEmailChange = e => {
        setEmail(e.target.value);
    };
    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }
    const handleLoginChange = e => {
        setLoginStatus(false);
    }

    const handleSubmit = e => {
        e.preventDefault();
        var myObj = {
            email: userEmail,
            password: userPassword,
            failedLogin: failedLogin
        }

        // validate login
        axios.post("http://localhost:3000/user/login", myObj)
        .then(function(response){
            if (response.data.response == "success"){
                console.log(response.data.response);
                navigate("/timeline");
            }
            else {
                alert("Incorrect username or password. Please try again.")
            }
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    return(
        <Form className="defaultForm">
            <FormGroup>
                <FormControl className="defaultInput" type="email" name="userEmail"  placeholder="Email" value={userEmail} onChange={handleEmailChange}/>
                <FormControl className="defaultInput" type="password" name="userPassword" placeholder="Password" value={userPassword} onChange={handlePasswordChange}/>
            </FormGroup>
            <Button variant='login' type='submit' onClick={handleSubmit}>
                Login
            </Button>
        </Form>
    );
}

function RegisterAccountLink(){
    return(
        <Row id='registerRow'>
            <hr className="seperator"/>
            <Col md={6}>
                <h5 className="introTextRegister">Don't have an account?</h5>
            </Col>
            <Col md={6}>
                <Link to= "/createAccount">
                    <Button variant='login' type='submit'>
                        Register
                    </Button>
                </Link>
            </Col>
        </Row>
    );
}

export default (LoginPage);