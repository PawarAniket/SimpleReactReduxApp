import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import HomeContainer from '../../Home/components/HomeContainer';
import NotFoundContainer from '../../NotFound/components/NotFoundContainer';
import '../styles/route.css';

const Routing = () => (
    <Router>
        <Switch>
            <Route exact path="/" component={HomeContainer}/>
            <Route path="*" component={NotFoundContainer}/>
        </Switch>
    </Router>
);

export default Routing;