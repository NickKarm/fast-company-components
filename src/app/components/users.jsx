import React from "react";
import User from "./user";

const Users = (props) => {
  return (
    <>
      {props.users.length > 0 && (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Имя</th>
              <th scope="col">Качества</th>
              <th scope="col">Профессия</th>
              <th scope="col">Встретился, раз</th>
              <th scope="col">Оценка</th>
              <th scope="col">Избранное</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {props.users.map((user, idx) => (
              <tr key={user._id}>
                <User
                  user={user}
                  favoriteOn={props.onFavorite}
                  status={props.statusArr[idx].favour}
                ></User>

                <td>
                  <button
                    onClick={() => props.onDelete(user._id)}
                    className="btn btn-danger"
                  >
                    delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default Users;
