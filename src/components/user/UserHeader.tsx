import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { logoutAction } from '../../actions/authenticationActions';
import { fontFamily, yellow } from '../../assets/global';
import { UserHeaderProps } from '../../types/PropTypes';
import { useAppDispatch } from '../../types/ReduxTypes';
import formatName from '../../utils/formatName';

const NavBarStyles: React.CSSProperties = {
  padding: '10px',
  marginBottom: '20px',
  fontFamily: fontFamily,
};

const NavBrandStyles: React.CSSProperties = {
  marginLeft: '15px',
  color: yellow,
};

const NavLinkStyles: React.CSSProperties = {
  fontFamily: fontFamily,
  color: yellow,
  textAlign: 'right',
};

const UserHeader: React.FC<UserHeaderProps> = props => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogout = (event: any): void => {
    event.preventDefault();
    dispatch(logoutAction());
    navigate('/');
  };

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      fixed="top"
      style={NavBarStyles}>
      <Container fluid>
        <Navbar.Brand style={NavBrandStyles} as={Link} to="/">
          {formatName(props.userFirstName, props.userLastName)}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end me-auto">
          <Nav>
            {props.sections.map(section => {
              return (
                <Nav.Link
                  key={section.label}
                  as={Link}
                  to={section.path}
                  style={NavLinkStyles}>
                  {section.label}
                </Nav.Link>
              );
            })}
            <Nav.Link
              as={Link}
              to="/"
              onClick={handleLogout}
              style={NavLinkStyles}>
              Logout
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default UserHeader;
