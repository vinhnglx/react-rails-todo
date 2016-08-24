import React from 'react';
import PostActions from '../actions/PostActions';

export default class PostForm extends React.Component {
  createPost(event) {
    event.preventDefault();
    PostActions.createPost(this.refs.postArea.value);
    this.refs.postArea.value = '';
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-6 col-md-offset-3">
          <div className="form-group">
            <form role="form" onSubmit={this.createPost.bind(this)}>
              <div className="input-field">
                <input type="text" className="form-control" placeholder="Your Task" ref="postArea" />
              </div>
              <br/>
              <button type="submit" className="btn btn-primary">Create Post</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}
