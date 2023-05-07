import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <h3 className="text-center">All Right Reserved &copy; himanshucode 1352</h3>
      <p className=" text-center mt-3">
      <Link to ='/about'>About Us|</Link>
      <Link to ='/contact'>Contact Us|</Link>
      <Link to ='/policy'>Terms And Conditions|</Link>
      </p>
    </div>
  );
};

export default Footer;
