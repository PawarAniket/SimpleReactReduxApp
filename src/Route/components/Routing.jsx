import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import HomeContainer from '../../Home/components/HomeContainer';
import NotFoundContainer from '../../NotFound/components/NotFoundContainer';
import UserContainer from '../../User/components/UserContainer';
import '../styles/route.css';

const Routing = () => (
    <Router>
        <Switch>
            <Route exact path="/" component={HomeContainer}/>
            <Route path="/user" component={UserContainer}/>
            <Route path="*" component={NotFoundContainer}/>
        </Switch>
    </Router>
);

export default Routing;