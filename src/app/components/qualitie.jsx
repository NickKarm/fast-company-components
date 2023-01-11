import React from "react";
import PropTypes from "prop-types";

function Qualitie(props) {
  return (
    <>
      {props.qualities.map((item) => (
        <span className={"badge m-1 bg-" + item.color} key={item._id}>
          {item.name}
        </span>
      ))}
    </>
  );
}

Qualitie.propTypes = { qualities: PropTypes.array.isRequired };

export default Qualitie;
