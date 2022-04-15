import { useState } from "react";
import { Input, Select } from "./ui";

export const PostsFilter = (props) => {
  const { changeSort, sort, search, changeSearch } = props;

  const selectProps = {
    name: "sort-by",
    defaultValue: "Sort By",
    options: [
      { value: "title", label: "Title" },
      { value: "body", label: "Body" },
    ],
  };

  return (
    <div className="posts-filter">
      <Select
        {...selectProps}
        value={sort}
        onChange={(evt) => changeSort(evt.target.value)}
      />
      <Input
        name="search"
        value={search}
        placeholder="Search Posts"
        onChange={(evt) => changeSearch(evt.target.value)}
      />
    </div>
  );
};
