import React from 'react';
import Col from 'react-bootstrap/Col';

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

    let subscribersImages = [];

    if (subscribers.length === 1) {
      subscribersImages.push(subscribers[0].avatar)
    } else {
      [0, 1].forEach(i => subscribersImages.push(subscribers[i].avatar))
    }

    const subscribersImagesView = subscribersImages.map(
      (img, i) => <img key = { i } src = {img} alt = "Подписчик" className = {`subscriber-avatar avatar-${i}`}/>
    )

    return (
      <Col md = {6} className = {className || 'card-subscribers'}>
        <div className = "subscribers-images">
          { subscribersImagesView }
        </div>
        <span>{subscribers.length} {subscribers.length === 1 ? 'собирается' : 'собираются'} помочь</span>
      </Col>
    );
  }
}

export default CardSubscribers;
