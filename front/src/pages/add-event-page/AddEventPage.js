import React from 'react';
import AddEventForm from '../../blocks/AddEventForm/AddEventForm';
import Header from '../../blocks/Header/Header';

function AddEventPage() {
  return (
    <div className="add-event-page">
      <Header/>
      <AddEventForm />
    </div>
  );
}

export default AddEventPage;
