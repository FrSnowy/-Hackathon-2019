import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

class CardPhoto extends React.Component {
  render() {
    const { className, isLarge, image } = this.props;

    return (
      <Row>
        <Col md = {12}>
          <img
            src = {image}
            alt = "Фото"
            className = {`${className || 'card-image'} ${isLarge ? `${className ? className : 'card-image'}-large` : ''}`}/>
        </Col>
      </Row>
    );
  }
}

export default CardPhoto;
