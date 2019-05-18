import React from 'react';
import WrappedButton from '../WrappedButton/WrappedButton';
import Col from 'react-bootstrap/Col';
import HoverableLink from '../HoverableLink/HoverableLink';
import { withGetScreen } from 'react-getscreen';
;
class HeaderLogin extends React.Component {
  render() {
    const { isTablet, isMobileOnly, isAuth } = this.props;

    if (isAuth) {
      return (
        <Col lg = {5} md = {4} sm = {1}>
          <div className = "ava-ph"/>
        </Col>
      )
    }
  
    if (isTablet() || isMobileOnly) {
      return( 
        <Col lg={5} md = {isAuth ? 4 : 6 } sm = {isAuth ? 1 : 4 } xs = {12} className="login-wrapper">
          <WrappedButton className = "login-button" content = "Войти"/>
        </Col>
      )
    }
    return (
      <Col lg={5} md = {isAuth ? 4 : 6 } sm = {isAuth ? 1 : 4 } xs = {12} className="login-wrapper">
        <HoverableLink content = "Создать аккаунт" onClick={this.props.onShow}/>
        <span className = "or-split">или</span>
        <WrappedButton className = "login-button" content = "Войти" onClick={this.props.onShow}/>
      </Col>
    )
  }
}

export default withGetScreen(HeaderLogin);
