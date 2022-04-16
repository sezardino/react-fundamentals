import axios from "axios";
import { Post } from "../types";

export class PostsService {
  static async getAllPosts(limit: number, page: number) {
    const response = await axios.get<Post[]>(
      "https://jsonplaceholder.typicode.com/posts",
      {
        params: {
          _limit: limit,
          _page: page,
        },
      }
    );

    return {
      data: response.data,
      totalCount: response.headers["x-total-count"],
    };
  }

  static async getPostById(id: number) {
    const response = await axios.get<Post>(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );

    return response.data;
  }

  static async getCommentsByPostId(id: number) {
    const response = await axios.get<Comment[]>(
      `https://jsonplaceholder.typicode.com/posts/${id}/comments`
    );

    return response.data;
  }
}
