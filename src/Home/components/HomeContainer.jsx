import React, {Component} from 'react';
import logo from '../images/logo.svg';
import '../styles/home.css';

class HomeContainer extends Component {

    handleImageClick = (event) => {
        console.log('On click of Image');
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" onClick={this.handleImageClick}/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
            </div>
        );
    }
}

export default HomeContainer;
