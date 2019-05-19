import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import WrappedButton from '../../components/WrappedButton/WrappedButton';

import DateFnsUtils from "@date-io/date-fns";
import {
  DatePicker,
  TimePicker,
  DateTimePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";

export default class AddEventForm extends React.Component {
  render() {
    const [selectedDate, handleDateChange] = useState(new Date());

    return (
      <Row className="justify-content-md-center">
        <Col md={8}>
          <div className="event-content">
            <Form>
              <Form.Group as={Row} controlId="formHorizontalTitle">
                <Form.Label column sm={3}>
                  Заголовок встречи
                </Form.Label>
                <Col sm={9}>
                  <Form.Control type="text" />
                </Col>
              </Form.Group>

              <Form.Group as={Row} controlId="formHorizontalTextarea">
                <Form.Label column sm={3}>
                  Описание встречи
                </Form.Label>
                <Col sm={9}>
                  <Form.Control as="textarea" rows="3" />
                </Col>
              </Form.Group>

              <Form.Group as={Row} controlId="formHorizontalCountry">
                <Form.Label column sm={3}>
                  Страна:
                </Form.Label>
                <Col sm={9}>
                  <Form.Control type="text" />
                </Col>
              </Form.Group>

              <Form.Group as={Row} controlId="formHorizontalCity">
                <Form.Label column sm={3}>
                  Город:
                </Form.Label>
                <Col sm={9}>
                  <Form.Control type="text" />
                </Col>
              </Form.Group>

              <Form.Group as={Row} controlId="formHorizontalPlace">
                <Form.Label column sm={3}>
                  Название места:
                </Form.Label>
                <Col sm={9}>
                  <Form.Control type="text" />
                </Col>
              </Form.Group>

              <Form.Group as={Row} controlId="formHorizontalAdress">
                <Form.Label column sm={3}>
                  Адрес:
                </Form.Label>
                <Col sm={9}>
                  <Form.Control type="text" />
                </Col>
              </Form.Group>

              <Form.Group as={Row} controlId="formHorizontalPic">
                <Form.Label column sm={3}>
                  Место:
                </Form.Label>
                <Col sm={9}>
                  <Form.Control type="text" />
                </Col>
              </Form.Group>

              <Form.Group as={Row} controlId="formHorizontalDate">
                <Form.Label column sm={3}>
                  Время встречи:
                </Form.Label>
                <Col sm={9}>
                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <DateTimePicker value={selectedDate} onChange={handleDateChange} />
                  </MuiPickersUtilsProvider>
                </Col>
              </Form.Group>

              <Form.Group as={Row}>
                <Col sm={{ span: 9, offset: 3 }}>
                  <WrappedButton className = "add-event-button" content = "Добавить"/>
                </Col>
              </Form.Group>
            </Form>
          </div>
        </Col>
      </Row>
    );
  }
};
