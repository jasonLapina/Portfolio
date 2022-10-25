import classes from './About.module.scss';
import Skills from './Skills/Skills';

const About = () => {
  return (
    <section className={classes.about}>
      <h1>ABOUT ME</h1>
      <div className={classes.summary}>
        <h3>Summary</h3>
        <p>
          After studying Economics in the University of the Philippines, I
          pursued my long-time passion for technology which led me into the
          world of web development and it was love at first code.
        </p>
      </div>
      <div className={classes['abt-container']}>
        <Skills />
      </div>
    </section>
  );
};

export default About;
