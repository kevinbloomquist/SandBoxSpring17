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
  render(){
  	    if (this.props.name == 'Wolfgang Amadeus Mozart') {
      return (
      	<div>
      	<h1>{this.props.name}</h1>
      	<h2>Wolfgang in the house</h2>
      	</div>
      );
    } else {
      return (
      	<div>
      	<h1>{this.props.name}</h1>
      	<h2>
      	  REAAAAAAAACT.
      	</h2>
      	</div>
      );
    }
  }


}
export default Test;

