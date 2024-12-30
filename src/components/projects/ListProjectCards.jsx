"use client";
import ProjectCard from "./ProjectCard";

const ListProjectCards = ({ projectList }) => {
  return (
    <ul className="w-full flex sm:flex-row flex-wrap flex-col">
      {projectList.map((project) => {
        return (
          <li
            key={project.projectId}
            className=" xl:max-w-1/4 xl:w-1/4 md:max-w-1/3 md:w-1/3 sm:max-w-1/2  sm:w-1/2 "
          >
            <ProjectCard project={project}></ProjectCard>
          </li>
        );
      })}
    </ul>
  );
};

export default ListProjectCards;
