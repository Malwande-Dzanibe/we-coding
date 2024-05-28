import React from "react";
import Link from "next/link";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className="footer">
      <div className="link-footer-wrapper">
        <Link href={"/privacy-policy"} className="link-footer">
          <p className="p-f">Privacy Policy</p>
        </Link>{" "}
        |
        <Link href={"/about"} className="link-footer">
          <p className="p-f">About</p>
        </Link>
      </div>
      <div className="p-f2-wrapper">
        <p className="p-f2">Keep Coding</p> &copy; {year}
      </div>
    </div>
  );
};

export default Footer;
