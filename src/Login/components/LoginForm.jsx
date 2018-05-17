import React, {Component} from 'react';
import {connect} from "react-redux";
import {setUsername, setPassword, setAuthenticationToken} from '../reducers/actions';
import axios from 'axios';

class LoginForm extends Component {

    storeUsername = (event) => {
        this.props.setUsername(event.target.value);
    }

    storePassword = (event) => {
        this.props.setPassword(event.target.value);
    }

    authenticateUserCredentials = (userData) => {
        axios.post('http://reactjstest.sumhr.com/api/login', {
            email: userData.username,
            password: userData.password
        }).then((response) => {
            this.props.setAuthenticationToken(response.data.data.token);
            this.props.history.push('/info');
        });
    }

    render() {
        let {username, password} = this.props;
        return (
            <div>
                <header className="App-header">
                    <h1 className="App-title">Sign in</h1>
                </header>
                <div>
                    <label>Username </label>
                    <input type="email" placeholder="Enter user name" onChange={this.storeUsername}/>
                </div>
                <div>
                    <label>Password </label>
                    <input type="password" placeholder="Enter password" onChange={this.storePassword}/>
                </div>
                <button type="button" onClick={(e) => this.authenticateUserCredentials({username, password})}>Sign in
                </button>
            </div>
        );
    }
}


const mapStateToProps = (state, props) => {
    return {
        username: state.loginReducer.username,
        password: state.loginReducer.password
    }
};

const mapDispatchToProps = {setUsername, setPassword, setAuthenticationToken};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
