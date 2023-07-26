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

class User extends React.Component{

    constructor(props){
        super(props);
        this.state={users:"", username:[]};
        this.changeUsername = this.changeUsername.bind(this);
        this.submitUsers = this.submitUsers.bind(this);

    }
    changeUsername(event){
        var typed=event.target.value
       // console.log(typed)
        this.setState({users:typed})
    }
    submitUsers( ){
        var data={users:this.state.users}
        axios.post("http://localhost:5004/v1/create/username", data).then(res=>{
          console.log(res.data)
        this.setState({users:res.data.users})
        console.log(res.data)
        })
        axios.post("http://localhost:5004/v1/auth", data).then(res=>{
          console.log(res.data)
        this.setState({users:res.data.users})
        console.log(res.data)
      
        })
      }


render(){
return (   
    <div>
        
    <Container> 
      <Row>
        <Col>
    <Navbar className="bg-body-tertiary">
  <Container>
    <Navbar.Brand>coinChange</Navbar.Brand>
  </Container>
</Navbar>
</Col>
</Row>

    <Card style={{ width: '25rem' }}>
<Card.Body>
  <Card.Title>username </Card.Title>
    <Row >
    <Col xs='10'>
  <Form>
  <Form.Control type="text" placeholder="Enter username" onChange={this.changeUsername} value={this.state.users}/>
  <Button variant="primary" type="submit" onClick={this.submitUsers}>
        Submit
      </Button>
</Form>
</Col>
</Row>
</Card.Body>
</Card>
</Container>
</div>



)


}


}
export default User;
