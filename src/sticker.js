import React from 'react';
import axios from "axios";

class Sticker extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            sticker: {
                images: {
                    original:{}
                },
                user: {}
            },
            click: false
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
		this.setState( prevState => (
			{click: !prevState.click }
		))
	}

    componentDidMount() {
        const {params} = this.props.match
        axios.get('http://api.giphy.com/v1/gifs/' + params.id + '?api_key=iDu8o3DlFjmQIQtZZGgzKsDPPbK6IP04')
        .then(response => {
            this.setState(
                {sticker: response.data.data}
            );
  	     })
  	    .catch(error => {
  	         console.log(error);
  	    })
  	}

    render() {
        const {params} = this.props.match
        return (
            <div>

                <div className="columns">
                    <div className="column is-one-quarter">

                        <div className="card-content">
                            <div className="media">
                                <div className="media-left">
                                    <figure className="image is-48x48">
                                      <img src={this.state.sticker.user.avatar_url} alt="Placeholder image" />
                                    </figure>
                                </div>
                                <div className="media-content">
                                    <p className="title is-4">{this.state.sticker.user.display_name}</p>
                                    <p className="subtitle is-6">@{this.state.sticker.user.username}</p>
                                </div>
                            </div>

                            <br />

                            <div className="content is-capitalized title is-6">
                                <p className="title is-4">{this.state.sticker.title}</p>
                                <p>Posted: {this.state.sticker.import_datetime}</p>
                                <p>Rating: {this.state.sticker.rating}</p>
                            </div>

                            {this.state.click ?
                                <a className="button is-danger" onClick={this.handleClick}> <span className="icon"><i class="far fa-thumbs-down"></i></span> <span>Dislike</span></a>
                                 :
                                 <a className="button is-info" onClick={this.handleClick}> <span className="icon"><i class="far fa-thumbs-up"></i></span> <span>Like</span></a>
                             }

                        </div>


                    </div>

                    <div className="column is-three-quarters">
                        <div className="card-content">
                            <img width="100%" src={this.state.sticker.images.original.url} />
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default Sticker
