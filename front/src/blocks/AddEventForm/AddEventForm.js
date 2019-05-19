import React from 'react';
import Col from 'react-bootstrap/Col';

export default class AddEventForm extends React.Component {
  render() {
    const { isLarge } = this.props;

    return (
      <Col md={isLarge ? 8 : 4}>

      </Col>
    );
  }
};
