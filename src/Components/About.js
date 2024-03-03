function About() {
  return (
    <div className="flex pt-32" id="about">
      <div className="w-5/12 ">
        <div className="text-white text-5xl ml-16 font-playfair ">About Me</div>
        <div className="text-white text-xl ml-16 mt-1 font-raleway">
          Get to <span className="text-purple-500">Know </span>me...
        </div>
        <div className="text-white ml-16 mt-12 space-y-8">
          <div className="font-Lora text-xl">
            Hello, everyone! I'm <span>Omik Parmani</span> , a passionate
            computer science student with a keen interest in Front-End
            Development and Blockchain Technology.
          </div>
          <div className="font-Lora text-xl">
            With a passion for technology, I've honed my skills in creating
            captivating user interfaces using
            <span className="text-orange-600"> HTML </span>,
            <span className="text-blue-500"> CSS </span> , and
            <span className="text-yellow-400"> JavaScript </span>, while
            harnessing the power of{" "}
            <span className="bg-gradient-to-r from-blue-500 to-slate-200 text-transparent bg-clip-text">
              React.js
            </span>{" "}
            for dynamic web applications.
          </div>
          <div className="font-Lora text-xl">
            Driven by curiosity, I'm also venturing into the exciting world of
            Blockchain, exploring its potential to revolutionize industries and
            drive innovation. Whether it's crafting elegant code or diving into
            the blockchain's decentralized future, I'm committed to pushing
            boundaries and shaping the digital world.
          </div>
          {/* <div className=" font-roboto">
            Moreover, I've delved into the exciting world of{" "}
            <span className="bg-gradient-to-r from-emerald-500 via-green-400 to-yellow-400 text-transparent bg-clip-text">
              smart contracts
            </span>
            , developing expertise in creating and deploying them for
            decentralized applications. By combining front-end mastery with
            smart contract integration, I aim to build innovative applications
            that redefine trust and transparency.
          </div>
          <div className=" font-roboto">
            I'm thrilled to be part of the dynamic community of computer science
            enthusiasts, developers, and blockchain innovators.{" "}
          </div> */}
        </div>
      </div>
    </div>
  );
}
export default About;
