import '../App.css';
import Display from './Display';
import ButtonShape from './ButtonShape';
import React from 'react';

class App extends React.Component{
 constructor(){
  super ();
  this.state = {
    total:null,
    total:null,
    operation:null
  }
  this.handleClick = this.handleClick.bind(this);
 }
 
};


function App() {
  return (
    <>
      <Display />
      <ButtonShape />
    </>
  );
}

export default App;
