import React from "react";

function Qualitie(props) {
  return (
    <td>
      {props.qualities.map((item) => (
        <span className={"badge m-1 bg-" + item.color} key={item._id}>
          {item.name}
        </span>
      ))}
    </td>
  );
}

export default Qualitie;
