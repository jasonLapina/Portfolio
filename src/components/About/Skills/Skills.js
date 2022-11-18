import classes from './Skills.module.scss';
import codingLogos from '../../../assets/Coding/';
import Tech from './Tech';
const Skills = () => {
  const {
    html,
    css,
    javaScript,
    ts,
    git,
    gitHub,
    figma,
    sass,
    bootstrap,
    react,
    nextjs,
    redux,
    jest,
    mongodb,
    firebase,
  } = codingLogos;
  const core = [html, css, javaScript, ts];
  const design = [figma, sass];
  const frameWorks = [react, redux, nextjs, bootstrap];
  const versionControl = [git, gitHub];
  const dataBase = [firebase, mongodb];

  const technologies = [
    {
      title: 'Core',
      technology: core,
      text: 'Semantic HTML5, Advanced CSS3, JavaScript profiency, & TypeScript.',
    },
    {
      title: 'design',
      technology: design,
      text: 'Figma for wireframes & Sass for easier styling.',
    },
    {
      title: 'frameWorks',
      technology: frameWorks,
      text: 'Specialized in React & Redux Toolkit, NextJS proficiency, able to use Bootstrap.',
    },
    {
      title: 'Version Control',
      technology: versionControl,
      text: 'Git and GitHub for version control and collabation.',
    },
    {
      title: 'dataBase',
      technology: dataBase,
      text: 'Firebase and mongoDB knowledge for backend/API concerns.',
    },
    {
      title: 'testing',
      technology: [jest],
      text: 'Jest for testing react apps',
    },
  ];

  return (
    <section>
      <h2 className={classes.header}>Technologies</h2>
      <div className={classes.technologies}>
        {technologies.map((tech, i) => {
          return (
            <Tech
              key={i}
              title={tech.title}
              technology={tech.technology}
              text={tech.text}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
