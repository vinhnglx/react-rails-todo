import AppDispatcher from '../dispatcher';
import ActionTypes from '../constants';
import AppEventEmitter from './AppEventEmitter';

let _posts = [];

class PostEventEmitter extends AppEventEmitter {
  getPosts() {
    return _posts;
  }
}

let PostStore = new PostEventEmitter();

AppDispatcher.register( action => {
  if (action.actionType == ActionTypes.RECEIVED_POSTS) {
    _posts = action.rawPosts;
    PostStore.emit('CHANGE');
  } else if (action.actionType == ActionTypes.RECEIVED_POST) {
    // Add new rawPost to _posts and returns new length of _posts
    _posts.unshift(action.rawPost);
    PostStore.emit('CHANGE');
  } else if (action.actionType == ActionTypes.DELETED_POST) {
    _posts.splice(action.postIndex, 1)
    PostStore.emit('CHANGE');
  }
});

export default PostStore;

