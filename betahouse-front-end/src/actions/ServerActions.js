import AppDispatcher from '../dispatcher';
import ActionTypes from '../constants';

export default {
  receivedPosts(rawPosts) {
    AppDispatcher.dispatch({
      actionType: ActionTypes.RECEIVED_POSTS,
      rawPosts
    })
  },

  receivedPost(rawPost) {
    AppDispatcher.dispatch({
      actionType: ActionTypes.RECEIVED_POST,
      rawPost
    })
  },

  deletedPost(postIndex) {
    AppDispatcher.dispatch({
      actionType: ActionTypes.DELETED_POST,
      postIndex
    })
  }
}
