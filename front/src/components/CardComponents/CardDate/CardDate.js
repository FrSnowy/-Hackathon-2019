import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import iconTime from '../../../assets/img/time.svg';

class CardDate extends React.Component {
  render() {
    const { className, date } = this.props;

    if (date) {
      return (
        <Row>
          <Col md = {12}>
            <span className = {className || 'card-date'}>
              <img src = {iconTime} alt = "Дата"/>
              { date }
            </span>
          </Col>
        </Row>
      );      
    } else return null;
  }
}

export default CardDate;
