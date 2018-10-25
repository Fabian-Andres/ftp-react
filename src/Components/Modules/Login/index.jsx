// Dependences
import React, { Component } from "react";
import { Button, FormGroup, Input } from "reactstrap";

// Assets
import "./Login.scss";
import logo from './../../../Assets/images/mask2.svg';
const ramdomImg = 'https://picsum.photos/500/800/?random';


export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
  }

  render() {
    return (
        <div className="form-body">
            <div className="website-logo">
                <a href="index.html">
                    <div className="logo">
                        <img className="logo-size" src={logo} alt="logo" />
                    </div>
                </a>
            </div>
            <div className="row">
                <div className="img-holder">
                    <div className="bg" style={ { backgroundImage: 'url('+ramdomImg+')' } }></div>
                    <div className="info-holder">

                    </div>
                </div>
                <div className="form-holder">
                    <div className="form-content">
                        <div className="form-items">
                            <h3>Get more things done with Loggin platform.</h3>
                            <p>Access to the most powerfull tool in the entire design and web industry.</p>
                            <div className="page-links">
                                <h4>Login</h4>
                            </div>

                            <form onSubmit={this.handleSubmit}>
                                <FormGroup controlid="email" >
                                    <Input
                                    autoFocus
                                    type="email"
                                    placeholder="E-mail Address"
                                    value={this.state.email}
                                    onChange={this.handleChange}
                                    />
                                </FormGroup>
                                <FormGroup controlid="password" >
                                    <Input
                                    value={this.state.password}
                                    onChange={this.handleChange}
                                    placeholder="Password"
                                    type="password"
                                    />
                                </FormGroup>
                                <Button
                                    block
                                    color="primary"
                                    disabled={!this.validateForm()}
                                    type="submit"
                                >
                                    Login
                                </Button>
                                <a href="/"><small>Forget password?</small></a>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}