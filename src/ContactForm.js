import React from 'react';

 class ContactForm extends React.Component {
  
  constructor() {
    super();
    console.log ("I'm in ContactForm!");


this.state = {
	input:"orig text",
	description: "orig descrip",


// Still need to figure out how to run handle text to pass info from text area (below) to state to render
  handleChange: (e)=> {
    this.setState({ input: e.target.value });
  },

  handleClick: ()=> {
    console.log(this.state.input);
    console.log(e.target.value);
  }
}

  
}
  render() {
    return (
    <div>

    <p>This.state.input: {this.state.input}</p>
    <p>This.state.descrip: {this.state.description}</p>


        <form className= "ContactForm">
            <input type = "text" placeholder="text" onChange = {this.state.handleChange} />

        </form>

     </div>
    )
  }
};

export default ContactForm;