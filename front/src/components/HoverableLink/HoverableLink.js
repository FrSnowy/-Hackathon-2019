import React from 'react';
;
class HoverableLink extends React.Component {
  constructor(props) {
    super(props);

    !props.content && console.warn('Hoverable link without content');
  }

  render() {
    const { className, content, onClick, dataMode } = this.props;
    return (
      <a className = {className || 'hoverable-link'} onClick = { onClick || null} data-mode={dataMode || null}>{content}</a>
    )
  }
}

export default HoverableLink;
