import API from '../API';

export default {
  getAllPosts() {
    API.getAllPosts();
  },
  createPost(body) {
    API.createPost(body);
  },
  deletePost(id, index) {
    API.deletePost(id, index);
  }
}
