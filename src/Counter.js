import React from 'react';


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
      bits: ["whirly  ","chunks","mojo","plumb"]
    },

    this.props = {
       bits: ["whirly  ","chunks","mojo","plumb"];
  }
 
 // Render function: always needs return statement and must be contained in a single tag
 // calls onClick action and defines state change
 // note: look up syntax (=>) and Cou
  render() {
    return (
      <div>
      <button
        onClick={() => {
          this.setState({ count: this.state.count + 1 });
        }}
        >

        Count: {this.state.count}
      </button>

      <p>after button inside return</p>
      <form>
        <input type = "text" placeholder = "sprinkles" name = "newWord"></input>
        <input type = "submit" onClick ={()=> {words: {(this.state.words).push(newWord)});
     }} 

    >
     add word</input>
      </form>
      <h1>Words: {this.state.words}</h1>
      <p>Bits: {this.state.bits}</p>

      </div>
    );
  }
}
export default Counter;

