import logos from '../../../assets/coding/';
import classes from './CodingLogos.module.scss';
const CodingLogos = () => {
  const icons = Object.values(logos);
  console.log(icons);
  return (
    <div className={classes['img-box']}>
      {icons.map((icon, i) => {
        return <img key={i} src={icon} alt='coding logo' />;
      })}
    </div>
  );
};

export default CodingLogos;
