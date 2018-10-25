// Dependencies
import React from 'react';
import { Container, Row, Collapse, NavbarToggler, Nav } from 'reactstrap';
import { NavLink } from 'react-router-dom';

// Assets
import './Header.scss';
import logo from './../../../Assets/images/logo-ddb.svg';

const items = [
  {
    "title": "Home",
    "link": "/"
  },
  {
    "title": "Proyects",
    "link": "/proyects"
  }
];

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  createNavItem = (item) => (
    <li
      key={item.title}
      className="nav-item">
      <NavLink
        className="nav-link"
        rel="noopener noreferrer"
        to={item.link}
        exact>
        {item.title}
      </NavLink>
    </li>
  )

  createNavItems = () => (
    items.map(this.createNavItem)
  )


  render() {
    return (
      <header>
        <Container fluid>
          <Row>
            <nav className="navbar navbar-expand-lg navbar-light w-100">
              <NavLink className="navbar-brand mr-auto" to="/">
                <img src={logo} alt="logo" className="logo-header"/>
              </NavLink>
              <NavbarToggler onClick={this.toggleNavbar} className="mr-2 navbar-toggler" />
              <Collapse className="collapse navbar-collapse" id="navbarSupportedContent" isOpen={!this.state.collapsed}>
                <Nav navbar className="navbar-nav justify-content-end ml-auto">
                  {this.createNavItems()}
                </Nav>
              </Collapse>
            </nav>
          </Row>
        </Container>
      </header>
    );
  }
}

export default Header;
