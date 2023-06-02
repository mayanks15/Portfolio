import { useState } from "react";
import netflix from '../Images/hqdefault.jpg'
function Projects() {
  const projArr = [
    {
        name: 'Shopping Website',
        id: 1,
        description: "This website is not completed yet but will be soon completed and uploaded",
        photo: netflix
    },
    {
        name: 'Netflix Clone',
        id:2,
        description: "This website is not completed yet but will be soon completed and uploaded",
        photo: netflix
    },
    {
        name: 'Spotify Clone',
        id:3,
        description: "This website is not completed yet but will be soon completed and uploaded",
        photo: netflix
    },
    {
        name: 'Chatting Website',
        id:4,
        description: "This website is not completed yet but will be soon completed and uploaded",
        photo: netflix
    },
  ];
  const renderedProj = projArr.map((proj)=>{
    console.log(proj)
    return(
        <div className="border-2" style={{backgroundImage: `url(${proj.photo})`}}>
            <h2>{proj.name}</h2>
            <p>{proj.description}</p>
        </div>
    )
  })
  return(
    <div className=" pt-12" id="projects">
        <div className="text-white text-3xl ml-72 font-roboto ">
            Projects.
        </div>
        <div className="text-white ml-72 font-raleway">
            Have a <span className="text-purple-500"> glance </span>at my Projects
        </div>
        <div className="text-white grid grid-cols-3 gap-6 justify-items-center  p-12">
            {renderedProj}
        </div>
    </div>
  );
}
export default Projects;
