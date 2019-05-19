import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';

class CardDescription extends React.Component {
  constructor(props) {
    super(props);
    this.getShortText = this.getShortText.bind(this);
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.text !== this.props.text;
  }

  getShortText(text) {
    const parsedDescription = text.split(' ');
    const MAX_DESCRIPTION_WORD_LENGTH = 10;

    let shortenDescription = null;

    if (parsedDescription.length > MAX_DESCRIPTION_WORD_LENGTH) {
      shortenDescription = parsedDescription
        .filter((_, i) => i <= MAX_DESCRIPTION_WORD_LENGTH)
        .join(' ') + ' ';
    } else {
      shortenDescription = text;
    }

    return shortenDescription;
  }

  render() {
    const { className, isLarge, text } = this.props;

    let shortDescription = null;
    let readMore = null;

    if (!isLarge) {
      shortDescription = this.getShortText(text);
      readMore = <Link to = {`/card/${this.props.id}`} className ="read-more-link">читать дальше</Link>;
    }

    return (
      <Row>
        <Col md = {12}>
          <div className = {className || 'card-description'}>
            { isLarge ? text : shortDescription }
            { isLarge ? readMore : null }
          </div>
        </Col>
      </Row>
    );
  }
}

export default CardDescription;
