import React, { Component} from 'react';
import { connect } from 'react-redux';
import {Text, View} from 'react-native';
// import firebase from 'firebase';
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

  renderError() {
    console.log(this.props);
    if(this.props.error){
      return(
        <View style={{ backgroundColor: 'white'}}>
        <Text style={styles.errorTextStyle}>
        {this.props.error}
        </Text>
        </View>
      );
    }
  }

  renderButton() {
    if(this.props.loading) {
      return <Spinner size="small" />;
    }
    return (
        <Button onPress={this.onButtonPress.bind(this)}>
          Login
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
              {this.renderError()}
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

const mapStateToProps = ({auth}) => {
  const { email, password, error, loading} = auth;
  return{ email, password, error, loading };
}
export default connect(mapStateToProps,{ 
  emailChanged,
  passwordChanged,
  loginUser
 })(LoginForm);