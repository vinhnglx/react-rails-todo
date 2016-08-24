import React from 'react';
import PostStore from '../stores/PostStore';
import PostsList from './PostsList';
import PostForm from './PostForm';

import PostActions from '../actions/PostActions';

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      postsList: PostStore.getPosts()
    }
    this._onChange = this._onChange.bind(this);
  }

  componentDidMount() {
    PostActions.getAllPosts();
    PostStore.addChangeListener(this._onChange);
  }

  componentWillUnmount() {
    PostStore.removeChangeListener(this._onChange);
  }

  _onChange() {
    this.setState({
      postsList: PostStore.getPosts()
    });
  }

  render() {
    return (
      <div>
        <PostForm />
        <PostsList posts={this.state.postsList} />
      </div>
    )
  }
}
