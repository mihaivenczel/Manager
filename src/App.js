import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import firebase from 'firebase/app';
import LoginForm from './components/LoginForm';
import Router from './Router';

class App extends Component {

  
  componentWillMount() {
    var config = {
      apiKey: "AIzaSyB2RBfniW8yMzBKrpvHrXgTQvO7ArxnBLM",
      authDomain: "manage-239ab.firebaseapp.com",
      databaseURL: "https://manage-239ab.firebaseio.com",
      projectId: "manage-239ab",
      storageBucket: "manage-239ab.appspot.com",
      messagingSenderId: "108745414771",
      appId: "1:108745414771:web:f9287dd66f2e970eecb206",
      measurementId: "G-HBWXFETZH4"
    };
    // Initialize Firebase
    firebase.initializeApp(config);

  }
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
