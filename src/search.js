import React from 'react';
import axios from "axios";
import GifItem from "./gifItem.js";

class Search extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            search: []
        }

    }

    componentDidMount() {
        const {params} = this.props.match
        axios.get('http://api.giphy.com/v1/gifs/search?q=' + params.query + '&api_key=iDu8o3DlFjmQIQtZZGgzKsDPPbK6IP04')
        .then(response => {
            this.setState(
                {search: response.data.data}
            );
  	     })
  	    .catch(error => {
  	        console.log(error);
  	    })
  	}

    render() {
        const trendingList = this.state.search.map( t => <GifItem key={t.id} id={t.id} title={t.title} images={t.images} username={t.username} user={t.user} />)

        return (
            <div className="container">
                <h1 className="has-text-centered is-uppercase title is-size-4">Search</h1>
                <div className="masonry">
                    {trendingList}
                </div>
            </div>
        );
    }
}

export default Search
