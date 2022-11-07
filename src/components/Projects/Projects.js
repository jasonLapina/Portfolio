import classes from './Projects.module.scss';
import ProjectPics from '../../assets/Projects';

const Projects = () => {
  const pics = Object.values(ProjectPics);
  const titles = Object.getOwnPropertyNames(ProjectPics);
  const urls = ['https://nomnom-kappa.vercel.app/'];
  const descriptions = [
    'Food delivery web app.',
    'Villa reservation website.',
    'Food subscription website.',
    'Local 2 player dice-game.',
    'Hotel reservation web app.',
    'To-do web app.',
    'Number guessing game.',
    'Real estate website.',
  ];

  return (
    <section>
      <h1>My passion projects</h1>
      <div className={classes.projects}>
        {pics.map((_, i) => {
          return (
            <div className={classes.project} key={i}>
              <a href={urls[0]} target='_blank' rel='noopener noreferrer'>
                <h3>
                  {titles[i]} <ion-icon name='enter-outline'></ion-icon>
                </h3>
              </a>
              <div className={classes.img}>
                <img src={pics[i]} alt={titles[i]} />
              </div>
              <p className={classes.description}>{descriptions[i]}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
