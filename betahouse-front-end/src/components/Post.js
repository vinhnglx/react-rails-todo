import React from 'react';

export default class Post extends React.Component {
  render() {
    let post = this.props.entry;

    return (
      <div>
        <p>{post.content} - {post.created_at}</p>
      </div>
    )
  }
}
