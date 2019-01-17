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
                <h1>Gif</h1>

                <div className="columns">
                    <div className="column is-one-quarter">

                        <div class="card-content">
                            <div class="media">
                                <div class="media-left">
                                    <figure class="image is-48x48">
                                      <img src={this.state.gif.user.avatar_url} alt="Placeholder image" />
                                    </figure>
                                </div>
                                <div class="media-content">
                                    <p class="title is-4">{this.state.gif.user.display_name}</p>
                                    <p class="subtitle is-6">@{this.state.gif.user.username}</p>
                                </div>
                            </div>

                            <br />

                            <div class="content">
                                <p>Posted:</p>
                                {this.state.gif.import_datetime}

                            </div>
                        </div>


                    </div>
                    <div className="column is-two-quarters">
                        <img  src={this.state.gif.images.original.url} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Gif
