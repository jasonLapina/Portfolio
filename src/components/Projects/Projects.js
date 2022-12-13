import { useEffect, useState } from 'react';
import classes from './Projects.module.scss';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    const fetchProjects = async () => {
      const res = await fetch(
        'https://portfolio-d8598-default-rtdb.asia-southeast1.firebasedatabase.app/projects.json'
      );
      const data = await res.json();

      const fetchedProjs = Object.values(data).reverse();
      setProjects(fetchedProjs);
    };
    fetchProjects();
  }, []);
  console.log(projects);

  const renderProjects = projects.map((proj, i) => {
    const { title, github, pic, text, link } = proj;
    return (
      <div
        className={`${classes.project} ${
          title === 'Nomnom' ? classes.featured : ''
        }`}
        key={i}
      >
        <a href={link} target='_blank' rel='noopener noreferrer'>
          <h3>
            {title} <ion-icon name='enter-outline' />
          </h3>
        </a>
        <a href={link}>
          <img src={pic} alt={title} />
        </a>
        <div className={classes.description}>
          <p>{text}</p>
          <a href={github} target='_blank' rel='noopener noreferrer'>
            <ion-icon name='logo-github' />
          </a>
        </div>
      </div>
    );
  });

  return (
    <section id='projects'>
      <h1>PROJECTS</h1>
      <div className={classes.projects}>{renderProjects}</div>
    </section>
  );
};

export default Projects;
