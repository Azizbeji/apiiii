import React from "react";

function UserItem(props) {
  return (
    <div className="UserItem" onMouseOver={() => props.setUserData(props)}>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl2k67USikxPG38F6BP6QWfoGtEx26hWNiOg&usqp=CAU"
        alt="User Pic"
        width={50}
      />
      <h4>{props.name}</h4>
    </div>
  );
}

export default UserItem;
