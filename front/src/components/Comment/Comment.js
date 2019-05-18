import React from 'react';

const Comment = props => {
  const {id, author, url, text, date} = props.data;
  const messageDate = new Date(date);
  const today = new Date();
  const day = messageDate.toLocaleString('ru-RU', { month: 'long', day: 'numeric' });
  const minutes = messageDate.getMinutes();
  const messageMinutes = minutes.toString().length === 1 ? `0${minutes}` : minutes;
  const time = `${messageDate.getHours()}:${messageMinutes}`;

  return (
    <div className="comment" id={id}>
      <div className="comment-author">
        <img className="comment-avatar" src={url} alt="Аватар"/>
        <div className="comment-name">{author}</div>
        <div className="comment-date">{today.getUTCDate() === messageDate.getUTCDate() ? time : day}</div>
      </div>
      <div className="comment-text">{text}</div>
    </div>
  );
};

export default Comment;
