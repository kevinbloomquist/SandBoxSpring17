// Here we go!
import React from 'react';

class Test extends React.Component {

constructor() {
// What is this calling and where does it live (google)?
    super();
// Makes component stateful by creating state object and defining initial state
    this.state = {
      count: 0,
    };
  }
 
 // Render function: always needs return statement and must be contained in a single tag
 // calls onClick action and defines state change
 // note: look up syntax (=>) and Count:{}
  render() {
    return (
      <button
        onClick={() => {
          this.setState({ count: this.state.count + 1 });
        }}
        >

        Count: {this.state.count}
      </button>
      
    );
  }
}
export default Counter;

