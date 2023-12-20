import Image from "next/image";
import Header from "./header/header";
import Router from "next/router";
import HomePage from "./home/page";

export default function Home() {
  return (
    <>
      <main>
        <HomePage />
      </main>
    </>
  );
}
