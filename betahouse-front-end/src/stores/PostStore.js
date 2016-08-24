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
  }
});

export default PostStore;

