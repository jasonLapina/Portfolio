import CodingLogos from '../../../assets/Coding';
import classes from './Logos.module.scss';
const Logos = () => {
  const icons = Object.values(CodingLogos);
  console.log(icons);
  return (
    <div className={classes['img-box']}>
      {icons.map((icon, i) => {
        return <img key={i} src={icon} alt='coding logo' />;
      })}
    </div>
  );
};

export default Logos;
