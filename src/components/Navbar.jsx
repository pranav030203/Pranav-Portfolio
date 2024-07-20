import logo from "../assets/kevinRushLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const Navbar = () => {
  return(
   <nav className = "mb-20 flex items-center justify-between py-6">
    <div className="flex flex-shrink-0 items-center">
    <img className="mx-3" src={logo} alt="logo" style={{ width: '116.5px' }} />
    </div>
    <div className="m-8 flex items-center justify-center gap-4 text-2xl text-white">
  <a href="https://www.linkedin.com/in/pranav-phadatare-07aa53239/" target="_blank" rel="noopener noreferrer">
    <FaLinkedin />
  </a>
  <a href="https://github.com/pranav030203" target="_blank" rel="noopener noreferrer">
    <FaGithub />
  </a>
  <a href="https://www.instagram.com/p.r.a.n.a.v.03/" target="_blank" rel="noopener noreferrer">
    <FaInstagram />
  </a>
  <a href="https://api.whatsapp.com/send?phone=9226781970&text=Hi%20Pranav" target="_blank" rel="noopener noreferrer">
    <FaWhatsapp/>
  </a>
</div>
  </nav>
  );
};

export default Navbar;
