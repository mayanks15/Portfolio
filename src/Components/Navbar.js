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
    "flex font-semibold text-white items-center cursor-pointer text-2xl gap-1"
  );
  return (
   
    <div className="flex fixed z-10 backdrop-blur-sm items-center w-full pl-10 py-6">
      <div className="font-semibold text-white basis-2/5 text-3xl">MS</div>
      <div className="flex justify-evenly basis-3/5">
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
          <div className="rounded-full max-w-0 group-hover:max-w-full transition-all duration-300 h-1.5 bg-purple-500 " />
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
          <div className="rounded-full max-w-0 group-hover:max-w-full transition-all duration-300 h-1.5 bg-purple-500" />
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
          <div className="rounded-full max-w-0 group-hover:max-w-full transition-all duration-300 h-1.5 bg-purple-500" />
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
          <div className="rounded-full max-w-0 group-hover:max-w-full transition-all duration-300 h-1.5 bg-purple-500 " />
        </span>

        <span className=" rounded-full border-2 border-slate-700 bg-purple-500 pl-3 pr-3 hover:bg-purple-700 active:outline active:outline-2 active:outline-purple-500">
          <Link
            className={navButton}
            to="contact"
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
