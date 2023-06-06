import html5 from "../Images/html5.png";
import css from "../Images/css.png";
import js from "../Images/js.png";
import react from "../Images/react.png";
import node from "../Images/node.png";
import cpp from "../Images/c++.png";
import solidity from "../Images/solidity.png";
import { useState } from "react";
function Skills() {
  const [active, setActive] = useState(-1);
  const skills = [
    {
      name: "HTML",
      logo: html5,
      id: 0,
      color: "red",
    },
    {
      name: "CSS",
      logo: css,
      id: 1,
      color: "blue",
    },
    {
      name: "Javascript",
      logo: js,
      id: 2,
      color: "yellow",
    },
    {
      name: "Reactjs",
      logo: react,
      id: 3,
      color: "cyan",
    },
    {
      name: "Nodejs",
      logo: node,
      id: 4,
      color: "green",
    },
    {
      name: "C++",
      logo: cpp,
      id: 5,
      color: "blue",
    },
    {
      name: "Solidity",
      logo: solidity,
      id: 6,
      color: "gray",
    },
  ];
  const renderedSkills = skills.map((skill, index) => {
    if (active === -1) {
      return (
        <img
          onMouseEnter={() => {
            setActive(skill.id);
          }}
          onMouseLeave={() => {
            setActive(-1);
          }}
          src={skill.logo}
          alt="logo"
          className="h-40 p-2 transition-all ease-in-out duration-500"
          key={index}
        />
      );
    } else if (skill.id === active) {
      return (
        <img
          onMouseEnter={() => {
            setActive(skill.id);
          }}
          onMouseLeave={() => {
            setActive(-1);
          }}
          src={skill.logo}
          alt="logo"
          className="h-40 p-0 transition-all ease-in-out duration-500"
          key={index}
        />
      );
    } else {
      if (skill.id === 6) {
        return (
          <img
            onMouseEnter={() => {
              setActive(skill.id);
            }}
            onMouseLeave={() => {
              setActive(-1);
            }}
            src={skill.logo}
            alt="logo"
            className="h-40 invert p-2 transition-all ease-in-out duration-500"
            key={index}
          />
        );
      }
      return (
        <img
          onMouseEnter={() => {
            setActive(skill.id);
          }}
          onMouseLeave={() => {
            setActive(-1);
          }}
          src={skill.logo}
          alt="logo"
          className="h-40 grayscale p-2 transition-all ease-in-out duration-500"
          key={index}
        />
      );
    }
  });
  return (
    <div className="pt-24" id="skills">
      <div className="text-white text-4xl text-center font-playfair">
        Skillset
      </div>
      <div className="text-white text-lg text-center font-raleway">
        Tools I'm<span className="text-purple-500"> proficient </span> in...
      </div>
      <div className="grid grid-cols-4 ring-2 ring-white ring-offset-2 ring-offset-purple-400 rounded-xl justify-items-center ml-32 mr-32 mt-10 p-2">
        {renderedSkills}
      </div>
    </div>
  );
}
export default Skills;
