import React, { useState } from "react";
import API from "./app/api/index";
import Users from "./app/components/users";
import SearchStatus from "./app/components/searchStatus";

function App() {
    const [users, setUsers] = useState(API.users.fetchAll());

    let initFavorites = [{ id: "", favour: false }];
    for (let i = 0; i < users.length; i++) {
        initFavorites[i] = { id: users[i]._id, favour: false };
    }

    let [favorites, setFavorites] = useState(initFavorites);

    const handleDelete = (userId) => {
        setUsers(users.filter((user) => user._id !== userId));
        setFavorites(favorites.filter((favorite) => favorite.id !== userId));
    };

    const handleFavorite = (userId) => {
        setFavorites(
            favorites.map((favorite) => {
                if (userId === favorite.id) {
                    favorite.favour = !favorite.favour;
                }
                return favorite;
            })
        );
    };

    return (
        <>
            <SearchStatus length={users.length}></SearchStatus>
            <Users
                users={users}
                onDelete={handleDelete}
                statusArr={favorites}
                onFavorite={handleFavorite}
            ></Users>
        </>
    );
}
export default App;
