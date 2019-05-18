import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import iconTime from '../../assets/img/time.svg';
import iconLocation from '../../assets/img/location.svg';

class Card extends React.Component {
  render() {
    const { content, className, columnClass, isLarge } = this.props;

    let shortenDescription = null;
    let readMore = null;

    if (!isLarge) {
      const parsedDescription = content.description.split(' ');
      const MAX_DESCRIPTION_WORD_LENGTH = 10;
  
      if (parsedDescription.length > MAX_DESCRIPTION_WORD_LENGTH) {
        shortenDescription = parsedDescription
          .filter((_, i) => i <= MAX_DESCRIPTION_WORD_LENGTH)
          .join(' ') + ' ';
        readMore = <a className = "read-more">читать дальше</a>;
      } else {
        shortenDescription = content.description;
      }
    }   

    return (
      <Col md={isLarge ? 8 : 4} className = { columnClass || 'card-column' }>
        <div className = {className || 'card' }>
          <Row>
            <Col md = {12}> <div className = 'card-title'>{ content.title }</div></Col>
          </Row>
          <Row>
            <Col md = {12}>
              <div className = 'card-description'>
                { isLarge ? content.description : shortenDescription }
                { isLarge ? readMore : null }
              </div>
            </Col>
          </Row>
          <Row>
            <Col md = {12}>
              <img src = {content.img} alt = "Фото" className = {`card-image ${isLarge ? 'card-image-large' : ''}`}/>
            </Col>
          </Row>
          <Row>
            <Col md = {12}>
              <span className = "card-date">
                <img src = {iconTime} alt = "Дата"/>
                { content.date }
              </span>
            </Col>
          </Row>
          <Row>
            <Col md = {12}>
              <span className = "card-position">
                <img src = {iconLocation} alt = "Место"/>
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
                  <img src = {content.author.avatar} alt = {content.author.name}/>
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
