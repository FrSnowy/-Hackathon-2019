import React from 'react';
import Logo from '../../components/Logo/Logo';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TabButton from '../../components/TabButton/TabButton';
import WrappedButton from '../../components/WrappedButton/WrappedButton';
import HoverableLink from '../../components/HoverableLink/HoverableLink';

class Header extends React.Component {
  render() {
    const { className } = this.props;
    return (
      <Container fluid = { true }>
        <Container className = { `${className || 'header'}-container` }>
          <Row>
            <Col md={2}>
              <Logo />
            </Col>
            <Col md={5}>
              <TabButton content = "Актуальное" isSelected = {true}/>
              <TabButton content = "Свежее" isSelected = {false}/>
              <TabButton content = "Вы подписаны" isSelected = {false}/>
            </Col>
            <Col md={5}>
              <HoverableLink content = "Создать аккаунт"/>
              <span className = "or-split">или</span>
              <WrappedButton className = "login-button" content = "Войти"/>
            </Col>
          </Row>
        </Container>
      </Container>
    );
  }
}

export default Header;
