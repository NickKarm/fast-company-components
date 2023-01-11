import React, { useState } from "react";
import API from "./app/api/index";
import Users from "./app/components/users";
import SearchStatus from "./app/components/searchStatus";

function App() {
  const [users, setUsers] = useState(API.users.fetchAll());

  const handleDelete = (userId) => {
    setUsers(users.filter((user) => user._id !== userId));
  };

  const handleFavorite = (userId) => {
    setUsers(
      users.map((user) => {
        if (userId === user._id) {
          return { ...user, bookmark: !user.bookmark };
        }
        return user;
      })
    );
  };

  return (
    <>
      <SearchStatus length={users.length}></SearchStatus>
      <Users
        users={users}
        onDelete={handleDelete}
        onFavorite={handleFavorite}
      ></Users>
    </>
  );
}
export default App;
