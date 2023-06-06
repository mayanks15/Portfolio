import { GiHand } from "react-icons/gi";
import Typewriter from "typewriter-effect";
import coder from "../Images/coding3.png";
import { AiFillInstagram, AiFillGithub, AiFillLinkedin } from "react-icons/ai";
function Home() {
  return (
    <div className="relative  h-full">
      <div className="relative flex pt-40" id="home">
        <div className="flex ml-28 mt-8 ">
          <div className="flex flex-col items-center">
            <div className="w-4 h-4 rounded-full bg-purple-500" />
            <div className="w-1 h-56 bg-gradient-to-b from-purple-500" />
          </div>
          <div className=" space-y-10">
            <h1 className="text-white flex items-center ml-6 mt-3 text-3xl gap-2">
              Hi there!
              <GiHand />
            </h1>
            <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent ml-6 text-4xl bg-clip-text">
              I'm Mayank
            </span>
            <div className=" text-purple-500 font-mono ml-6 text-4xl">
              <Typewriter
                options={{
                  strings: [
                    "Developer",
                    "Programmer",
                    "Front-End Dev",
                    "Web3 Contributor",
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 150,
                  deleteSpeed: 60,
                }}
              />
            </div>
            <div></div>
          </div>
        </div>
        <div className="absolute -bottom-14 right-32 ">
          <img src={coder} width={350} alt="coder" />
        </div>
      </div>
      <div className="absolute  bottom-8 inset-x-0 text-center space-y-2 ">
        <div className="text-lg text-white gap-1">
          Make sure you <span className="text-purple-500">connect</span> with me
        </div>
        <div className="space-x-4 text-2xl">
          <button className="rounded-full bg-white  p-0.5 hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:shadow-md hover:shadow-pink-600">
            <AiFillInstagram />
          </button>
          <button className="rounded-full bg-white text-purple-900 p-0.5  hover:text-black hover:shadow-md hover:shadow-black">
            <AiFillGithub />
          </button>
          <button className="rounded-full bg-white text-purple-900 p-0.5  hover:text-blue-900 hover:shadow-md hover:shadow-blue-700">
            <AiFillLinkedin />
          </button>
        </div>
      </div>
    </div>
  );
}
export default Home;

/*

*/
