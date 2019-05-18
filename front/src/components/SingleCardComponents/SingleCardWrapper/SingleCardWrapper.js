import React from 'react';
import { connect } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from '../../../blocks/Card/Card';
import CardsActions from '../../CardComponents/CardWrapper/CardWrapper.actions';
import FloatingCard from '../FloatingCard/FloatingCard';

class SingleCardWrapper extends React.Component {
  render() {
    const { cards, className, recieveCards } = this.props;

    if (!cards || cards.length !== 1) {
      recieveCards();
      return null;
    }

    return (
      <Container fluid = { true } className = { className || 'single-card-wrapper' }>
        <Container>
          <Row>
            <Card content = { cards[0] } isLarge = { true }/>
            <FloatingCard/>
          </Row>
        </Container>
      </Container>
    );
  }
}

const mapStateToProps = store => ({
  cards: store.cards.cards
});

const mapDispatchToProps = dispatch => ({
  recieveCards: (startID, count = 1) => dispatch(
    CardsActions.recieveCards(startID, count)
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(SingleCardWrapper);
