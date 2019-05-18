import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import CardHelpButton from '../CardHelpButton/CardHelpButton';
import CardSubscribers from '../CardSubscribers/CardSubscribers';

class CardFooter extends React.Component {
  constructor(props) {
    super(props);
    this.getFooter = this.getFooter.bind(this);
    this.getSubscribers = this.getSubscribers.bind(this);
  }

  getFooter(isLarge) {
    return isLarge ? null : <CardHelpButton text = "Я помогу" />
  }

  getSubscribers(isLarge) {
    const { subscribers: subs } = this.props;
    return isLarge ? <CardSubscribers subscribers = {subs} /> : null;
  }

  render() {
    const { className, author, isLarge } = this.props;

    const helpButton = this.getFooter(isLarge);
    const subscribers = this.getSubscribers(isLarge);

    return (
      <Row className = { className || 'card-downpart'}>
        { helpButton }
        { subscribers }
        <Col md = {6}>
          <div className = {`author ${isLarge ? 'large' : null}`}>
            <div className = "info">
              <div className = "name">{author.name}</div>
              <div className = "date">1 день назад</div>
            </div>
            <div className = "avatar">
              <img src = {author.avatar} alt = {author.name}/>
            </div>
          </div>
        </Col>
      </Row>
    );
  }
}

export default CardFooter;
