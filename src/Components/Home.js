import { GiHand } from "react-icons/gi";
import Typewriter from "typewriter-effect";
import coder from "../Images/coding3.png";
import { AiFillInstagram, AiFillGithub, AiFillLinkedin } from "react-icons/ai";
function Home() {
  return (
    <div className="h-full" id="home">
      <div className="relative flex pt-52" >
        <div className="flex ml-36 mt-8 ">
          <div className="flex flex-col items-center">
            <div className="w-6 h-6 rounded-full bg-purple-500" />
            <div className="w-1.5 h-72 bg-gradient-to-b from-purple-500" />
          </div>
          <div className="flex flex-col">
            <div className="text-white flex items-center ml-6 mt-3 text-4xl gap-2 basis-1/4">
              Hi there!
              <GiHand />
            </div>
            <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent ml-6 text-5xl bg-clip-text basis-1/4">
              I'm Mayank
            </div>
            <div className=" text-purple-500 font-mono ml-6 text-5xl basis-1/4 justify-center flex flex-col ">
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
        <div className="absolute right-32 ">
          <img src={coder} width={400} alt="coder" />
        </div>
      </div>
      <div className="absolute  bottom-8 inset-x-0 text-center space-y-2 ">
        <div className="text-xl text-white gap-1">
          Make sure you <span className="text-purple-500">connect</span> with me
        </div>
        <div className="space-x-4 text-2xl">
          <button
            className="rounded-full bg-white  p-0.5 hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:shadow-md hover:shadow-pink-600"
            onClick={() => {
              window.open("https://www.instagram.com/p/CyNDnS5oybL/", "_blank");
            }}
          >
            <AiFillInstagram />
          </button>
          <button
            className="rounded-full bg-white text-purple-900 p-0.5  hover:text-black hover:shadow-md hover:shadow-black"
            onClick={() => {
              window.open("https://github.com/mayanks15", "_blank");
            }}
          >
            <AiFillGithub />
          </button>
          <button
            className="rounded-full bg-white text-purple-900 p-0.5  hover:text-blue-900 hover:shadow-md hover:shadow-blue-700"
            onClick={() => {
              window.open("https://www.linkedin.com/in/mayank-sharma-b83602230/", "_blank");
            }}
          >
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
