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


class Signup extends React.Component{


    constructor(props){
        super(props);
        this.state={email:"", password:"", users:[]};
        this.createUser = this.createUser.bind(this);
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
      
      createUser( ){
        var data={email:this.state.email, password:this.state.password}
        axios.post("http://localhost:5003/v1/create/user", data).then(res=>{
        this.setState({users:res.data.users})
        console.log(res.data)
        })
       
      }

        render(){
            var selected = false;
            if(this.state.password.length < 1){
                selected = true; 
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
              <Card.Title>Create Account</Card.Title>
          <Card.Body>

        <Form>
        <Form.Control type="email" placeholder="Enter email" onChange={this.changeEmail} value={this.state.email} />
      </Form>

      <Form>
        <Form.Control type="password" placeholder="Password" onChange={this.changePassword} value={this.state.password} />
      <Button variant="primary" type="submit" onClick={this.createUser} href='user'>
        Create Account

      </Button>

      </Form>
      <a href='login'>Already have an account? Log in</a>


      </Card.Body>
    </Card>   
    </Col>
      </Row>
  
    </Container>
              
              
     
            </div>
      
      
          )
        
        
        }
      
      
      }
      export default Signup;
      


