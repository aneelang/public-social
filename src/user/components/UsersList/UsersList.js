import React from "react";

import "./UsersList.css";
import UserItem from "../UserItem/UserItem";
import Card from "../../../shared/Components/UIElements/Card";

const UsersList = props => {
  if (props.items.length === 0) {
    return (
      <div className="center">
        <Card>
          <h2>No users found.</h2>
        </Card>
      </div>
    );
  }

  return (
    <ul className="users-list">
      {props.items.map(user => (
        <UserItem
          key={user.id}
          id={user.id}
          image={user.image}
          name={user.name}
          placeCount={user.places.length}
        />
      ))}
    </ul>
  );
};

export default UsersList;

// const UsersList = (props) => {
//   if (props.items.length === 0) {
//     return (
//       <div className="center">
//         <h2>No users found.</h2>
//       </div>
//     );
//   }

//   return (
//     <ul className="users-list">
//       {props.items.map((user) => {
//         return (
//           <UserItem
//             key={user.id}
//             id={user.id}
//             image={user.image}
//             name={user.name}
//             placeCount={user.places.length}
//           />
//         );
//       })}
//     </ul>
//   );
// };

// export default UsersList;
