import classes from './Projects.module.scss';
import ProjectPics from '../../assets/Projects';

const Projects = () => {
  const pics = ProjectPics;

  return (
    <section>
      <h1>My passion projects</h1>
      <div className={classes.projects}>
        <div className={classes.project}>
          <a href='/'>
            <h3>nomnom</h3>
          </a>

          <img src={pics.nomnom} alt='Nomnom' />
        </div>
        <div className={classes.project}>
          <a href='/'>
            <h3>Omnifood</h3>
          </a>
          <img src={pics.omnifood} alt='Omnifood' />
        </div>
        <div className={classes.project}>
          <a href='/'>
            <h3>Relux</h3>
          </a>
          <img src={pics.relux} alt='Relux' />
        </div>
        <div className={classes.project}>
          <a href='/'>
            <h3>pig-game</h3>
          </a>
          <img src={pics.piggame} alt='pig-game' />
        </div>
      </div>
    </section>
  );
};

export default Projects;
