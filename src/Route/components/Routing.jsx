import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import HomeContainer from '../../Home/components/HomeContainer';
//import NotFound from '../NotFound/NotFound';
import '../styles/route.css';

const Routing = () => (
    <Router>
        <Switch>
            <Route exact path="/" component={HomeContainer}/>
        </Switch>
    </Router>
);

//         <Route path="*" component={NotFound} />

export default Routing;