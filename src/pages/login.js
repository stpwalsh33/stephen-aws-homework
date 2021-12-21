import React, { Component } from 'react';
import { connect } from 'react-redux';
import {withSnackbar} from "notistack";
import { Button, Card, CardContent, Container, FormControl, TextField } from '@material-ui/core';
import { doLogin } from '../redux/actions';
class Login extends Component {
  state = {
    username: '',
    password: ''
  }

  login = () => {
    const { username, password } = this.state;
    if (username !== 'admin' || password !== 'password') {
      this.props.enqueueSnackbar("Please input valid information.", { variant: 'error' })
      return;
    }
    this.props.doLogin();
    this.props.history.push('/dashboard');
  }

  render() {
    const { username, password } = this.state;
    return (
      <Container maxWidth="sm" className="login-page">
        <Card>
          <CardContent className="text-center v-r">
            <h1>Login</h1>
            <FormControl>
              <TextField required id="username" label="Username" value={username} onChange={e => this.setState({ username: e.currentTarget.value })} />
            </FormControl>
            <FormControl>
              <TextField required id="password" label="Password" type="password" value={password} onChange={e => this.setState({ password: e.currentTarget.value })} />
            </FormControl>
            <Button variant="contained" color="primary" onClick={this.login}>Login</Button>
          </CardContent>
        </Card>
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return {
  }
}

export default connect(mapStateToProps, { doLogin })(withSnackbar(Login));
