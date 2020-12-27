import React from 'react'
import { InputTextField } from '../../../components/inputText';
import { LabelText } from '../../../components/text';
import { SubmitButton } from '../../../components/button';
import { LoginComponentView } from './styles';

const LoginComponent = (props) => {	
  return ( 
    <LoginComponentView>
      <LabelText>Login</LabelText>
      <InputTextField type="text"/>
      <LabelText>Password</LabelText>
      <InputTextField type="password"/>
      <SubmitButton>Log In</SubmitButton>
    </LoginComponentView>
  )
}

export default LoginComponent;
