import React from 'react'

function UserProfile(props) {
  return (
    <div>
      <div>
        <h2>{props.name}</h2>
        <p>Age: {props.age}</p>
        <p>Bio: {props.bio}</p>
      </div>
    </div>
  );
}

export default UserProfile
