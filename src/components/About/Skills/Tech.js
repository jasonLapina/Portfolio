import classes from './Tech.module.scss';
const Tech = ({ title, technology, text }) => {
  return (
    <div className={classes.wrapper}>
      <h3>{title}</h3>
      <div className={classes.logos}>
        {technology.map((technology, i) => {
          return <img key={i} src={technology} alt='coding logo' />;
        })}
      </div>
      <p className={classes.text}>{text}</p>
    </div>
  );
};
export default Tech;
