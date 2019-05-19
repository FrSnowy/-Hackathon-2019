import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import HoverableLink from '../HoverableLink/HoverableLink';
import WrappedButton from '../../components/WrappedButton/WrappedButton';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CustomCheckbox from '../../components/CustomCheckbox/CustomCheckbox';
import { connect } from 'react-redux';
import AppActions from '../App/App.actions';

class AuthorizationPopup extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      type: 'password',
      emailValue: '',
      passwordValue: '',
      invalidPassword: false,
      visible: true,
    };

    this.hide = this.hide.bind(this);
  }

  toggleVisibility = (event) => {
    event.preventDefault();
    event.stopPropagation();

    this.setState({
      type: this.state.type === 'input' ? 'password' : 'input'
    });

    event.target.classList.toggle('active');
  };

  hide() {
    this.setState({
      visible: false,
    });
  }

  updateEmailValue = (event) => {
    const element = event.target;

    this.setState({
      inputValue: element.value
    });

    element.classList.toggle('active', element.value.length);
  };

  updatePasswordValue = (event) => {
    const element = event.target;

    this.setState({
      passwordValue: element.value
    });

    element.classList.toggle('active', element.value.length);
  };

  render() {
    const {type, emailValue, passwordValue, invalidPassword} = this.state;
    const {mode, sendAuthRequest, sendRegisterRequest} = this.props;

    return (
      <Modal {...this.props}
             size="md"
             className = { this.state.visible ? '' : 'hidden' }
             dialogClassName="authorization-popup"
             aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Control
                type="email"
                placeholder="Введите e-mail"
                className={emailValue.length && 'active'}
                onChange={this.updateEmailValue}
              />
            </Form.Group>
            {mode === 'auth' && (<div><Form.Group controlId="formBasicPassword">
                <Form.Control
                  type={type}
                  placeholder="**********"
                  className={passwordValue.length && 'active'}
                  onChange={this.updatePasswordValue}/>
                <div className="toggle-password-visibility" onClick={this.toggleVisibility}/>
              </Form.Group>

              <Form.Group controlId="formBasicChecbox" className="control-account">
                <Row>
                  <Col md={6}>
                    <CustomCheckbox id="unchecked" label="Запомнить меня"/>
                  </Col>
                  <Col md={6}>
                    <HoverableLink content = "Забыли пароль?" className="auth-link"/>
                  </Col>
                </Row>
                {invalidPassword && <div className="invalid-password">Неверный пароль</div>}
              </Form.Group></div>)}


            <WrappedButton
              className = "enter-button"
              content = {mode === 'auth' ? "Войти" : "Продолжить"}
              onClick = {() => {
                if (mode === 'auth') sendAuthRequest(this.state.inputValue, this.state.passwordValue, this.hide)
                else sendRegisterRequest(this.state.inputValue, this.hide);
            }}  
            />

          </Form>
        </Modal.Body>
      </Modal>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  sendAuthRequest: (login, password, hide) => {
    hide();
    dispatch(
      AppActions.sendAuthRequest(login, password)
    )
  },
  sendRegisterRequest: (email, hide) => {
    hide();
    dispatch(
      AppActions.sendRegisterRequest(email)
    )
  }
});

export default connect(null, mapDispatchToProps)(AuthorizationPopup);