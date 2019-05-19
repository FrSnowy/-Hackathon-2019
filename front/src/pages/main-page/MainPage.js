import React from 'react';
import { connect } from 'react-redux';
import Header from '../../blocks/Header/Header';
import CardWrapper from '../../components/CardComponents/CardWrapper/CardWrapper';
import AddPostButton from '../../components/AddPostButton/AddPostButton';

class MainPage extends React.Component {
  render() {
    const { token } = this.props;

    return (
      <div className="main-page">
        <Header/>
        <CardWrapper />
        { token !== null ? <AddPostButton/> : null }
      </div>
    );
  }
}

const mapStateToProps = store => ({
  token: store.app.token,
});

export default connect(mapStateToProps)(MainPage);
