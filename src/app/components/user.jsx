import React from "react";
import Bookmark from "./bookmark";
import Qualitie from "./qualitie";
import PropTypes from "prop-types";

function User(props) {
  return (
    <tr>
      <td>{props.user.name}</td>
      <td>
        <Qualitie qualities={props.user.qualities}></Qualitie>
      </td>
      <td>{props.user.profession.name}</td>
      <td>{props.user.completedMeetings}</td>
      <td>{props.user.rate} /5</td>
      <td>
        <Bookmark
          handleFavorite={props.onFavorite}
          status={props.user.bookmark}
          id={props.user._id}
        ></Bookmark>
      </td>
      <td>
        <button
          onClick={() => props.onDelete(props.user._id)}
          className="btn btn-danger"
        >
          delete
        </button>
      </td>
    </tr>
  );
}

User.propTypes = {
  user: PropTypes.object.isRequired,
  onFavorite: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default User;
