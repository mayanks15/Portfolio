import { GiHand } from "react-icons/gi";
import Typewriter from "typewriter-effect";
import coder from '../Images/coding3.png'
import { AiFillInstagram,AiFillGithub,AiFillLinkedin } from "react-icons/ai";
function Home() {

  return (
    <div className="flex static pt-12" id="home">
      <div className="flex ml-24 mt-24">
        <div className="flex flex-col items-center">
          <div className="w-4 h-4 rounded-full bg-purple-500" />
          <div className="w-1 h-48 bg-gradient-to-b from-purple-500" />
        </div>
        <div className="ml-6">
          <h1 className="text-white text-2xl flex items-center gap-4">
            Hi there!
            <GiHand />
          </h1>
          <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text text-3xl ">
            I'm Mayank
          </span>
          <div className="text-2xl text-purple-500 mt-8 font-mono">
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
                deleteSpeed: 60
              }}
            />
          </div>
        <div>
          
        </div>
        <div className="absolute bottom-8 left-80">
          <div className="flex items-center text-xs text-white gap-1">Make sure you <div className="text-purple-500 text-xs ">connect</div>with me</div>
          <div className=" mt-2 space-x-4 ml-8">
            <button className="rounded-full bg-white  p-0.5 hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 "><AiFillInstagram/></button>
            <button className="rounded-full bg-white text-purple-900 p-0.5  hover:text-black"><AiFillGithub/></button>
            <button className="rounded-full bg-white text-purple-900 p-0.5  hover:text-blue-900"><AiFillLinkedin/></button>
          </div>
        </div>
        
        
        </div>
      </div>
      <div className="absolute right-0 mt-16 mr-24"><img src={coder} width={250} alt="coder"/></div>
    </div>
  );
}
export default Home;
