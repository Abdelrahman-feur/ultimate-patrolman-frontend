import Link from "next/link";
import React from "react";
import back from "@/public/back.svg";
interface myProps {
  company: {
    id: number;
    companyName: string;
    ContactPerson: string;
    email: string;
    value: string;
  };
  onRemoveCompany: any;
}

const FailedAccount = ({ company, onRemoveCompany }: myProps) => {
  return (
    <>
      <tr className="bg-cardbg border h-16 text-neutral-400">
        <td>{company.id}</td>
        <td>{company.companyName}</td>
        <td>{company.ContactPerson}</td>
        <td>{company.email}</td>
        <td className="text-white">{company.value}</td>
        <td>
          {" "}
          <details className="dropdown hover:bg-none w-full">
            <summary className="m-1 btn bg-cardbg border-none hover:bg-cardbg">
              <svg
                width="4"
                height="16"
                viewBox="0 0 4 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 4C3.1 4 4 3.1 4 2C4 0.9 3.1 0 2 0C0.9 0 0 0.9 0 2C0 3.1 0.9 4 2 4ZM2 6C0.9 6 0 6.9 0 8C0 9.1 0.9 10 2 10C3.1 10 4 9.1 4 8C4 6.9 3.1 6 2 6ZM2 12C0.9 12 0 12.9 0 14C0 15.1 0.9 16 2 16C3.1 16 4 15.1 4 14C4 12.9 3.1 12 2 12Z"
                  fill="#A7A7A7"
                />
              </svg>
            </summary>
            <ul className="text-btn-primary p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-full">
              <li className="">
                <Link href={"#"}>Send Email</Link>
              </li>
              <li>
                <Link
                  href={{
                    pathname: `/dashboard/failed-payments/payment-history/company}`,
                    query: { id: `${company.id}` },
                  }}
                >
                  History Payment
                </Link>
              </li>
              <li>
                <Link
                  href={"#"}
                  onClick={() => onRemoveCompany(company.id)}
                  className="text-red"
                >
                  Remove
                </Link>
              </li>
            </ul>
          </details>
        </td>
      </tr>
    </>
  );
};

export default FailedAccount;
