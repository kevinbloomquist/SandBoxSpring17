// Here we go!
import React from 'react';

class Test extends React.Component {

constructor() {
	console.log("Test in the house!");
// What is this calling and where does it live (google)?
    super();
  }

 
 // Render function: always needs return statement and must be contained in a single tag
 // calls onClick action and defines state change
 // note: look up syntax (=>) and Count:{}
  render() {
    return (
      <h1>Testing passed in props here - {this.props.name}!</h1>
      
    );
  }
}
export default Test;

