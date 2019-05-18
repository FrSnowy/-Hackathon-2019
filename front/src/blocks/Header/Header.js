import React from 'react';
import Logo from '../../components/Logo/Logo';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import HeaderLogin from '../../components/HeaderLogin/HeaderLogin';
import HeaderTabs from '../../components/HeaderTabs/HeaderTabs';
import { withGetScreen } from 'react-getscreen';
import AuthorizationPopup from '../../components/AuthorizationPopup/AuthorizationPopup';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
    };
  }

  handleClose = () => {
    this.setState({ show: false });
  };

  handleShow = () => {
    this.setState({ show: true });
  };


  render() {
    const { className, isMobile } = this.props;
    const isAuth = false;

    return (
      <Container
        className = { `${className || 'header'}-container ${isMobile() ? 'mobile' : 'not-mobile'} ${isAuth ? 'auth' : 'not-auth'}` }
        fluid = { true }
      >
        <Container>
          <Row>
            <Col lg={2} md = {2} sm={3} xs = {12} className="logo-wrapper">
              <Logo />
            </Col>
            <HeaderTabs isAuth = { isAuth } />
            <HeaderLogin isAuth = { isAuth } onShow={this.handleShow} />
          </Row>
        </Container>
        <AuthorizationPopup show={this.state.show} onHide={this.handleClose} />
      </Container>
    );
  }
}

export default withGetScreen(Header);
