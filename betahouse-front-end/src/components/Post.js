import React from 'react';

export default class Post extends React.Component {
  deletePost(postId, postIndex) {
    this.props.onClick(postId, postIndex);
  }

  render() {
    let post = this.props.entry;
    let postComponent = this;

    return (
      <li className="clearfix">
        {post.content}
        <button ref="postIndex"
          onClick={postComponent.deletePost.bind(this, post.id, postComponent.props.postIndex)}
          className="remove-item btn btn-default btn-xs pull-right">
            <span className="glyphicon glyphicon-remove"></span>
        </button>
      </li>
    )
  }
}
