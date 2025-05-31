"use client";

import { useState } from "react";
import Input from "./components/Input";
import List from "./components/List";

export default function Home() {
  const [posts, setPosts] = useState<string[]>([]);

  return (
    <div className="mt-[4rem] text-center">
      <h1 className="font-bold text-4xl mb-7">ToDo App</h1>
      <Input posts={posts} setPosts={setPosts} />
      <List posts={posts} setPosts={setPosts} />
    </div>
  );
}
