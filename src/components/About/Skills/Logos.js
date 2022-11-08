import codingLogos from '../../../assets/coding';
import classes from './Logos.module.scss';
const Logos = () => {
  const logos = Object.values(codingLogos);
  console.log(logos);
  return (
    <div className={classes['img-box']}>
      {logos.map((logo, i) => {
        return <img src={logo} alt='coding logo' key={i} />;
      })}
    </div>
  );
};

export default Logos;
