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
}
