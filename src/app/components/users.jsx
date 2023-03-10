import React, { useState, useEffect } from "react";
import { paginate } from "../utils/paginate";
import Pagination from "./pagination";
import User from "./user";
import PropTypes from "prop-types";
import GroupList from "./groupList";
import API from "../api/index";
import SearchStatus from "./searchStatus";
import _ from "lodash";

const Users = (props) => {
  const pageSize = 2;

  const [currentPage, setCurrentPage] = useState(1);
  const [professions, setProfessions] = useState();
  const [selectedProf, setSelectedProf] = useState();

  useEffect(() => {
    API.professions.fetchAll().then((data) => setProfessions(data));
  }, []);
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedProf]);
  
  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex);
  };
  const handleProfessionsSelect = (item) => {
    setSelectedProf(item);
  };
  const filteredUsers = selectedProf
    ? props.users.filter(
        (user) => _.isEqual(user.profession, selectedProf) === true
      )
    : props.users;
  const count = filteredUsers.length;
  const userCrop = paginate(filteredUsers, currentPage, pageSize);
  const clearFilter = () => {
    setSelectedProf();
  };
  return (
    <div className="d-flex">
      {professions && (
        <div className="d-flex flex-column flex-shrink-0 p-3">
          <GroupList
            selectedItem={selectedProf}
            items={professions}
            onItemSelect={handleProfessionsSelect}
          />
          <button className="btn btn-secondary mt-2" onClick={clearFilter}>
            Сбросить фильтр
          </button>
        </div>
      )}
      <div className="d-dlex flex-column">
        <SearchStatus length={count}></SearchStatus>
        {count > 0 && (
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
              {userCrop.map((user) => (
                <User
                  key={user._id}
                  user={user}
                  onFavorite={props.onFavorite}
                  onDelete={props.onDelete}
                ></User>
              ))}
            </tbody>
          </table>
        )}
        <div className="d-flex justify-content-center">
          <Pagination
            itemsCount={count}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          ></Pagination>
        </div>
      </div>
    </div>
  );
};

Users.propTypes = {
  users: PropTypes.array.isRequired,
  statusArr: PropTypes.array,
  onDelete: PropTypes.func.isRequired,
  onFavorite: PropTypes.func.isRequired,
};

export default Users;
