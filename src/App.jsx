import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Body from './components/body.jsx';
import Header from './components/header.jsx';
import Footer from './components/footer.jsx';


class App extends Component {

  constructor(props){
    super(props);
    this.state ={
          name:'', 
          age: ''
    };

  }
  myFunction() {
    
      document.getElementById("uname").innerHTML = document
          .getElementById("name").value;
      document.getElementById("uage").innerHTML = document
          .getElementById("age").value;
   
  }
  render() {
    return (
          <div>
          <Header/>
          <Body name={this.state.name}/>
          <Footer/>
          </div>
    );
  }
}

export default App;
