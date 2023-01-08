import React from "react";
import Bookmark from "./bookmark";

function User(props) {
    return (
        <>
            <td>{props.user.name}</td>
            <td>
                {props.user.qualities.map((item) => (
                    <span
                        className={"badge m-1 bg-" + item.color}
                        key={item._id}
                    >
                        {item.name}
                    </span>
                ))}
            </td>
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
