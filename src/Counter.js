import React from 'react';


/** Starting with a counter, once established create Components folder and seperate subsequent components using ATOMIC principles
**/

// Counter Component: Always have to start with a CAPITAL

class Counter extends React.Component {
  
// Different syntax lookup constructor style!!!
  constructor() {
    super();
// Makes component stateful by creating state object and creatining initial state
    this.state = {
      count: 0,
    };
  }
 
 // Render function: always needs return statement and must be contained in a single object
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