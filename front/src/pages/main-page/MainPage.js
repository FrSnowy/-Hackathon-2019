import React from 'react';
import { connect } from 'react-redux';
import Header from '../../blocks/Header/Header';
import CardWrapper from '../../components/CardComponents/CardWrapper/CardWrapper';
import AddPostButton from '../../components/AddPostButton/AddPostButton';

class MainPage extends React.Component {
  render() {
    const { isLoggedIn } = this.props;

    return (
      <div className="main-page">
        <Header/>
        <CardWrapper />
        { isLoggedIn ? <AddPostButton/> : null }
      </div>
    );
  }
}

const mapStateToProps = store => ({
  isLoggedIn: store.app.isLoggedIn,
});

export default connect(mapStateToProps)(MainPage);
