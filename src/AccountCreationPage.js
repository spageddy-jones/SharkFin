import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import './styles.css';
import {Button, Container, Row, Col, Form, FormGroup, FormLabel, FormControl, FormSubmit} from 'react-bootstrap';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { throws } from 'assert';

class AccountCreationPage extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <CreationPageBase />
        );
    }
}

class CreationPageBase extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <Container fluid className="vh-100 d-flex flex-column">
                <Row className="h-100">
                    <Col md={2} className="sideCols"></Col>
                    <Col md={8} className="createMainCol">
                        <Row className="introRow">
                            <Col md={12}>
                                <h2 className='introTextRegister'>Create your account</h2>
                            </Col>
                            <Col md={12}>
                                <AccountCreationForm />
                            </Col>
                        </Row>
                    </Col>
                    <Col md={2} className="sideCols"></Col>
                </Row>
            </Container>
        );
    }
}

class AccountCreationForm extends React.Component{
    constructor(props){
        super(props);

        this.state = {userEmail: '', userPassword: '', userName: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({
            [event.target.name] : event.target.value
        });
    }

    handleSubmit(event){
        event.preventDefault();

        var myObj = {
            email: this.state.userEmail,
            password: this.state.userPassword,
            username: this.state.userName
        }

        // validate login
        axios.post("http://localhost:3000/user/create", myObj)
        .then(function(response){
            if (response.data.createSuccess == "success"){
                alert("good job buddy");
            }
            else{
                alert("An account already exists with that email or username. Please try again.");
            }
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    render(){
        return(
            <Form classname="defaultForm">
                <FormGroup>
                    <FormControl className="defaultInput" type="email" name='userEmail' placeholder="Email" onChange={this.handleChange}/>
                    <FormControl className="defaultInput" type="text" name="userName" placeholder="Username" onChange={this.handleChange}/>
                    <FormControl className="defaultInput" type="password" name="userPassword" placeholder="Password" onChange={this.handleChange}/>
                </FormGroup>
                <Button variant='login' type='submit' onClick={this.handleSubmit}>
                    Create Account
                </Button>
            </Form>
        );
    }
}

export {AccountCreationPage};