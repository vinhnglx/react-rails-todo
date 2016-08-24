import ServerActions from './actions/ServerActions';
import ActionTypes from './constants';

export default {
  getAllPosts() {
    // Call Posts API
    // Push the response to ServerActions
    let xmlHttp = new XMLHttpRequest();
    let url = ActionTypes.HOST_NAME + "/v1/posts";
    let rawPosts;

    xmlHttp.onreadystatechange = () => {
      if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
        rawPosts = JSON.parse(xmlHttp.responseText);
        ServerActions.receivedPosts(rawPosts);
      }
    }

    xmlHttp.open("GET", url, true);
    xmlHttp.send();
  },

  createPost(body) {
    let xmlHttp = new XMLHttpRequest();
    let url = ActionTypes.HOST_NAME + "/v1/posts";
    let params = "body=" + body;
    let rawPost;

    xmlHttp.onreadystatechange = () => {
      if (xmlHttp.readyState == 4 && xmlHttp.status == 201) {
        rawPost = JSON.parse(xmlHttp.responseText);
        ServerActions.receivedPost(rawPost);
      }
    }

    xmlHttp.open("POST", url, true);
    xmlHttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlHttp.send(params);
  },

  deletePost(postId, postIndex) {
    console.log('id', postId);
    let xmlHttp = new XMLHttpRequest();
    let url = ActionTypes.HOST_NAME + "/v1/posts/" + postId;

    xmlHttp.onreadystatechange = () => {
      if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
        ServerActions.deletedPost(postIndex);
      }
    }

    xmlHttp.open("DELETE", url, true);
    xmlHttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlHttp.send();

  }
}
