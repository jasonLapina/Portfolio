import classes from './Projects.module.scss';
import ProjectPics from '../../assets/Projects';

const Projects = () => {
  // THUMBNAILS
  const pics = Object.values(ProjectPics);
  // PROJECT TITLES
  const titles = Object.getOwnPropertyNames(ProjectPics).map((title) =>
    title.replace('_', ' ')
  );
  // APPEND VERCEL URL, GITHUB URL, AND COPY OF NEW PROJECT HERE
  const details = [
    {
      vercel: 'https://nomnom-kappa.vercel.app/',
      github: 'https://github.com/jasonLapina/nomnom',
      copy: 'Food delivery web app.',
    },
    {
      vercel: 'https://project-relux.vercel.app/',
      github: 'https://github.com/jasonLapina/Project-Relux',
      copy: 'Villa reservation website.',
    },
    {
      vercel: 'https://omnifood-next-js-sass.vercel.app/',
      github: 'https://github.com/jasonLapina/Project-Omnifood',
      copy: 'Food subscription website.',
    },
    {
      vercel: 'https://pig-game-blush.vercel.app/',
      github: 'https://github.com/jasonLapina/pig-game',
      copy: 'Local 2 player dice-game.',
    },
    {
      vercel: 'https://sass-prac-2.vercel.app/',
      github: 'https://github.com/jasonLapina/sass-prac-2',
      copy: 'Hotel reservation web app.',
    },
    {
      vercel: 'https://to-do-five-azure.vercel.app/',
      github: 'https://github.com/jasonLapina/to-do',
      copy: 'To-do web app.',
    },
    {
      vercel: 'https://number-game-eight.vercel.app/',
      github: 'https://github.com/jasonLapina/number-game',
      copy: 'Number guessing game.',
    },
    {
      vercel: 'https://sass-prac-3.vercel.app/',
      github: 'https://github.com/jasonLapina/sass-prac-3',
      copy: 'Real estate website.',
    },
  ];

  return (
    <section id='projects'>
      <h1>My passion projects</h1>
      <div className={classes.projects}>
        {pics.map((_, i) => {
          return (
            <div className={classes.project} key={i}>
              <a
                href={details[i].vercel}
                target='_blank'
                rel='noopener noreferrer'
              >
                <h3>
                  {titles[i]} <ion-icon name='enter-outline'></ion-icon>
                </h3>
              </a>
              <div className={classes.img}>
                <img src={pics[i]} alt={titles[i]} />
              </div>
              <div className={classes.description}>
                <p>{details[i].copy}</p>
                <a
                  href={details[i].github}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <ion-icon name='logo-github'></ion-icon>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
