import React from 'react';

class TabButton extends React.Component {
  constructor(props) {
    super(props);

    !props.content && console.warn('Tab button without content');
  }

  render() {
    const { className, content, isSelected } = this.props;
    return (
      <div className = {`${className || 'tab-button'} ${isSelected ? 'selected' : 'active'}`}>
        <span>{ content } </span>
      </div>
    )
  }
}

export default TabButton;