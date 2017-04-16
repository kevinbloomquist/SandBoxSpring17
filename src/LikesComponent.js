import React from 'react';

class LikesComponent extends React.Component {

	constructor (props) {
		super(props);

			this.state = {likesCount:0};
			this.onLike.bind(this);
		}

		onLike() {
			let newLikesCount = this.state.likesCount +1;
			this.setState({likesCount : newLikesCount});
		}

	render() {
		return (
			<div>
				<p>LikesComponent works!</p>

				Likes : <span>{this.state.likesCount}</span>
        <div><button onClick={this.onLike}>Like Me</button></div>

	
			</div>
			);

	}
}

export default LikesComponent;