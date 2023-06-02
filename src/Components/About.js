
function About() {
  return (
    <div className="flex  pt-12" id="about">
      <div className=" w-1/2">
        <div className="text-white text-3xl ml-16 font-roboto ">About Me.</div>
        <div className="text-white ml-16 font-raleway">
          Get to <span className="text-purple-500">Know </span>me
        </div>
        <div className="text-white ml-16 mt-8 text-xs space-y-6">
          <div className="mt-2 font-playfair">
            Hello, everyone! I'm Mayank Sharma, a passionate computer science
            student with a keen interest in Front-End Development and Blockchain
            Technology.
          </div>
          <div className="mt-2 font-playfair">
            With a passion for technology, I've honed my skills in creating
            captivating user interfaces using{" "}
            <span className="text-orange-600">HTML</span>,
            <span className="text-blue-500">CSS</span> , and{" "}
            <span className="text-yellow-400"> JavaScript</span>, while
            harnessing the power of{" "}
            <span className="bg-gradient-to-r from-blue-500 to-slate-200 text-transparent bg-clip-text">
              React.js
            </span>{" "}
            for dynamic web applications.
          </div>
          <div className="mt-2 font-playfair">
            Moreover, I've delved into the exciting world of{" "}
            <span className="bg-gradient-to-r from-emerald-500 via-green-400 to-yellow-400 text-transparent bg-clip-text">
              smart contracts
            </span>
            , developing expertise in creating and deploying them for
            decentralized applications. By combining front-end mastery with
            smart contract integration, I aim to build innovative applications
            that redefine trust and transparency.
          </div>
          <div className="mt-2 font-playfair">
            I'm thrilled to be part of the dynamic community of computer science
            enthusiasts, developers, and blockchain innovators.{" "}
          </div>
        </div>
      </div>
      {/* <div className=' w-64 border-2 rounded-full h-64 overflow-hidden'>
        <img src={me}/>
      </div> */}
    </div>
  );
}
export default About;
