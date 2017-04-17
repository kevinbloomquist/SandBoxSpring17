import React from 'react';

 class ContactForm extends React.Component {
  
  constructor() {
    super();
    console.log ("I'm in ContactForm!");


this.state = {
	text:"orig text",
	description: "orig descrip"
};

  this.propTypes ={
  	name: String,
  	description: String,

    value: React.PropTypes.object.isRequired
  }

  handleText: ()=>{
        		this.setState({text: this.newText.value});
  }

  
}
  render() {
    return (
    <div>

    <p>{this.state.text}</p>
    <p>{this.state.description}</p>


        <form className= "ContactForm">
            <textArea placeholder="description" name = "newText"/>
       		<div>
        	<button type = "submit" 
        	onClick= {this.handleText}
        	>
        	Submit
        	</button>
        	</div>
        </form>

     </div>
    )
  }
};

export default ContactForm;