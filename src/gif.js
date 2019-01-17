import React from 'react';
import axios from "axios";

class Gif extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            gif: {
                images: {
                    original:{}
                },
                user: {}
            }
        }
    }

    componentDidMount() {
        const {params} = this.props.match
        axios.get('http://api.giphy.com/v1/gifs/' + params.id + '?api_key=iDu8o3DlFjmQIQtZZGgzKsDPPbK6IP04')
        .then(response => {
            this.setState(
                {gif: response.data.data}
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
                                      <img src={this.state.gif.user.avatar_url} alt="Placeholder image" />
                                    </figure>
                                </div>
                                <div className="media-content">
                                    <p className="title is-4">{this.state.gif.user.display_name}</p>
                                    <p className="subtitle is-6">@{this.state.gif.user.username}</p>
                                </div>
                            </div>

                            <br />

                            <div className="content is-capitalized title is-6">
                                <p className="title is-4">{this.state.gif.title}</p>
                                <p>Posted: {this.state.gif.import_datetime}</p>
                                <p>Rating: {this.state.gif.rating}</p>
                            </div>

                            <ul>
                                <li><i class="far fa-heart"></i> Favourite</li>
                                <li><i class="far fa-thumbs-down"></i> Dislike</li>
                            </ul>
                        </div>

                    </div>

                    <div className="column is-three-quarters">
                        <div className="card-content">
                            <img width="100%" src={this.state.gif.images.original.url} />
                        </div>
                    </div>



                </div>
            </div>
        )
    }
}

export default Gif
