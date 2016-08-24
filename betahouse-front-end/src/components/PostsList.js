import React from 'react';
import Post from './Post';

export default class PostsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { postsList: null };
  }

  componentWillReceiveProps(nextProps) {
    let nextPosts = nextProps.posts;

    this.setState({
      postsList: nextPosts
    });
  }

  render() {
    let listPosts = this.state.postsList;
    let entries;

    if (listPosts) {
      entries = listPosts.map(function(post, index) {
        return (
          <Post entry={post} key={index} />
        )
      });
    } else {
      entries = null;
    }

    console.log('entries', entries);

    return (
      <div>
        {entries}
      </div>
    )
  }
}
