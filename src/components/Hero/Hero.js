import classes from './Hero.module.scss';
import hero1 from '../../assets/Hero1.png';
import hero2 from '../../assets/Hero2.png';
import Button from '../UI/Button/Button';

const Hero = () => {
  return (
    <section id='home' className={classes.hero}>
      <div className={classes.container}>
        <div className={`${classes.split} ${classes.left}`}>
          <h1>FRONT-END DEVELOPER</h1>
          <figure className={classes.figure}>
            <img src={hero1} alt='Jason Lapina' />
            <figcaption>Jason Lapina, Dev-Designer</figcaption>
          </figure>
          <Button className={classes['left-btn']}>Projects</Button>
          <p className={`${classes.txt} ${classes['txt--left']}`}>
            Hi, I'm Jason. I code maintainable, readable, and efficient
            javaScript/React to build the Front-end of a website.
          </p>
        </div>
        <div className={`${classes.split} ${classes.right}`}>
          <h1>UI/UX DESIGNER</h1>
          <figure className={classes.figure}>
            <img src={hero2} alt='Jason Lapina' />
            <figcaption>Jason Lapina, Dev-Designer</figcaption>
          </figure>
          <Button className={classes['right-btn']}>About me</Button>
          <p className={`${classes.txt} ${classes['txt--right']}`}>
            Hi, I'm also Jason. I can create beautiful lo-fi and hi-fi mock-ups
            with very modern concepts and designs.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
