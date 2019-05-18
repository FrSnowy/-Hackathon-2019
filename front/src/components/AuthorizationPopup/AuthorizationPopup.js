import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import HoverableLink from '../HoverableLink/HoverableLink';
import WrappedButton from '../../components/WrappedButton/WrappedButton';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default class AuthorizationPopup extends React.Component {
  render() {
    return (
      <Modal {...this.props}
             size="md"
             dialogClassName="authorization-popup"
             aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Введите e-mail" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Control type="password" placeholder="**********" />
            </Form.Group>
            <Form.Group controlId="formBasicChecbox">
              <Row>
                <Col md={6}>
                  <Form.Check type="checkbox" label="Запомнить меня" />
                </Col>
                <Col md={6}>
                  <HoverableLink content = "Забыли пароль?" />
                </Col>
              </Row>
            </Form.Group>
            <WrappedButton className = "enter-button" content = "Войти"/>
          </Form>
        </Modal.Body>
      </Modal>
    );
  }
}
