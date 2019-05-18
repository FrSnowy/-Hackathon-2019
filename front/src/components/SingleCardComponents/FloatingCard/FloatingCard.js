import React from 'react';
import CardTitle from '../../CardComponents/CardTitle/CardTitle';
import CardDescription from '../../CardComponents/CardDescription/CardDescription';
import CardDate from '../../CardComponents/CardDate/CardDate';
import Col from 'react-bootstrap/Col';
import CardHelpButton from '../../CardComponents/CardHelpButton/CardHelpButton';

class FloatingCard extends React.Component {
  render() {
    const { columnClass, className } = this.props;

    return (
      <Col md={4} className = { columnClass || 'card-column floating-card' }>
        <div className = {className || 'card' }>
          <CardTitle text = { "Мусорные баки" } />
          <CardDescription text = { "Квартал центральный, Екатеринбург" } isLarge = { true } />
          <iframe
            src="https://yandex.ru/map-widget/v1/-/CCfVv0-f"
            width="100%"
            height="248"
            frameborder="0"
            allowfullscreen="true"
            className = "map-frame"
          />
          <CardDate date = { "19 мая 2019 в 12:00" } />
          <CardHelpButton text = "Я помогу" />
        </div>
      </Col>
    );
  }
}

export default FloatingCard;
