import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineArrowUp,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <img
          src={"https://avatars.githubusercontent.com/u/79663594"}
          alt="Founder"
        />

        <h2>Shivaji Rathod</h2>
        <p>Sanguine | Astute | Ingenious</p>
      </div>

      <aside>
        <h2>Social Media</h2>

        <article>
          <a href="https://www.linkedin.com/in/shivaji-x/" target={"blank"}>
            <AiFillLinkedin />
          </a>
          <a href="https://instagram.com/shivaji_x_" target={"blank"}>
            <AiFillInstagram />
          </a>
          <a href="https://github.com/Shivaji2808" target={"blank"}>
            <AiFillGithub />
          </a>
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;
