import React from 'react';
import Col from 'react-bootstrap/Col';
import CardTitle from '../../components/CardComponents/CardTitle/CardTitle';
import CardDescription from '../../components/CardComponents/CardDescription/CardDescription';
import CardPhoto from '../../components/CardComponents/CardPhoto/CardPhoto';
import CardDate from '../../components/CardComponents/CardDate/CardDate';
import CardPosition from '../../components/CardComponents/CardPosition/CardPosition';
import CardFooter from '../../components/CardComponents/CardFooter/CardFooter';

class Card extends React.Component {
  render() {
    const { content, className, columnClass, isLarge } = this.props;

    return (
      <Col md={isLarge ? 8 : 4} className = { columnClass || 'card-column' }>
        <div className = {className || 'card' }>
          <CardTitle text = { content.title } />
          <CardDescription text = { content.description } isLarge = { isLarge } />
          <CardPhoto isLarge = { isLarge } image = { content.img } />
          { isLarge || <CardDate date = { content.date } /> }
          { isLarge || <CardPosition place = { content.place } />}
          <CardFooter author = { content.author } isLarge = { isLarge } subscribers = { content.subscribers }/>
        </div>
      </Col>
    );
  }
}

export default Card;
