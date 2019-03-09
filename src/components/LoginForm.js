import React, { Component} from 'react';
import { connect } from 'react-redux';
import {Text} from 'react-native';
import firebase from 'firebase';
import { emailChanged, passwordChanged, loginUser } from '../actions'; 
import { Button, Card, CardSection, Input, Spinner} from './common';

class LoginForm extends Component {
  state= { email:'',password:'', error:' ', loading: false};

  onButtonPress() {
    const {email, password} = this.props;
    this.props.loginUser({ email, password});
    
  }
  // onLoginFail() {
  //   this.setState({error: 'Authentication Failed', loading: false});
  // }

  // onLoginSuccess() {
  //   this.setState({
  //     email: '',
  //     password: '',
  //     loading: false,
  //     error: ''
  //   });
  // }

  onEmailChange(text) {
    //console.log("text");
     this.props.emailChanged(text);
  }
  onPasswordChange(text){
    this.props.passwordChanged(text);
  }

  renderButton() {
    if(this.state.loading) {
      return <Spinner size="small" />;
    }
//onPress={this.onButtonPress.bind(this)}
    return (
        <Button onPress={this.onButtonPress.bind(this)}>
          Log in
        </Button>
    );
  }
    render() {
        return (
          <Card>
            <CardSection>
              <Input placeholder={"email@gmail.com"} value={this.props.email} label={"Email"} onChangeText={this.onEmailChange.bind(this)}style={styles.textStyle}/>
            </CardSection>
            <CardSection>
              <Input placeholder={"******"} value={this.props.password} label={"password"} secureTextEntry={true} onChangeText={this.onPasswordChange.bind(this)}style={styles.textStyle}/>
              </CardSection> 
              <Text style = {styles.errorTextStyle}>
                {this.state.error}
              </Text>
            <CardSection>
              {this.renderButton()}
            </CardSection>
          </Card>
        );
    }
}
const styles = {
  textStyle : {
    width: 100,
    height: 20
  },
  errorTextStyle: { 
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
}

const mapStateToProps = state => {
  return{
    email: state.auth.email,
    password: state.auth.password
  };
}
export default connect(mapStateToProps,{ 
  emailChanged,
  passwordChanged,
  loginUser
 })(LoginForm);