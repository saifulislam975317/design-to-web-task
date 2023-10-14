import footerLogo from "../../../assets/software.png";
const Footer = () => {
  return (
    <footer className="footer p-10 text-white footerBg">
      <aside>
        <img className="w-[70px] h-[70px]" src={footerLogo} alt="" />
        <p>
          India's first platform dedicated to <br /> simplifying partner search
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
  );
};

export default Footer;
