import React from "react";
import EmployeeCard from "./components/employeeCard";

const Employess = () => {
  return (
    <>
      <h2 className="text-white text-3xl font-semibold leading-8 tracking-wide text-center mt-6">
        Our Employees
      </h2>
      <p className="text-xl  mt-8 text-center font-normal leading-8 tracking-wide text-neutral-500">
        Admin can manage our customers ‘s access
      </p>
      <div className=" flex flex-col space-y-4 sm:flex-row sm:space-y-0 flex-wrap items-center  justify-center space-x-0  sm:space-x-4 m-auto ">
        <div>
          <EmployeeCard myLink={"#"} department={"Support"} />
        </div>
        <div>
          <EmployeeCard myLink={"#"} department={"Data Sales"} />
        </div>
        <div>
          <EmployeeCard myLink={"#"} department={"Developers"} />
        </div>
      </div>
    </>
  );
};

export default Employess;
