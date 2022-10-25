import classes from './Hero.module.scss';
import hero1 from '../../assets/Hero1.png';
import hero2 from '../../assets/Hero2.png';
import Button from '../UI/Button';

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.container}>
        <div className={`${classes.split} ${classes.left}`}>
          <h1>FRONT-END DEVELOPER</h1>
          <figure className={classes.figure}>
            <img src={hero1} alt='Jason Lapina' />
            <figcaption>Jason Lapina, Dev-Designer</figcaption>
          </figure>
          <Button className={classes['left-btn']}>About me</Button>
          <p className={`${classes.txt} ${classes['txt--left']}`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id fugit
            reiciendis iure totam, ut sed dolorum assumenda molestias eaque
            laboriosam minima nemo iusto pariatur quas dolorem recusandae
            tempora est exercitationem!
          </p>
        </div>
        <div className={`${classes.split} ${classes.right}`}>
          <h1>UI/UX DESIGNER</h1>
          <figure className={classes.figure}>
            <img src={hero2} alt='Jason Lapina' />
            <figcaption>Jason Lapina, Dev-Designer</figcaption>
          </figure>
          <Button className={classes['left-btn']}>About me</Button>
          <p className={`${classes.txt} ${classes['txt--right']}`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id fugit
            reiciendis iure totam, ut sed dolorum assumenda molestias eaque
            laboriosam minima nemo iusto pariatur quas dolorem recusandae
            tempora est exercitationem!
          </p>
        </div>
      </div>
      <div className={classes.skills}></div>
    </section>
  );
};

export default Hero;
