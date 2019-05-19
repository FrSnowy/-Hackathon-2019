import React from 'react';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

class CardHelpButton extends React.Component {
  render() {
    const { className, text, md} = this.props;

    return (
      <Col md = {md || 6}>
        <Button className = {className || 'help-button'} onClick = { () => this.props.subscribe ? this.props.subscribe() : null}>{text}</Button>
      </Col>
    );
  }
}

export default CardHelpButton;
