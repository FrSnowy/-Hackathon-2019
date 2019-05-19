import React from 'react';
import AddEventForm from '../../blocks/AddEventForm/AddEventForm';
import Header from '../../blocks/Header/Header';
import { connect } from 'react-redux';

class AddEventPage extends React.Component {
  render() {
    const { token } = this.props;
    return (
      <div className="add-event-page">
        <Header/>
        <AddEventForm />
      </div>
    );
  }
}

const mapStateToProps = store => ({
  token: store.app.token,
});

export default connect(mapStateToProps)(AddEventPage);
