import React from "react";
import ReactDOM from "react-dom";

class StickerItem extends React.Component {
	constructor(props) {
		super(props);

	}

  render(){
		return(
			<div className="item">
				<a href={'/sticker/' + this.props.id}>
                    <img  src={this.props.images.original.url} />
                </a>
			</div>


		);
	}
}

export default StickerItem;
