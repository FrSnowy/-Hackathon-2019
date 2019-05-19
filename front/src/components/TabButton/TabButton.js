import React from 'react';
import { Link } from 'react-router-dom';

class TabButton extends React.Component {
  constructor(props) {
    super(props);

    !props.content && console.warn('Tab button without content');
  }

  render() {
    const { className, content, isSelected, to } = this.props;
    return (
      <Link to = { to } className = {`${className || 'tab-button'}`}>
        <div className = {`${isSelected ? 'selected' : 'active'}`}>
          <span>{ content } </span>
        </div>
      </Link>
    )
  }
}

export default TabButton;