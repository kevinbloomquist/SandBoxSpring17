import React from 'react';

class LikesComponent extends React.Component {

	constructor (props) {
		super(props);

			this.state = {
				likesCount:0,
				onLike: () => {
					let newLikesCount = this.state.likesCount +1;
					this.setState({likesCount : newLikesCount});
					}
			};
		
		}


	render() {
		return (
			<div>
				<p>LikesComponent here!</p>

				Likes : {this.state.likesCount}
        <div><button onClick={this.state.onLike}>Like Me</button></div>

	
			</div>
			);

	}
}

export default LikesComponent;