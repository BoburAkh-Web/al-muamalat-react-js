import { Link } from "react-router-dom";
import logo from "../assets/site-logo.svg";
import LanguageSwitcher from "./UI/LanguageSwitcher";
import SignIn from "./UI/SingIn";

import Programs from "./UI/Programs";
function Navbar() {
  return (
    <div className="w-full max-w-360 mx-auto px-4 pt-4 py-6 ">
      <nav className="flex justify-between items-center">
        <Link>
          <img src={logo} alt="" />
        </Link>
        <ul className="flex gap-6 items-center">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Programs />
          </li>
          <li>
            <Link>Finance tools</Link>
          </li>
          <li>
            <Link>Contact</Link>
          </li>
        </ul>
        <div className="flex gap-8 items-center">
          <LanguageSwitcher />
          <SignIn />
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
