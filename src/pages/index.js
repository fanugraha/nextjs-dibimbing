import React from "react";
import axios from "axios";
import NavbarMe from "@/components/layout/NavbarMe";
import UserCard from "@/components/layout/UserCard";

export const getServerSideProps = async () => {
  const todoList = await axios.get("https://dummyjson.com/posts?limit=20");
  const data = await todoList.data.posts;

  const todoList2 = await axios.get("https://dummyjson.com/users?limit=0");
  const user = await todoList2.data.users;

  return { props: { data, user } };
};

export default function Home({ data, user }) {
  return (
    <div className="container">
      <NavbarMe />
      <UserCard user={user} />
    </div>
  );
}
