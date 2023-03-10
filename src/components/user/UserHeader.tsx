import React, { useEffect } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { logoutAction } from '../../actions/authenticationAction';
import { clearError } from '../../actions/errorAction';
import { fontFamily, yellow } from '../../assets/global';
import { useAppDispatch, useAppSelector } from '../../types/ReduxTypes';
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

const UserHeader: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const userName = useAppSelector(state => ({
    firstName: state.user.firstName,
    lastName: state.user.lastName,
  }));

  useEffect(() => {
    dispatch(clearError());
  }, [dispatch, location.pathname]);

  const handleLogout = (event: any): void => {
    event.preventDefault();
    dispatch(logoutAction());
    navigate('/');
  };

  return (
    <>
      <Helmet>
        <title>{formatName(userName.firstName, userName.lastName)}</title>
      </Helmet>
      <Navbar bg="dark" variant="dark" fixed="top" style={NavBarStyles}>
        <Container fluid>
          <Navbar.Brand style={NavBrandStyles} as={Link} to="/">
            {formatName(userName.firstName, userName.lastName)}
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end me-auto">
            <Nav>
              <Nav.Link as={Link} to="/profile" style={NavLinkStyles}>
                Profile
              </Nav.Link>
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
    </>
  );
};

export default UserHeader;
