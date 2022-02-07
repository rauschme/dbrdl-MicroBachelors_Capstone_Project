import './bootstrap.min.css';
import React from 'react';

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <div style={{display:"flex"}}>
        <img src='/cardealership.jpeg' style={{width: "300px"}}/>
        <div style={{margin:"100px"}}>
             <span style={{margin:"60px"}}>
             Welcome to the "It car dealership" homepage. To make an appointment or retrieve further information, feel free to use the WebChat function.
               </span >
           </div>

        </div>
        
      </div>
    );
  }
}

export default HomePage;
