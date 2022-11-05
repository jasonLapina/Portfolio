import classes from './About.module.scss';
import Skills from './Skills/Skills';

const About = () => {
  return (
    <section className={classes.about}>
      <h1>About Me</h1>
      <Skills />
    </section>
  );
};

export default About;
