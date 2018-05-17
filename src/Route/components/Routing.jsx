import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import LoginForm from '../../Login/components/LoginForm';
import NotFoundContainer from '../../NotFound/components/NotFoundContainer';
import EmployeeListContainer from '../../EmployessList/components/EmployeeListContainer';
import '../styles/route.css';

const Routing = () => (
    <Router>
        <Switch>
            <Route exact path="/" component={LoginForm}/>
            <Route exact path="/info" component={EmployeeListContainer}/>
            <Route path="*" component={NotFoundContainer}/>
        </Switch>
    </Router>
);

export default Routing;