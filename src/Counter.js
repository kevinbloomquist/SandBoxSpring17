import React from 'react';
import LikesComponent from'./LikesComponent.js';
import ContactForm from'./ContactForm.js';
import Hero from'./Hero.js';
import Test from'./Test.js';



/** Starting with a counter, once established create Components folder and seperate subsequent components using ATOMIC principles
**/

// Counter Component: Always have to start with a CAPITAL

class Counter extends React.Component {
  
// Different syntax lookup constructor style!!!
  constructor() {
// What is this calling and where does it live (google)?
    super();
// Makes component stateful by creating state object and defining initial state
    this.state = {
      count: 0,
      words:["starter"],
      bits: ["whirly  ","chunks","mojo","plumb"],
    };
    console.log ("I'm in the constructor()");
}


 
 // Render function: always needs return statement and must be contained in a single tag
 // calls onClick action and defines state change
 // note: look up syntax (=>) and Cou
  render() {
    console.log("cogito ergo sum in the render function");
    return (


      <div>

      <Hero />
      <Test name = "passed down name"/>
      <button
        onClick={() => {
          this.setState({ count: this.state.count + 1 });
        }}
        >

        Count: {this.state.count}
      </button>

      <LikesComponent />
      
      <p>after button inside return</p>
            <h1>Words: {this.state.words}</h1>
      <p>Bits: {this.state.bits}</p>

    <ContactForm />

      </div>
    );
  }
}
export default Counter;

