import logo from "../../../assets/software.png";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li tabIndex={0}>
              <details>
                <summary>Solutions</summary>
                <ul className="p-2">
                  <li>
                    <a>Solution 1</a>
                  </li>
                  <li>
                    <a>Solution 2</a>
                  </li>
                </ul>
              </details>
            </li>
            <li tabIndex={0}>
              <details>
                <summary>Features</summary>
                <ul className="p-2">
                  <li>
                    <a>Feature 1</a>
                  </li>
                  <li>
                    <a>Feature 2</a>
                  </li>
                </ul>
              </details>
            </li>
            <li tabIndex={0}>
              <details>
                <summary>Blogs</summary>
                <ul className="p-2">
                  <li>
                    <a>Blog 1</a>
                  </li>
                  <li>
                    <a>Blog 2</a>
                  </li>
                </ul>
              </details>
            </li>
            <li tabIndex={0}>
              <details>
                <summary>About</summary>
                <ul className="p-2">
                  <li>
                    <a>About 1</a>
                  </li>
                  <li>
                    <a>About 2</a>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
        <img className="w-[50px] h-[50px]" src={logo} alt="" />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li tabIndex={0}>
            <details>
              <summary>Solutions</summary>
              <ul className="p-2">
                <li>
                  <a>Solution 1</a>
                </li>
                <li>
                  <a>Solution 2</a>
                </li>
              </ul>
            </details>
          </li>
          <li tabIndex={0}>
            <details>
              <summary>Features</summary>
              <ul className="p-2">
                <li>
                  <a>Feature 1</a>
                </li>
                <li>
                  <a>Feature 2</a>
                </li>
              </ul>
            </details>
          </li>
          <li tabIndex={0}>
            <details>
              <summary>Blogs</summary>
              <ul className="p-2">
                <li>
                  <a>Blog 1</a>
                </li>
                <li>
                  <a>Blog 2</a>
                </li>
              </ul>
            </details>
          </li>
          <li tabIndex={0}>
            <details>
              <summary>About</summary>
              <ul className="p-2">
                <li>
                  <a>About 1</a>
                </li>
                <li>
                  <a>About 2</a>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
      <div className="navbar-end flex gap-4">
        <button className="btn btn-outline btn-accent">Login</button>
        <button className="btn btn-active btn-accent">Register</button>
      </div>
    </div>
  );
};

export default Navbar;
