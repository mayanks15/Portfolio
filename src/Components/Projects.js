import netflix from "../Images/Netflix.jpg";
import shopping from "../Images/shopping.png";
import spotify from "../Images/Spotify.png";
function Projects() {
  const projArr = [
    {
      name: "Shopping Website",
      id: 1,
      description:
        "This website is not completed yet but will soon be completed and uploaded",
      photo: shopping,
    },
    {
      name: "Netflix Clone",
      id: 2,
      description:
        "This website is not completed yet but will soon be completed and uploaded",
      photo: netflix,
    },
    {
      name: "Spotify Clone",
      id: 3,
      description:
        "This website is not completed yet but will soon be completed and uploaded",
      photo: spotify,
    },
  ];
  const renderedProj = projArr.map((proj, id) => {
    return (
      <div
        className="relative group h-3/4 w-3/4 rounded-lg ring-4 ring-offset-2 ring-purple-600 transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-purple-400 bg-gray-800 flex flex-col overflow-hidden"
        key={id}
      >
        <img
          className=" group-hover:blur-sm h-3/4"
          src={proj.photo}
          alt="photos"
        />
        <h2 className="font-bold text-xl absolute bottom-8 inset-x-0 group-hover:bottom-24 text-center transition-all ease-in-out duration-300 ">
          {proj.name}
        </h2>
        <p className=" text-center absolute -bottom-20 group-hover:bottom-4 transition-all ease-in-out duration-300 text-lg">
          {proj.description}
        </p>
      </div>
    );
  });
  return (
    <div className="h-full pt-36" id="projects">
      <div className="text-white text-5xl text-center font-playfair">
        Projects
      </div>
      <div className="text-white text-xl mt-1 text-center font-raleway">
        Have a <span className="text-purple-500"> glance </span>at my
        Projects...
      </div>
      <div className="text-white grid grid-cols-3 p-20 h-full justify-items-center">
        {renderedProj}
      </div>
    </div>
  );
}
export default Projects;
