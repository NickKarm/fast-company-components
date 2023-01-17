import React, { useState, useEffect } from "react";
import API from "./app/api/index";
import Users from "./app/components/users";

function App() {
  const [users, setUsers] = useState();
  useEffect(() => {
    API.users.fetchAll().then((data) => setUsers(data));
  }, []);

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
      {users && (
        <Users
          users={users}
          onDelete={handleDelete}
          onFavorite={handleFavorite}
        ></Users>
      )}
    </>
  );
}
export default App;
