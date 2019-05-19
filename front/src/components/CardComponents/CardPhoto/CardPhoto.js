import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

class CardPhoto extends React.Component {
  render() {
    const { className, isLarge, image } = this.props;

    return (
      <Row>
        <Col md = {12}>
          <div className = {`image-container ${isLarge ? 'large' : null}`}>
            <img src = { image } />
          </div>
        </Col>
      </Row>
    );
  }
}

export default CardPhoto;
