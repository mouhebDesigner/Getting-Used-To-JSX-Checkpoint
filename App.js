import React from 'react';
import logo from './logo.svg';
import './App.css';
import myImage from './images/sam.jpg';

function App() {
  let firstname = "Mouheb";
  let lastname = "abderrahim";
  return (
     <div>
      
      <div style={{
        border: 'solid 1px black',
        maxWidth: '100vw'
      }}>
        <h1 className="title red">My title</h1>
        <br/>

        <img src={myImage}/>
        <br/>
        <img src={myImage} />

      </div>
    </div>
    
  );
}

export default App;
