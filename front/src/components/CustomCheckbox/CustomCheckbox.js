import React from 'react';
import PropTypes from 'prop-types';

export default class CustomCheckbox extends React.Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['default', 'switch']),
  };

  render() {
    const { id, label, ...inputProps } = this.props;

    return (
      <div className="checkbox">
        <input
          type="checkbox"
          className="checkbox__input"
          ref={el => (this.selector = el)}
          id={id}
          {...inputProps}
        />
        <label className="checkbox__label" htmlFor={id}>{label}</label>
      </div>
    );
  }
}
