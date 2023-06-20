import axios from "axios";

export default class PostService {
  static async getAll() {
    try {
      const resp = await axios.get("https://jsonplaceholder.typicode.com/posts");
      return resp.data;
    } catch (e) {
      console.log(e);
    }
  }
}