import React, {Component} from 'react';
import logo from '../images/logo.svg';
import '../styles/home.css';
import {connect} from "react-redux";
//import {bindActionCreators} from 'redux';
import {changeName} from '../reducers/action';
import {reduxForm, change, getFormValues} from "redux-form";

class HomeContainer extends Component {

    handleImageClick = (event) => {
        this.props.changeName('Prashant Khode');
    }

    render() {
        let {name} = this.props;
        return (
            <form className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" onClick={this.handleImageClick}/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">To get started, edit <code>src/App.js</code> and save to reload.</p>
                <p className="App-intro">Current logged in user is {name}</p>
            </form>
        );
    }
}

const validate = (values, props) => {
    let errors = {};
    if (values) {
        console.log('Form values are being resolved');
    }
    return errors;
}

HomeContainer = reduxForm({
    form: 'homeForm',
    enableReinitialize: true,
    validate
})(HomeContainer);

const mapStateToProps = (state, props) => {
    var values = getFormValues('homeForm')(state) || {};
    const name = state.homeReducer.name;
    return {
        name,
        values
    }
};

//const mapDispatchToProps = dispatch => bindActionCreators({changeName, change}, dispatch);
const mapDispatchToProps = {changeName, change};

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
