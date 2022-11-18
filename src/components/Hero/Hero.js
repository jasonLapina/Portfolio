import classes from './Hero.module.scss';
import hero1 from '../../assets/Hero1.png';
import hero2 from '../../assets/Hero2.png';
import Button from '../UI/Button/Button';

const Hero = () => {
  return (
    <section id='home' className={classes.hero}>
      <div className={classes.container}>
        <div className={`${classes.split} ${classes.left}`}>
          <h1>DEVELOPER</h1>
          <figure className={classes.figure}>
            <img src={hero1} alt='Jason Lapina' />
            <figcaption>Jason Lapina, Developer</figcaption>
          </figure>
          <a href='#projects'>
            <Button className={classes['left-btn']}>Projects</Button>
          </a>

          <p className={`${classes.txt} ${classes['txt--left']}`}>
            Hi, I'm Jason. I mainly use React JS to develop the front end of a
            website/web-app.
          </p>
        </div>
        <div className={`${classes.split} ${classes.right}`}>
          <h1>DESIGNER</h1>
          <figure className={classes.figure}>
            <img src={hero2} alt='Jason Lapina' />
            <figcaption>Jason Lapina, Designer</figcaption>
          </figure>
          <a href='#about'>
            <Button className={classes['right-btn']}>About me</Button>
          </a>
          <p className={`${classes.txt} ${classes['txt--right']}`}>
            Hi, I'm also Jason. I use Figma to create lo-fo or hi-fi mockups
            with modern concepts & designs.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
