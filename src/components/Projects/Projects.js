import classes from './Projects.module.scss';
import ProjectPics from '../../assets/Projects';

const Projects = () => {
  const pics = ProjectPics;

  return (
    <section>
      <h1>My passion projects</h1>
      <div className={classes.projects}>
        <div className={classes.project}>
          <h3>nomnom</h3>
          <img src={pics.nomnom} alt='Nomnom' />
        </div>
        <div className={classes.project}>
          <h3>Omnifood</h3>
          <img src={pics.omnifood} alt='Omnifood' />
        </div>
        <div className={classes.project}>
          <h3>Relux</h3>
          <img src={pics.relux} alt='Relux' />
        </div>
      </div>
    </section>
  );
};

export default Projects;
