import React from 'react';
import Header from '../../blocks/Header/Header';
import SingleCardWrapper from '../../components/SingleCardComponents/SingleCardWrapper/SingleCardWrapper';

function SinglePage() {
  return (
    <div className="single-page">
      <Header/>
      <SingleCardWrapper />
    </div>
  );
}

export default SinglePage;
