import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';

class CardTitle extends React.Component {
  render() {
    const { className, text, isLarge } = this.props;
    if (!isLarge) {
      return (
        <Row>
          <Col md = {12}>
            <Link to = '/card'>
              <div className = {className || 'card-title'}>{ text }</div>
            </Link>
          </Col>
        </Row>
      )
    }
    return (
      <Row>
        <Col md = {12}> <div className = {className || 'card-title'}>{ text }</div></Col>
      </Row>
    );
  }
}

export default CardTitle;
