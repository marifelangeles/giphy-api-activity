import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import {connect} from 'react-redux';

class App extends Component {
  // Renders the entire app on the DOM

  componentDidMount() {
    this.getGiphy();
  }

  getGiphy = () => {
    console.log('in getGiphy');
    // get from client to route
    axios({
      method: 'GET',
      url: '/random'
    }).then( response => {
      // save response to redux
      console.log('response', response.data);
      this.props.dispatch({
        type: 'SET_RANDOM',
        payload: response.data,
      });
    }).catch( error => {
      console.log('error with get /random', error);
      alert('error with get /random');
    });
  }

  getImage = () => {
    console.log('in getImage');
    // this.props.reduxState.random.data
    // console.log('giphy', giphy);

    // for (const gif of giphy) {
    //   console.log('gif', gif);

    // }
  }
  render() {
    
    return (
      <div>
        <header className="App-header">
          <h1>Random Giphy API</h1>
        </header>
        {JSON.stringify(this.props.reduxState.random)}
        {/* <p>{this.props.reduxState.random.data.embed_url}</p> */}
        {/* {this.getImage()} */}
      </div>
    );
  }
}

const mapReduxStateToProps = (reduxState) => ({
  reduxState
});

export default connect(mapReduxStateToProps)(App);
