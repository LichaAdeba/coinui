import logo from '../logo.svg';
import '../App.css';
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




class Home extends React.Component{
    constructor(props){
        super(props);
        this.state={usd:"",btc:"",ngn:"", coin:[],currency:""};
        this.sendChanged= this.sendChanged.bind(this);
        this.receiveChanged = this.receiveChanged.bind(this);
        this.connectChange = this.connectChange.bind(this);
      }
      
  

    getCoin(){
      axios.get("http://localhost:5001/get/coinbase").then(res=>{
        console.log(res.data)
        this.setState({coin:res.data.coin})
      } )
    }

    calculateValue(amount,currency){
      
      
      if(currency =="usd"){
        var result = amount * 753;
        this.setState({usd:amount})
        this.setState({ngn:result})
      }
      if(currency =="ngn"){
        var result = amount / 753;
        this.setState({ngn:amount})
        this.setState({usd:result})
      }
    }
    connectChange(event){
      let selected=event.target.value;
      
      if(selected=="usd"){
  //this.calculateValue(this.state.usd,selected)
      }
      if(selected=="ngn"){
       // this.calculateValue(this.state.ngn,selected)
      }
      
      //alert(selected)
      this.setState({currency:selected})
    }  


    sendChanged(event){
      var amount = event.target.value;
      this.setState({ngn:amount})
      this.calculateValue(amount,this.state.currency)
   
    
    }
    
    receiveChanged(event){
      var amount = event.target.value;
      this.setState({usd:amount})
     this.calculateValue(amount,this.state.currency)
    
    }
    
 
    
    changeBtc(event){
      var amount = event.target.value
      var result =amount * 23100424.91;
      this.setState({btc:amount})
      this.setState({ngn:result})
    }
    
    changeBtcNgn(event){
      var amount = event.target.value
      var result =amount / 23100424.91;
      this.setState({ngn:amount})
      this.setState({btc:result})
    }
    
    
    



render(){
  var ngnselected=false;
  var usdselected=false;
  
  if(this.state.currency=="ngn"){
    ngnselected=true;

  }else{
    usdselected=true;
  }

return (
<div> 
<Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand>coinChange</Navbar.Brand>
        </Container>
      </Navbar>
  <Container>
   <Row className="d-flex my-5 p-100">
          <Col xs='10'>
          <Card style={{ width: '25rem' }}>
          <Card.Body>
<Form.Control type="text"  onChange={this.receiveChanged} value={this.state.usd} />   
<Form.Select aria-label="DropDown Select"  onClick={this.connectChange} >
      <option id="exchange" value="usd" selected={usdselected}>usd</option>
    </Form.Select>


<Form.Control type="text" onChange={this.sendChanged} value={this.state.ngn} />
<Form.Select aria-label="DropDown Select"  onClick={this.connectChange} >
     <option id="exchange"  value="ngn" selected={ngnselected}>ngn</option>
    </Form.Select>
    <Button variant="primary" type="submit" href='login'>
        Submit

      </Button>
  
 </Card.Body>
    </Card>   
    </Col>
      </Row>
</Container>
</div>


)
        
    }


}
export default Home;
