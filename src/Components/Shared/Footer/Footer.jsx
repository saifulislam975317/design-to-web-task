import footerLogo from "../../../assets/software.png";
import { CiFacebook } from "react-icons/ci";
import { AiOutlineInstagram } from "react-icons/ai";
const Footer = () => {
  return (
    <div className=" text-white footerBg ">
      <footer className="footer p-10 ">
        <aside>
          <img className="w-[70px] h-[70px]" src={footerLogo} alt="" />
          <p>
            India's first platform dedicated to <br /> simplifying partner
            search
          </p>
        </aside>
        <nav>
          <header className="text-[14px] font-bold">COMPANY</header>
          <a className="link link-hover">About</a>
          <a className="link link-hover">Pricing</a>
          <a className="link link-hover">Careers</a>
        </nav>
        <nav>
          <header className="text-[14px] font-bold">SOLUTIONS</header>
          <a className="link link-hover">Search</a>
          <a className="link link-hover">Connect</a>
          <a className="link link-hover">Research</a>
          <a className="link link-hover">Academy</a>
        </nav>
        <nav>
          <header className="text-[14px] font-bold">RESOURCES</header>
          <a className="link link-hover">Blogs</a>
          <a className="link link-hover">Forms</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
        <nav>
          <header className="text-[14px] font-bold">SUPPORT</header>
          <a className="link link-hover">Help</a>
          <a className="link link-hover">Contact Us</a>
        </nav>
        <nav>
          <header className="text-[14px] font-bold"> LEGAL</header>
          <a className="link link-hover">Privacy</a>
          <a className="link link-hover">Terms</a>
          <a className="link link-hover">Accessibility</a>
        </nav>
      </footer>
      <div className="footerText">
        <p className="text-[14px] px-[38px] pb-4 ">
          Sambhaji Nagar, No2, St. Antony Road, Chembur, Mumbai - 400071,
          Maharashtra
        </p>
        <div>
          <CiFacebook />
          <AiOutlineInstagram />
        </div>
      </div>
    </div>
  );
};

export default Footer;
