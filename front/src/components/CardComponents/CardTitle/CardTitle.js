import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

class CardTitle extends React.Component {
  render() {
    const { className, text } = this.props;
    return (
      <Row>
        <Col md = {12}> <div className = {className || 'card-title'}>{ text }</div></Col>
      </Row>
    );
  }
}

export default CardTitle;
