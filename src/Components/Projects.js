import netflix from "../Images/Netflix.jpg";
import shopping from "../Images/shopping.png";
import spotify from "../Images/Spotify.png";
function Projects() {
  const projArr = [
    {
      name: "Shopping Website",
      id: 1,
      description:
        "This website is not completed yet but will be soon completed and uploaded",
      photo: shopping,
    },
    {
      name: "Netflix Clone",
      id: 2,
      description:
        "This website is not completed yet but will be soon completed and uploaded",
      photo: netflix,
    },
    {
      name: "Spotify Clone",
      id: 3,
      description:
        "This website is not completed yet but will be soon completed and uploaded",
      photo: spotify,
    },
  ];
  const renderedProj = projArr.map((proj, id) => {
    return (
      <div
        className="relative group h-64 w-56 rounded-lg ring-4 ring-offset-2 ring-purple-600 transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-purple-400  flex flex-col overflow-hidden"
        key={id}
      >
        <img
          className=" group-hover:blur-sm basis-10/12"
          src={proj.photo}
          alt="photos"
        />
        <h2 className="pt-2 bottom-0 text-center transition-all ease-in-out">
          {proj.name}
        </h2>
        <p className="absolute -bottom-20 group-hover:bottom-24 transition-all ease-in-out duration-300">
          {proj.description}
        </p>
      </div>
    );
  });
  return (
    <div className=" pt-24" id="projects">
      <div className="text-white text-4xl text-center font-playfair">
        Projects
      </div>
      <div className="text-white text-lg text-center font-raleway">
        Have a <span className="text-purple-500"> glance </span>at my
        Projects...
      </div>
      <div className="text-white grid grid-cols-3 p-20 justify-items-center">
        {renderedProj}
      </div>
    </div>
  );
}
export default Projects;
