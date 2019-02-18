import React from 'react';
import axios from 'axios';
import StickerItem from './stickerItem.js';

class Trending extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            trending: []
        };
    }

    componentDidMount() {
        axios.get('https://api.giphy.com/v1/stickers/trending?api_key=iDu8o3DlFjmQIQtZZGgzKsDPPbK6IP04')
            .then(response => {
                this.setState(
                    {trending: response.data.data}
                );
  	     })
  	    .catch(error => {
  	         console.log(error);
  	    });
  	}

    render() {
        const trendingList = this.state.trending.map( t => <StickerItem key={t.id} id={t.id} title={t.title} images={t.images} username={t.username} user={t.user} />);

        return (
            <div className="container">
                <h1 className="has-text-centered is-uppercase title is-size-4">Trending Stickers</h1>
                <div className="masonry">
                    {trendingList}
                </div>
            </div>
        );
    }
}

export default Trending;
