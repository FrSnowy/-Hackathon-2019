import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import WrappedButton from '../../components/WrappedButton/WrappedButton';
import { connect } from 'react-redux';
const request = require('request');

class AddEventForm extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      title: '',
      description: '',
      img: '',
      country: 'Россия',
      city: 'Екатеринбург',
      place: '',
      adress: ''
    }

    this.titleChange = this.titleChange.bind(this);
    this.descriptionChange = this.descriptionChange.bind(this);
    this.imageChange = this.imageChange.bind(this);
    this.countryChange = this.countryChange.bind(this);
    this.cityChange = this.cityChange.bind(this);
    this.placeChange = this.placeChange.bind(this);
    this.adressChange = this.adressChange.bind(this);
    this.sendCreateCardRequest = this.sendCreateCardRequest.bind(this);
  }

  titleChange(e) {
    e.preventDefault();
    this.setState({ title: e.target.value });
  }

  descriptionChange(e) {
    e.preventDefault();
    this.setState({ description: e.target.value });
  }

  imageChange(e) {
    e.preventDefault();
    this.setState({ img: e.target.value });
  }

  countryChange(e) {
    e.preventDefault();
    this.setState( { country: e.target.value });
  }

  cityChange(e) {
    e.preventDefault();
    this.setState( { city: e.target.value });
  }

  placeChange(e) {
    e.preventDefault();
    this.setState( { place: e.target.value });
  }

  adressChange(e) {
    e.preventDefault();
    this.setState( { adress: e.target.value });
  }
  

  sendCreateCardRequest (title, description, img, adress, meetingLocation) {
    request.post({
      url: "http://10.34.32.70:3000/api/v1/events",
      headers: {
        'Authorization': this.props.token
      },
      form: { event: { title, description, photo_link: img, location: adress, meetingLocation }}
    }, (err, res) => console.log(res))
  }


  render() {
    return (
      <Row className="justify-content-md-center">
        <Col md={8}>
          <div className="event-content">
            <h2 style = {{ color: "#26CB5C", fontSize: 24, display: 'inline-block', marginBottom: 24 }}>Добавить встречу</h2>
            <Form>
              <Form.Group as={Row} controlId="formHorizontalTitle">
                <Form.Label column sm={3}>
                  Заголовок встречи
                </Form.Label>
                <Col sm={9}>
                  <Form.Control type="text" onChange = { e => this.titleChange(e) }/>
                </Col>
              </Form.Group>

              <Form.Group as={Row} controlId="formHorizontalTextarea">
                <Form.Label column sm={3}>
                  Описание встречи
                </Form.Label>
                <Col sm={9}>
                  <Form.Control as="textarea" rows="3" onChange = { e => this.descriptionChange(e) } />
                </Col>
              </Form.Group>

              <Form.Group as={Row} controlId="formHorizontalTextarea">
                <Form.Label column sm={3}>
                  Ссылка на изображение
                </Form.Label>
                <Col sm={9}>
                  <Form.Control type="text" onChange = { e => this.imageChange(e) } />
                </Col>
              </Form.Group>

              <Form.Group as={Row} controlId="formHorizontalCountry">
                <Form.Label column sm={3}>
                  Страна:
                </Form.Label>
                <Col sm={9}>
                  <Form.Control defaultValue = { this.state.country } onChange = { e => this.countryChange(e) } type="text" />
                </Col>
              </Form.Group>

              <Form.Group as={Row} controlId="formHorizontalCity">
                <Form.Label column sm={3}>
                  Город:
                </Form.Label>
                <Col sm={9}>
                  <Form.Control defaultValue = { this.state.city } onChange = { e => this.cityChange(e) } type="text" />
                </Col>
              </Form.Group>

              <Form.Group as={Row} controlId="formHorizontalPlace">
                <Form.Label column sm={3}>
                  Название места:
                </Form.Label>
                <Col sm={9}>
                  <Form.Control type="text" onChange = { e => this.placeChange(e) } />
                </Col>
              </Form.Group>

              <Form.Group as={Row} controlId="formHorizontalAdress">
                <Form.Label column sm={3}>
                  Адрес:
                </Form.Label>
                <Col sm={9}>
                  <Form.Control type="text" onChange = { e => this.adressChange(e) } />
                </Col>
              </Form.Group>

              <Form.Group as={Row}>
                <Col sm={{ span: 9, offset: 3 }}>
                  <WrappedButton
                    className = "add-event-button"
                    content = "Добавить"
                    onClick = {() => {
                      const  { title, description, img, country, city, place, adress } = this.state;
                      const completeAdress = country + city + adress;
                      this.sendCreateCardRequest(title, description, img, completeAdress, place);
                    }}
                  />
                </Col>
              </Form.Group>
            </Form>
          </div>
        </Col>
      </Row>
    );
  }
};

const mapStateToProps = store => ({
  token: store.app.token,
});

export default connect(mapStateToProps)(AddEventForm);