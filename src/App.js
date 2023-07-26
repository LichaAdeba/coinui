import logo from './logo.svg';
import './App.css';
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
import {Routes, Route} from 'react-router-dom';
import {loginApp} from './Pages/Login';
import {Homepage} from './Pages/Home';


class App extends React.Component{
  constructor(props){
    super(props);
    this.state={usd:"",btc:"",ngn:"", coin:[]};
    this.sendChanged= this.sendChanged.bind(this);
    this.receiveChanged = this.receiveChanged.bind(this);
    this.connectChange = this.connectChange.bind(this);
  }
  
componentDidMount(){

}
getCoin(){
  axios.get("http://localhost:5001/get/coinbase").then(res=>{
    console.log(res.data)
    this.setState({coin:res.data.coin})
  } )
}


sendChanged(event){
  var amount = event.target.value;
  var result = amount * 753;
  this.setState({usd:amount})
  this.setState({ngn:result})

}

receiveChanged(event){
  var amount = event.target.value;
  var result = amount / 753;
  this.setState({ngn:amount})
  this.setState({usd:result})

}

connectChange(){
var getId = document.getElementById("exchange").text;
if(getId == "ngn"){
  document.getElementById("ngnInput").value= this.state.ngn;
} else if(getId == "value"){
  document.getElementById("ngnInput").value = this.state.usd;
}
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
  return (
  <div>
    
  </div>
  )
}

}

export default App;
