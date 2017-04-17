import React from 'react';

class Hero extends React.Component {

	constructor() {

		super();
		this.state = {
			vibe:"https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-monkeyselfie.jpg",
		

		changeVibe: ()=>{
			let newVibe = this.state.vibe ==
			"https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-monkeyselfie.jpg" ? "http://shutterpulse.com/wp-content/uploads/2015/06/22.jpg" : "https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-monkeyselfie.jpg";
    		this.setState({ vibe: newVibe });
    		console.log("changeVibe hit");
    	}
  }

	}

	render() {

	return(
	<div className = "hero">
	<img src={this.state.vibe} alt = "IMAGE!!!" width= "500px" height = "500px" />
	<button onClick = {this.state.changeVibe}> Next Vibe </button>
	</div>
	);
  }
}

export default Hero;