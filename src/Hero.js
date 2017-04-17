import React from 'react';

class Hero extends React.Component {

	constructor() {

		super();

	}

	render() {
		console.log("rendering Hero");

	return(
	<div className = "hero">
	<img src="https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-monkeyselfie.jpg" alt = "IMAGE!!!" width= "500px" height = "500px" />
	</div>
	);
  }
}

export default Hero;