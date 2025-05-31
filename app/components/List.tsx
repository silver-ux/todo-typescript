import React from "react";
type Props = {
  posts: string[];
  setPosts: React.Dispatch<React.SetStateAction<string[]>>;
};

const List = ({ posts, setPosts }: Props) => {
  const delItems = (index: number) => {
    const newTasks = posts.filter((_, i) => i !== index);
    setPosts(newTasks);
  };

  return (
    <div className="w-full 800:w-[70%] mx-auto text-left">
      <ul className="text-[16px] 800:text-2xl mt-5">
        {posts.map((post, i) => (
          <li
            className=" p-5 my-2 rounded-md relative border-1 shadow-md bg-gray-50"
            key={i}
          >
            {post}
            <button
              className="absolute top-3 right-2 w-10 h-10 cursor-pointer"
              onClick={() => delItems(i)}
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
