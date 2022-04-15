import axios from "axios";

export class PostsService {
  static async getAllPosts() {
    try {
      const response = await axios(
        "https://jsonplaceholder.typicode.com/posts"
      );

      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
}
