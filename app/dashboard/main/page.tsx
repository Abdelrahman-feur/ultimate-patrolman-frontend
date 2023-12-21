import React from "react";
import classes from "./main.module.css";
import ClientDashboard from "./clientDashboard";
import SuperAdminDashboard from "./superAdminDashboard";
const MainDash = () => {
  return (
    <>
      <div
        className={` font-Poppins text-3xl font-semibold leading-10 text-white`}
      >
        Dashoard
      </div>
      {/* <ClientDashboard /> */}
      <SuperAdminDashboard />
    </>
  );
};

export default MainDash;
