import React from "react";

const UpperFooter = () => {
  return (
    <footer className="footer font-Poppins  p-16 bg-footer-bg text-white">
      <nav className="w-64">
        <header className="mb-2 footer-header text-white ">
          Ultimate Patrolman
        </header>
        <p className="footer-text">
          An online platform which provides business with a simple Way to
          implement and deliver safe working polices{" "}
        </p>
      </nav>
      <nav>
        <header className="mb-2 footer-header text-white">Company</header>
        <a className="link link-hover footer-text">About Us</a>
        <a className="link link-hover footer-text">Our Work</a>
        <a className="link link-hover footer-text">FAQs</a>
        <a className="link link-hover footer-text">Solutions</a>
      </nav>
      <nav>
        <header className="mb-2 footer-header text-white">Support</header>
        <a className="link link-hover footer-text">Privacy Policy</a>
        <a className="link link-hover footer-text">Terms Of Use</a>
        <a className="link link-hover footer-text">Buy and Sell</a>
        <a className="link link-hover footer-text">Report a Problem</a>
        <a className="link link-hover footer-text">Contact Us</a>
      </nav>
      <nav>
        <header className="mb-2 footer-header text-white">Contac Us</header>
        <p className=" footer-text">Madani ave , Block 15 </p>
        <p className=" footer-text">NSW ,1212</p>
        <a className="link link-hover footer-text underline">info@whs.com</a>
        <p className="footer-text">+8802-555662000</p>
      </nav>
    </footer>
  );
};

export default UpperFooter;
