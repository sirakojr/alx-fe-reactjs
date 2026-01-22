import React from "react";
import { UserContext } from "./UserContext";
import { useContext } from "react";
function UserProfile() {
  const userData = useContext(UserContext);
  return <div>UserProfile</div>;
}

export default UserProfile;
