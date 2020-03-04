import React, {Component} from 'react';
import axios from 'axios';
import { Container, Form, Button, Row, Card } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import { createStore } from 'redux';
import NavBar from '../NavBar/NavBar';

class Login extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      question: null,
      isLoading: false,
      login: null,
      password: null,
      redirect: false,
    };
  }

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/' />
    }
  }

  async handleClick(e) {

    const { history } = this.props;
    if(this.input.value === "test@test.com" && this.pass.value === "oui") {
        await localStorage.setItem('Login', this.input.value)
        this.setState({
          redirect: true
        })
    }
  }

  async componentDidMount() {
    const { match: { params } } = this.props;
  }

  render() {
    const { isLoading } = this.state;
    console.log(this.login)
    return (
      <Container>
                <NavBar/>
        {this.renderRedirect()}
  <Row className="justify-content-md-center">
        <Card style={{ width: '25rem' }}>
  <Card.Body>
<Form onSubmit={this.handleSubmit}>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control ref={(input) => this.input = input } type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control ref={(pass) => this.pass = pass } type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group controlId="formBasicChecbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button onClick={this.handleClick} variant="primary" type="submit">
    Submit
  </Button>
</Form>
</Card.Body>
</Card>
</Row>
</Container>
    )
  }
}

export default Login;