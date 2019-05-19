import React from 'react';
import { connect } from 'react-redux';
import Header from '../../blocks/Header/Header';
import SingleCardWrapper from '../../components/SingleCardComponents/SingleCardWrapper/SingleCardWrapper';
import AddPostButton from '../../components/AddPostButton/AddPostButton';

class SinglePage extends React.Component {
  render() {
    const { isLoggedIn } = this.props;
    return (
      <div className="single-page">
        <Header/>
        <SingleCardWrapper />
        { isLoggedIn ? <AddPostButton /> : null}
      </div>
    );
  }
}

const mapStateToProps = store => ({
  isLoggedIn: store.app.isLoggedIn,
});

export default connect(mapStateToProps)(SinglePage);
