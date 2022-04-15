import axios from "axios";

export class PostsService {
  static async getAllPosts() {
    const response = await axios("https://jsonplaceholder.typicode.com/posts");

    return response.data;
  }
}
