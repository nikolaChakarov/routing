import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './app.css';

import Nav from './nav';
import Home from './home';
import Shop from './shop';
import About from './about';
import Details from './details';


const App = () => {

    return (
        <div className="app">
            <Nav />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about">
                    <About />
                </Route>
                <Route exact path="/shop">
                    <Shop />
                </Route>
                <Route path="/shop/:id" component={Details}/>
            </Switch>
        </div>
    )
}

export default App;