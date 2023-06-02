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
    "flex items-center font-semibold text-white text-xs gap-1"
  );
  return (
    <div className=" flex p-3  fixed z-10 backdrop-blur-sm">
      <div className="items-center  font-semibold text-white text-sm ">MS</div>
      <div className="flex items-center ml-80">
        <span className="group transition duration-300 mr-12">
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
          <div className=" max-w-0 group-hover:max-w-full transition-all duration-300 h-1 bg-purple-500 rounded " />
        </span>

        <span className="group transition duration-300 mr-12">
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
          <div className="max-w-0 group-hover:max-w-full transition-all duration-300 h-1 bg-purple-500 rounded" />
        </span>

        <span className="group transition duration-300 mr-12">
          <Link
            className={navButton}
            to="about"
            spy={true}
            smooth={true}
            duration={500}
          >
            <BiNetworkChart />
            Work
          </Link>
          <div className="max-w-0 group-hover:max-w-full transition-all duration-300 h-1 bg-purple-500 rounded" />
        </span>

        <span className="group transition duration-300 mr-12">
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
          <div className="max-w-0 group-hover:max-w-full transition-all duration-300 h-1 bg-purple-500 rounded" />
        </span>

        <span className=" ml-4 p-1 rounded bg-purple-900 mr-12">
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
