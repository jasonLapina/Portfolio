import classes from './Projects.module.scss';
import ProjectPics from '../../assets/Projects';

const Projects = () => {
  const pics = Object.values(ProjectPics);
  const titles = Object.getOwnPropertyNames(ProjectPics);
  const urls = ['https://nomnom-kappa.vercel.app/'];

  return (
    <section>
      <h1>My passion projects</h1>
      <div className={classes.projects}>
        {pics.map((_, i) => {
          return (
            <div className={classes.project} key={i}>
              <a href={urls[0]} target='_blank' rel='noopener noreferrer'>
                <h3>{titles[i]}</h3>
              </a>
              <img src={pics[i]} alt={titles[i]} />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
