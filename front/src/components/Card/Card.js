import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import iconTime from '../../assets/img/time.svg';
import iconLocation from '../../assets/img/location.svg';

class Card extends React.Component {
  render() {
    const { content, className, columnClass } = this.props;

    return (
      <Col md={4} className = { columnClass || 'card-column' }>
        <div className = {className || 'card' }>
          <Row>
            <Col md = {12}> <div className = 'card-title'>{ content.title }</div></Col>
          </Row>
          <Row>
            <Col md = {12}> <div className = 'card-description'>{ content.description }</div></Col>
          </Row>
          <Row>
            <Col md = {12}>
              <img src = {content.img} alt = "Фото" className = "card-image"/>
            </Col>
          </Row>
          <Row>
            <Col md = {12}>
              <span class = "card-date">
                <img src = {iconTime}/>
                { content.date }
              </span>
            </Col>
          </Row>
          <Row>
            <Col md = {12}>
              <span class = "card-position">
                <img src = {iconLocation}/>
                { content.place }              
              </span>
            </Col>
          </Row>
          <Row>
            <Col md = {6}>
              <Button className = "help-button">Я помогу!</Button>
            </Col>
            <Col md = {6}>
              <div className = "author">
                <div className = "info">
                  <div className = "name">{content.author.name}</div>
                  <div className = "date">1 день назад</div>
                </div>
                <div className = "avatar">
                  <img src = {content.author.avatar}/>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Col>
    );
  }
}

export default Card;
