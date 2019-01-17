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

        <div className="container">
            <section className="hero is-dark">
                <nav className="navbar " role="navigation" aria-label="main navigation">
                    <div className="navbar-menu">
                        <div className="navbar-start">

                            <a className="navbar-item">
                                <Link to="/">GIF's</Link>
                            </a>
                            <a className="navbar-item">
                                <Link to="/StickerTrending">Stickers</Link>
                            </a>

                        </div>
                    </div>

                    <div className="navbar-end">
                        <div className="navbar-item">
                            <input className="input" type="text" placeholder="Search" />
                        </div>
                    </div>
                </nav>
            </section>



            <Route exact path="/" component={Trending} />
            <Route path="/gif/:id" component={Gif} />
            <Route path="/StickerTrending" component={StickerTrending} />
            <Route path="/sticker/:id" component={Sticker} />
        </div>
    </Router>
)


ReactDOM.render(
  routing,
  document.getElementById('root')
);
