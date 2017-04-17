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
      words:["starter, ", "yankee, ", "item, "],
      bits: ["whirly  ","chunks ","mojo ","plumb "],
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

      <div id= "Hero">
      <Hero />
      </div>


      <div id = "Test">
      //The test component will toggle what is rendered depending on passed in name try: 'Wolfgang Amadeus Mozart'
      <Test name = "passed down name"/>
      </div>
      
      <div id = "Counter">
      // Just a simple counter button that displays it's own state and a variation below
      <div>
      <button
        onClick={() => {
          this.setState({ count: this.state.count + 1 });
        }}
        >

        Count: {this.state.count}
      </button>
      </div>
      </div>
  
      <div id = "Likes">
      <LikesComponent />
      </div>
      

    <div id = "wordsBits">
     // Using words and bits to learn how to manipulate arrays in state - experiment with passed props after initial success
      <h1>Words:</h1>
      <ul>{this.state.words}</ul>
      <p>Bits: {this.state.bits}</p>
    </div>

     <div id = "contactForm">
     // Working to manipulate state from form data
     <ContactForm />
     </div>

      </div>
    );
  }
}
export default Counter;

