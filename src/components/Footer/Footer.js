import React from "react";
import "./Footer.css";
import fb from "../../Images/fb.png";
import ins from "../../Images/insta.png";
import tw from "../../Images/twitter.png";

const social = [
  { name: "Facebook", url: "", logo: `${fb}` },
  { name: "instagram", url: "", logo: `${ins}` },
  { name: "Twitter", url: "", logo: `${tw}` },
];

const Footer = () => {
  return (
    <div className="footer mt-5">
      <footer>
        <div>
          <p className="text-center pt-5">
            Booking.com is part of Booking Holdings Inc.
            <br /> the world leader in online travel and related services.
          </p>
          <div className="social">
            {social.map((social) => (
              <a href={social.url} className="social-link">
                <img src={social.logo} alt={social.name} srcset="" />
              </a>
            ))}
          </div>
        </div>
        <p className="text-center mt-3 pb-4">
          Copyright &copy; 2021 All Rights Reserved.
        </p>
      </footer>
    </div>
  );
};

export default Footer;
