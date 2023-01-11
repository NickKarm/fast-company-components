import React from "react";
import PropTypes from "prop-types";

function Bookmark(props) {
  return (
    <>
      <button
        onClick={() => {
          props.handleFavorite(props.id);
        }}
      >
        <i
          className={
            props.status === true ? "bi bi-bookmarks-fill" : "bi bi-bookmarks"
          }
        ></i>
      </button>
    </>
  );
}

Bookmark.propTypes = {
  handleFavorite: PropTypes.func.isRequired,
  status: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
};

export default Bookmark;
