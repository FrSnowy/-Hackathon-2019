import React from 'react';
import { connect } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from '../../../blocks/Card/Card';
import CardsActions from '../../CardComponents/CardWrapper/CardWrapper.actions';
import FloatingCard from '../FloatingCard/FloatingCard';
import Comments from '../../../blocks/Comments/Comments';
const request = require('request');

class SingleCardWrapper extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentCard: null,
    }
  }
  render() {
    const { cards, className } = this.props;

    const id = window.location.href.split('/');
    const currentID = id[id.length - 1];

    if (cards) {
      return (
        <Container fluid = { true } className = { className || 'single-card-wrapper' }>
          <Container>
            <Row>
              <Card content = { cards[currentID - 1] } isLarge = { true }/>
              <FloatingCard/>
              <Comments isLarge={true} />
            </Row>
          </Container>
        </Container>
      );
    } else {
      request.get(`https://quicksolutionsurber.herokuapp.com/api/v1/events/${currentID}`, (err, resp) => {
        const card = JSON.parse(resp.body);
        this.setState({ currentCard: card })
      });

      if (this.state.currentCard === null) return <div />
      else return (
        <Container fluid = { true } className = { className || 'single-card-wrapper' }>
          <Container>
            <Row>
              <Card content = { this.state.currentCard } isLarge = { true }/>
              <FloatingCard/>
              <Comments isLarge={true} />
            </Row>
          </Container>
        </Container>
      )
    }

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
