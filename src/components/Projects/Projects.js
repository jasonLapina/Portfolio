import classes from './Projects.module.scss';
import ProjectPics from '../../assets/Projects';

const Projects = () => {
  const pics = Object.values(ProjectPics);
  const titles = Object.getOwnPropertyNames(ProjectPics);
  const urls = [
    'https://nomnom-kappa.vercel.app/',
    'https://project-relux.vercel.app/',
    'https://omnifood-next-js-sass.vercel.app/',
    'https://pig-game-blush.vercel.app/',
    'https://sass-prac-2.vercel.app/',
    'https://to-do-five-azure.vercel.app/',
    'https://number-game-eight.vercel.app/',
  ];
  const descriptions = [
    'Food delivery web app.',
    'Villa reservation website.',
    'Food subscription website.',
    'Local 2 player dice-game.',
    'Hotel reservation web app.',
    'To-do web app.',
    'Number guessing game.',
    'Real estate website.',
    'https://sass-prac-3.vercel.app/',
  ];

  return (
    <section id='projects'>
      <h1>My passion projects</h1>
      <div className={classes.projects}>
        {pics.map((_, i) => {
          return (
            <div className={classes.project} key={i}>
              <a href={urls[i]} target='_blank' rel='noopener noreferrer'>
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
