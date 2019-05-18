import React from 'react';
import Row from 'react-bootstrap/Row';
import Card from '../Card/Card';

class CardRow extends React.Component {
  render() {
    const { cards, className } = this.props;
    const cardViews = cards.map((card, i) => <Card content = { card } key = { i }/>);

    return (
      <Row className = { className || 'card-row' }>{ cardViews }</Row>
    );
  }
}

export default CardRow;
