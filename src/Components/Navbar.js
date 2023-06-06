import {
  BiHome,
  BiNetworkChart,
  BiCollection,
  BiPhoneCall,
} from "react-icons/bi";
import { RxAvatar } from "react-icons/rx";
import classNames from "classnames";
import { Link } from "react-scroll";
function Navbar() {
  const navButton = classNames(
    "flex font-semibold text-white items-center text-lg gap-1"
  );
  return (
    <div className="flex fixed z-10 backdrop-blur-sm items-center w-full pl-8 pt-4">
      <div className="font-semibold text-white text-2xl basis-3/12 ">MS</div>
      <div className="flex  basis-9/12 justify-evenly">
        <span className="group transition duration-300 ">
          <Link
            className={navButton}
            to="home"
            spy={true}
            smooth={true}
            duration={500}
          >
            <BiHome />
            Home
          </Link>
          <div className=" max-w-0 group-hover:max-w-full transition-all duration-300 h-1.5 bg-purple-500 rounded " />
        </span>

        <span className="group transition duration-300 ">
          <Link
            className={navButton}
            to="about"
            spy={true}
            smooth={true}
            duration={500}
          >
            <RxAvatar />
            About
          </Link>
          <div className="max-w-0 group-hover:max-w-full transition-all duration-300 h-1.5 bg-purple-500 rounded" />
        </span>

        <span className="group transition duration-300">
          <Link
            className={navButton}
            to="skills"
            spy={true}
            smooth={true}
            duration={500}
          >
            <BiNetworkChart />
            Skills
          </Link>
          <div className="max-w-0 group-hover:max-w-full transition-all duration-300 h-1.5 bg-purple-500 rounded" />
        </span>

        <span className="group transition duration-300">
          <Link
            className={navButton}
            to="projects"
            spy={true}
            smooth={true}
            duration={500}
          >
            <BiCollection />
            Projects
          </Link>
          <div className="max-w-0 group-hover:max-w-full transition-all duration-300 h-1.5 bg-purple-500 rounded" />
        </span>

        <span className=" rounded-md bg-purple-800 ring ring-purple-400 pl-1 pr-1">
          <Link
            className={navButton}
            to="about"
            spy={true}
            smooth={true}
            duration={500}
          >
            <BiPhoneCall />
            Contact
          </Link>
        </span>
      </div>
    </div>
  );
}
export default Navbar;
