"use client";
import React, { useEffect, useState } from "react";

type Props = {
  posts: string[];
  setPosts: React.Dispatch<React.SetStateAction<string[]>>;
};

const Input = ({ posts, setPosts }: Props) => {
  const [todo, setTodo] = useState<string>("");

  useEffect(() => {
    const saved = localStorage.getItem("posts");
    if (saved) {
      setPosts(JSON.parse(saved));
    }
  }, []);

  //setItem用
  useEffect(() => {
    const str = JSON.stringify(posts);
    localStorage.setItem("posts", str);
  }, [posts]);

  const setItems = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (todo === "") {
      return;
    } else {
      setPosts((prev) => [...prev, todo]);
      setTodo("");
    }
  };

  const clearItem = () => {
    localStorage.removeItem("posts");
    setPosts([]);
  };

  return (
    <form onSubmit={(e) => setItems(e)}>
      <input
        type="text"
        value={todo}
        className="w-full border-1 p-5 text-2xl rounded-md"
        onChange={(e) => setTodo(e.target.value)}
      />
      <div className="mt-3 flex">
        <button
          type="button"
          className="cursor-pointer px-8 py-3 w-[50%] bg-red-200 rounded-md"
          onClick={clearItem}
        >
          リセット
        </button>
        <button
          className="cursor-pointer px-8 py-3 w-[50%] bg-sky-200 rounded-md"
          type="submit"
        >
          追加
        </button>
      </div>
    </form>
  );
};

export default Input;
