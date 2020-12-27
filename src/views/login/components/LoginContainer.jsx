import React from 'react';
import LoginComponent from './LoginComponent'
import {Container} from './styles'

class LoginContainer extends React.Component {
  render(){
    return (
      <Container>
        <LoginComponent/>
      </Container>
    )
  }
}

export default LoginContainer;
