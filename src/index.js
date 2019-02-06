import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter, Switch } from 'react-router-dom'
import './style.css';

import Trending from './Trending';
import Gif from './gif';

import StickerTrending from './StickerTrending';
import Sticker from './sticker';

import Search from './search';
import SearchBar from './searchbar';

class Routing extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <BrowserRouter>
                <div>

                    <nav className="level is-dark" >
                        <p className="level-item has-text-centered">
                            <Link to="/">GIF's</Link>
                        </p>

                        <p className="level-item has-text-centered">
                            <h1 className="is-size-1">GIF APP</h1>
                        </p>

                        <p className="level-item has-text-centered">
                            <Link to="/StickerTrending">Stickers</Link>
                        </p>

                    </nav>

                    <div className="container">

                        <SearchBar />

                        <Switch>
                            <Route exact path="/" component={Trending} />
                            <Route path="/gif/:id" component={Gif} />
                            <Route path="/StickerTrending" component={StickerTrending} />
                            <Route path="/sticker/:id" component={Sticker} />
                            <Route path="/search/:query" component={Search} />
                        </Switch>

                    </div>

                </div>
            </BrowserRouter>
        )
    }
}


ReactDOM.render(
  <Routing />,
  document.getElementById('root')
);
