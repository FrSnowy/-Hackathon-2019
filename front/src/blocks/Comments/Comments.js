import React from 'react';
import CommentForm from '../../components/CommentForm/CommentForm';
import Comment from '../../components/Comment/Comment';

const comments = [
  {
    "id": 1,
    "author": "Весемир",
    "url": "",
    "text": "Недавно знакомый рассказал, что помимо того, что в его дворе мусорные баки заполнены уже целых 2 недели, вокруг мусорных баков очень много мусора. На фотографиях можете увидеть сколько мусора там скопилось. Предлагаю встретиться и помочь жителям этого двора.",
    "date": "Sun May 18 2019 03:53:17 GMT+0500"
  },
  {
    "id": 2,
    "author": "Весемир",
    "url": "",
    "text": "Недавно знакомый рассказал, что помимо того, что в его дворе мусорные баки заполнены уже целых 2 недели, вокруг мусорных баков очень много мусора. На фотографиях можете увидеть сколько мусора там скопилось. Предлагаю встретиться и помочь жителям этого двора.",
    "date": "Sun May 18 2019 03:53:17 GMT+0500"
  }
];

export default class Comments extends React.Component {
  render() {


    return (
      <div className="comments">
        <div className="comments-title">Все комментарии</div>
        <CommentForm />
        {comments.length && comments.map(el => <Comment data={el} key={el.id}/>)}
      </div>
    );
  }
};
