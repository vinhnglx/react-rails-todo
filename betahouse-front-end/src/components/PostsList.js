import React from 'react';
import Post from './Post';
import PostActions from '../actions/PostActions';
import PostStore from '../stores/PostStore';

export default class PostsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { postsList: null };
    this._onChange = this._onChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    let nextPosts = nextProps.posts;

    this.setState({
      postsList: nextPosts
    });
  }

  deletePost(postId, postIndex) {
    PostActions.deletePost(postId, postIndex);
    PostStore.addChangeListener(this._onChange);
  }

  _onChange() {
    this.setState({
      postsList: PostStore.getPosts()
    });
  }

  render() {
    let listPosts = this.state.postsList;
    let entries;
    let postsListComponent = this;

    if (listPosts) {
      entries = listPosts.map(function(post, index) {
        return (
          <Post entry={post} postIndex={index} key={index} onClick={postsListComponent.deletePost.bind(postsListComponent)} />
        )
      });
    } else {
      entries = null;
    }

    return (
      <div className="row">
        <div className="col-md-6 col-md-offset-3">
          <ul className="list-unstyled">
            {entries}
          </ul>
        </div>
      </div>
    )
  }
}
