import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import './style.css';

import Trending from './Trending';
import Gif from './gif';

import StickerTrending from './StickerTrending';
import Sticker from './sticker';


const routing = (
    <Router>
        <div>

        <nav className="level is-dark" >
            <p class="level-item has-text-centered">
                <Link to="/">GIF's</Link>
            </p>

            <p class="level-item has-text-centered">
                <h1 className="is-size-1">GIPHY</h1>
            </p>

            <p class="level-item has-text-centered">
                <Link to="/StickerTrending">Stickers</Link>
            </p>

        </nav>

        <div className="container">

            <div class="field">
                <p class="control has-icons-left">
                    <input class="input" type="text" placeholder="Search" />
                    <span class="icon is-small is-left">
                        <i class="fas fa-search"></i>
                    </span>
                </p>
            </div>

            <Route exact path="/" component={Trending} />
            <Route path="/gif/:id" component={Gif} />
            <Route path="/StickerTrending" component={StickerTrending} />
            <Route path="/sticker/:id" component={Sticker} />
        </div>
        </div>
    </Router>
)


ReactDOM.render(
  routing,
  document.getElementById('root')
);
