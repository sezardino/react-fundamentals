import { useMemo } from "react";
import { Post } from "../types";

export const usePosts = (posts: Post[], sort: keyof Post, search: string) => {
  const sortedPosts = useMemo(() => {
    if (!sort) {
      return posts;
    }

    return [...posts].sort((a, b) =>
      (a[sort] as string).localeCompare(b[sort] as string)
    );
  }, [sort, posts]);

  const filteredPosts = useMemo(() => {
    return sortedPosts.filter((post) =>
      post.title.toLowerCase().includes(search.toLocaleLowerCase())
    );
  }, [sortedPosts, search]);

  return { filteredPosts };
};
