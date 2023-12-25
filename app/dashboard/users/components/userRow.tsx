import React from "react";
interface props {
  user: {
    id: number;
    userName: string;
    email: string;
    type: string;
  };
}

const UserRow = ({ user }: props) => {
  return (
    <>
      {" "}
      <tr className=" animation bg-cardbg border h-16 text-neutral-400">
        <td>{user.id}</td>
        <td>{user.userName}</td>
        <td>{user.email}</td>
        <td>{user.type}</td>
      </tr>
    </>
  );
};

export default UserRow;
