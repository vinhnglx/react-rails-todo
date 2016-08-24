import ServerActions from './actions/ServerActions';
import ActionTypes from './constants';

export default {
  getAllPosts() {
    // Call Posts API
    // Push the response to ServerActions
    let xmlHttp = new XMLHttpRequest();
    let url = ActionTypes.HOST_NAME + "/v1/posts";
    let rawPosts;

    xmlHttp.onreadystatechange = function() {
      if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
        rawPosts = JSON.parse(xmlHttp.responseText);
        ServerActions.receivedPosts(rawPosts);
      }
    }

    xmlHttp.open("GET", url, true);
    xmlHttp.send();
  }
}
