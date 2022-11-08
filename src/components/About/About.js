import classes from './About.module.scss';
import Education from './Education/Education';
import Skills from './Skills/Skills';

const About = () => {
  return (
    <section id='about' className={classes.about}>
      <h1>About Me</h1>
      <div className={classes.container}>
        <Skills />
        <Education />
      </div>
    </section>
  );
};

export default About;
