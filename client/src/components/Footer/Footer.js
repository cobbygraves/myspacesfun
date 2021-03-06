import React from "react";
import "./Footer.css";

const Footer = () => {
  const copyrightYear = new Date().getFullYear();
  return (
    <h5
      className="lead text-center text-muted py-3 bg-light mb-0 "
      style={{ position: "fixed", bottom: 0, width: "100%" }}
    >
      &copy;Copyright - All rights reserved {copyrightYear}
    </h5>
  );
};

export default Footer;
