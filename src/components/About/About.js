import classes from './About.module.scss';
import Education from './Education/Education';
import Skills from './Skills/Skills';

const About = () => {
  return (
    <section id='about' className={classes.about}>
      <h1>
        About Me <span className={classes.emoji}>👋</span>
      </h1>
      <p className={classes.intro}>
        Hi, I'm Jason. I dedicate most of my free time creating new projects or
        learning new things about front end development. I'm a competitive gamer
        and that <strong>obsession</strong> to be the best in something has
        poured over to my love for programming. Learn more about me!
      </p>
      <Skills />
      <Education />
    </section>
  );
};

export default About;
