import React from "react"; 
import axios from 'axios';
import {Card,Col,Row,Container,Input,Button} from "react-bootstrap";
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import DropdownMenu from 'react-bootstrap/esm/DropdownMenu';
import DropdownItem from 'react-bootstrap/esm/DropdownItem';
import { Navigate } from "react-router";


class Login extends React.Component{


    constructor(props){
        super(props);
        this.state={email:"", password:"", users:[],redirect:""};
        this.authenticateUer = this.authenticateUer.bind(this);
        this.changeEmail = this.changeEmail.bind(this);
        this.changePassword = this.changePassword.bind(this);
       
      }
      
      changeEmail(event){
        var typed=event.target.value
       // console.log(typed)
        this.setState({email:typed})
      }
      changePassword(event){
        var typed=event.target.value
       // console.log(typed)
        
        this.setState({password:typed})
      }
      

      authenticateUer( ){
        var found = false
        var array = (this.state.users)
        
        console.log(data)
        
        if(this.state.password.length == 0){
          alert('Please input email and password')
        }
        var data={email:this.state.email, password:this.state.password}
        
        axios.post("http://localhost:5003/v1/auth", data).then(res=>{
        this.setState({users:res.data.users})
        console.log(res.data)
        if(res.data.status=="succesful"){
          alert("You are logged in")
          this.setState({redirect:"dashboard"})
        }else{
          alert("Enter a correct password or email")
          

          }


        }).catch(error=>{
          console.log(error);
          alert("Error occured")
        })

        
        }

      

        render(){
          if(this.state.redirect=="dashboard"){

            return <Navigate to={"/dashboard"} />;

          }
          if(this.state.redirect=="signup"){
              return <Navigate to={"/register"} />;
          }

       

          return (
          
            
      <div >
        
          <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand>coinChange</Navbar.Brand>
        </Container>
      </Navbar>
      <Container>
          <Row className="d-flex my-5 p-100">
          <Col xs='10'>
          <Card style={{ width: '25rem' }}>
            <Card.Title>Login</Card.Title>
          <Card.Body>

        <Form>
        <Form.Control type="email" placeholder="Enter email" onChange={this.changeEmail} value={this.state.email} />
      </Form>

      <Form>
        <Form.Control type="password" placeholder="Password" onChange={this.changePassword} value={this.state.password} />
      <Button variant="primary" type="button" onClick={this.authenticateUer}  >
        Submit

      </Button>
      </Form>
      <a href='register'>Don't have an account? sign up</a>

      </Card.Body>
    </Card>   
    </Col>
      </Row>
  
    </Container>
              
              
     
            </div>
      
          )
        
        
        }
      
      
      }
      export default Login;
      


