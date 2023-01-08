import React from "react";

function Bookmark(props) {
  return (
    <td>
      <span>
        <i
          className={
            props.status === true ? "bi bi-bookmarks-fill" : "bi bi-bookmarks"
          }
          onClick={() => {
            props.favoriteOn(props.id);
          }}
        ></i>
      </span>
    </td>
  );
}

export default Bookmark;
