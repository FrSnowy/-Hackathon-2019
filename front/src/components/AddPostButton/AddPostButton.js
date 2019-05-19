import React from 'react';
import { Link } from 'react-router-dom';

class AddPostButton extends React.Component {
  render() {
    const { className } = this.props;
    return (
      <Link to = '/add' className = { className || 'add-new-post' }>
        <div>+</div>
      </Link>
    )
  }
}

export default AddPostButton;