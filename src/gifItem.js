import React from "react";
import ReactDOM from "react-dom";

class GifItem extends React.Component {
	constructor(props) {
		super(props);

	}

  render(){
		return(
			<div className="item">
				<a href={'/gif/' + this.props.id}>
                    <img className="gifRounded"  src={this.props.images.original.url} />
				</a>
			</div>

		);
	}
}

export default GifItem;
