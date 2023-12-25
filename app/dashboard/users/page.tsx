"use client";
import React, { useState } from "react";
import UserRow from "./components/userRow";

const Users = () => {
  const [users, setUsers] = useState([
    {
      id: 11,
      userName: "ay kalam",
      email: "khalid@ayhaga.com",
      type: "admin",
    },
    {
      id: 12,
      userName: "aykalam2",
      email: "khalid2@ayhaga.com",
      type: "client",
    },
    {
      id: 13,
      userName: "aykalam3",
      email: "khalid3@ayhaga.com",
      type: "admin",
    },
    {
      id: 14,
      userName: "aykalam4",
      email: "khalid4@ayhaga.com",
      type: "client",
    },
    {
      id: 15,
      userName: "aykalam5",
      email: "khalid5@ayhaga.com",
      type: "client",
    },
  ]);
  return (
    <>
      <div className=" pt-4 font-Poppins text-4xl text-white text-center font-semibold">
        List of Users
      </div>
      <table className="w-full mt-10 border-separate border-spacing-y-5  text-center max-w-full">
        <thead>
          <tr className="text-white text-lg font-normal leading-6 tracking-wide">
            <th>Id</th>
            <th>User Name</th>
            <th>E-mail</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <UserRow key={user.id} user={user} />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Users;
