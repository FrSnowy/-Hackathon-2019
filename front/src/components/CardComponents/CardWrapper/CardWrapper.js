import React from 'react';
import { connect } from 'react-redux';
import Container from 'react-bootstrap/Container';
import CardsActions from './CardWrapper.actions';
import CardRow from '../CardRow/CardRow';

class CardWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.makeChunks = this.makeChunks.bind(this);
  }

  makeChunks(arr, size) {
    const splittedChunks = [[]];

    let outerIndex = 0;
    arr.forEach(el => {
      if (outerIndex === size) {
        splittedChunks.push([]);
        outerIndex = 0;
      }
      splittedChunks[splittedChunks.length - 1].push(el);
      outerIndex += 1;
    });

    return splittedChunks;
  }

  render() {
    const { cards, className, recieveCards } = this.props;

    if (!cards) {
      recieveCards();
      return null;
    }

    if (cards === 'no-server') {
      return (
        <Container fluid = { true } className = { className || 'card-wrapper' }>
          <Container>
            <span style = {{ fontSize: 196, color: 'red' }}>SERVER NOT RESPONDING</span>
          </Container>
        </Container>
      )
    } else {
      const chunkedCards = this.makeChunks(cards.sort((cardA, cardB) => cardA.id - cardB.id), 3);
      console.log(cards);
      const cardRows = chunkedCards.map((chunk, i) => <CardRow key = { i } cards = { chunk }/>)

      return (
        <Container fluid = { true } className = { className || 'card-wrapper' }>
          <Container>
            { cardRows }
          </Container>
        </Container>
      );
    }

    
  }
}

const mapStateToProps = store => ({
  cards: store.cards.cards
});

const mapDispatchToProps = dispatch => ({
  recieveCards: (startID, count) => dispatch(
    CardsActions.recieveCards(startID, count)
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(CardWrapper);
