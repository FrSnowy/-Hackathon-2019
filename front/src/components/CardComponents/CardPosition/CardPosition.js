import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import iconLocation from '../../../assets/img/location.svg';

class CardPosition extends React.Component {
  render() {
    const { className, place } = this.props;

    return (
      <Row>
        <Col md = {12}>
          <span className = {className || 'card-position'}>
            <img src = {iconLocation} alt = "Дата"/>
            { place }
          </span>
        </Col>
      </Row>
    );
  }
}

export default CardPosition;
