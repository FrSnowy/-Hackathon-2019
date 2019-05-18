import React from 'react';
import CommentForm from '../../components/CommentForm/CommentForm';

export default class Comments extends React.Component {
  render() {


    return (
      <div className="comments">
        <div className="comments-title">Все комментарии</div>
        <CommentForm />
      </div>
    );
  }
};
