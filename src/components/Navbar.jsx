import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "@assets/svg/site-logo.svg";
import LanguageSwitcher from "./UI/LanguageSwitcher";
import SignIn from "./UI/SingIn";
import DropdownPrograms from "./UI/DropdownPrograms";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full max-w-360 mx-auto px-4 pt-4 py-6">
      <nav className="flex justify-between items-center">
        <Link>
          <img src={logo} alt="" />
        </Link>
        <ul className="hidden md:flex gap-6 items-center">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <DropdownPrograms />
          </li>
          <li>
            <Link>Finance tools</Link>
          </li>
          <li>
            <Link>Contact</Link>
          </li>
        </ul>
        <div className="hidden md:flex gap-8 items-center">
          <LanguageSwitcher />
          <SignIn />
        </div>
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </nav>
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <ul className="flex flex-col gap-4 p-4">
            <li>
              <Link to="/" onClick={() => setIsOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <DropdownPrograms />
            </li>
            <li>
              <Link onClick={() => setIsOpen(false)}>Finance tools</Link>
            </li>
            <li>
              <Link onClick={() => setIsOpen(false)}>Contact</Link>
            </li>
            <li>
              <LanguageSwitcher />
            </li>
            <li>
              <SignIn />
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;
