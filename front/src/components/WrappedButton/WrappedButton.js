import React from 'react';
import Button from 'react-bootstrap/Button';
;
class WrappedButton extends React.Component {
  constructor(props) {
    super(props);

    !props.content && console.warn('Register button without content');
  }

  render() {
    const { className, content, onClick, dataMode } = this.props;
    return (
      <Button
        variant = "outline-primary"
        className = { className || 'wrapped-button' }
        onClick = { onClick || null }
        data-mode={dataMode || null}
      >
        {content}
      </Button>
    )
  }
}

export default WrappedButton;
