import React from "react";
import Bookmark from "./bookmark";
import Qualitie from "./qualitie";

function User(props) {
  return (
    <>
      <td>{props.user.name}</td>
      <Qualitie qualities={props.user.qualities}></Qualitie>
      <td>{props.user.profession.name}</td>
      <td>{props.user.completedMeetings}</td>
      <td>{props.user.rate} /5</td>
      <Bookmark
        favoriteOn={props.favoriteOn}
        status={props.status}
        id={props.user._id}
      ></Bookmark>
    </>
  );
}

export default User;
