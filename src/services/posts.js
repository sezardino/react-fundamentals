import axios from "axios";

export class PostsService {
  static async getAllPosts(limit, page) {
    const response = await axios("https://jsonplaceholder.typicode.com/posts", {
      params: {
        _limit: limit,
        _page: page,
      },
    });

    return {
      data: response.data,
      totalCount: response.headers["x-total-count"],
    };
  }

  static async getPostById(id) {
    const response = await axios(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );

    return response.data;
  }

  static async getCommentsByPostId(id) {
    const response = await axios(
      `https://jsonplaceholder.typicode.com/posts/${id}/comments`
    );

    return response.data;
  }
}
