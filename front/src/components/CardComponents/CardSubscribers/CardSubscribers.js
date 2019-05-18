import React from 'react';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

class CardSubscribers extends React.Component {
  render() {
    const { className, subscribers} = this.props;

    if (!subscribers || subscribers.length === 0) {
      return (
        <Col md = {6} className = {className || 'card-subscribers'}>
          <span>Станьте первым, кто поможет!</span>
        </Col>
      )
    }

    return (
      <Col md = {6} className = {className || 'card-subscribers'}>
        <span>{subscribers.length} {subscribers.length === 1 ? 'собирается' : 'собираются'} помочь</span>
      </Col>
    );
  }
}

export default CardSubscribers;
