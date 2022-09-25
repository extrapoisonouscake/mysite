import classnames from "./index.module.scss";
import { useEffect } from "react";
import projects from "data/projects.json";
import titles from 'data/titles'
import formatTitle from "helpers/formatTitle";
export default function Projects() {
  useEffect(() => {
    document.title = formatTitle("projects");
  });
  return (
    <div className="section">
      <h2>{titles['projects']}</h2>
      {projects.length === 0 ? (
        <p>Пока проектов нет, но скоро будут (если не выгорю :3).</p>
      ) : (
        projects.map((project, index) => (
          <div className={classnames.project}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
          </div>
        ))
      )}
    </div>
  );
}
