import React from 'react';

export default class CommentForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      textFieldValue: '',
    };

    this.textField = React.createRef();
  }

  textChangeHandler = event => {
    const that = this;

    if (event.target.value.length >= 2000) return;

    this.setState({ textFieldValue: event.target.value.trim() }, that.adjustHeight);
  };

  adjustHeight = () => {
    const textField = this.textField.current;

    textField.style.height = 'inherit';
    textField.style.height = `${textField.scrollHeight}px`;

    if (textField.scrollHeight > 150) {
      textField.style.overflowY = 'scroll';
      textField.scrollTop = textField.scrollHeight;
    } else {
      textField.style.overflowY = 'hidden';
    }
  };

  sendMessage = () => {
    const textField = this.textField.current;

    if (!this.state.textFieldValue.length) return;

    // где-то тут надо отправить сообщение
    //this.props.onSend({ text: this.state.textBoxValue });

    this.setState({ textBoxValue: '' });
    textField.style.height = '42px';
    textField.style.overflowY = 'hidden';
  };


  render() {
    const { textFieldValue } = this.state;
    const hasValue = !!textFieldValue.trim().length;

    return (
      <div className="comment-form">
        <img className="user-avatar" src="https://oss.adm.ntu.edu.sg/a150018/wp-content/uploads/sites/289/2016/02/cat1_1.png" alt="Аватар"/>
        <textarea
          className={`comment-textfield ${hasValue ? 'active' : ''}`}
          ref={this.textField}
          rows='1'
          placeholder='Написать комментарий…'
          onChange={this.textChangeHandler}
        />
        <div className={`send-comment ${hasValue ? 'active' : ''}`} onClick={this.sendMessage}/>
      </div>
    );
  }
};
