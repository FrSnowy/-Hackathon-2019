import React from 'react';
import CardTitle from '../../CardComponents/CardTitle/CardTitle';
import CardDescription from '../../CardComponents/CardDescription/CardDescription';
import CardDate from '../../CardComponents/CardDate/CardDate';
import Col from 'react-bootstrap/Col';
import CardHelpButton from '../../CardComponents/CardHelpButton/CardHelpButton';

class FloatingCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scroll: window.pageYOffset,
    }
    window.onscroll = () => {
      this.setState({ scroll: window.pageYOffset })
    }
  }
  render() {
    const { columnClass, className } = this.props;

    return (
      <Col md={4} className = { columnClass || 'card-column floating-card' } style = {{
        transform: `translateY(${this.state.scroll}px)`
      }}>
        <div className = {className || 'card' }>
          <CardTitle text = { "Мусорные баки" } />
          <CardDescription text = { "Квартал центральный, Екатеринбург" } isLarge = { true } />
          <iframe
            src="https://yandex.ru/map-widget/v1/-/CCfVv0-f"
            width="100%"
            height="248"
            frameBorder="0"
            allowFullScreen={true}
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
