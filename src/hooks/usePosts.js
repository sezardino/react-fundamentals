import { useMemo } from "react";

export const usePosts = (posts, sort, search) => {
  const sortedPosts = useMemo(() => {
    if (!sort) {
      return posts;
    }

    return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]));
  }, [sort, posts]);

  const filteredPosts = useMemo(() => {
    return sortedPosts.filter((post) =>
      post.title.toLowerCase().includes(search.toLocaleLowerCase())
    );
  }, [sortedPosts, search]);

  return { filteredPosts };
};
