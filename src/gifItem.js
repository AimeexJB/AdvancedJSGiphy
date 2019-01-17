import React from "react";
import ReactDOM from "react-dom";

class GifItem extends React.Component {
	constructor(props) {
		super(props);

	}

  render(){
		return(
			<div className="item">
                    <img  src={this.props.images.original.url} />
                    <a href={'/gif/' + this.props.id} class="button is-fullwidth">Preview</a>
			</div>


		);
	}
}

export default GifItem;
