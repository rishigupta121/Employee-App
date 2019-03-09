import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk'; // middleware
import reducers from './src/reducers';
import {Header, Button, CardSection, Card, Spinner} from './src/components/common';
import LoginForm from './src/components/LoginForm';

class App extends Component {
  componentWillMount() {
    const config = { 
      apiKey: "AIzaSyAcLjRHzelXLmhJqZZGcu_W0_j2nyAMZhY",
      authDomain: "employee-b6c76.firebaseapp.com",
      databaseURL: "https://employee-b6c76.firebaseio.com",
      projectId: "employee-b6c76",
      storageBucket: "employee-b6c76.appspot.com",
      messagingSenderId: "454346294861"
    };
    firebase.initializeApp(config);
  }
  
  render() {
    const { ViewStyle } = Styles;
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store = {store}>
        <View style={ViewStyle}>
          <Header headerText="Login Form"/>
          <LoginForm/>
        </View>
      </Provider>
    );
  }
}

const Styles = {
  ViewStyle : {
    marginTop: 0,
    paddingTop: 20

  }
}

export default App;