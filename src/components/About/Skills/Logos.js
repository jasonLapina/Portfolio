import classes from './Logos.module.scss';

const Logos = () => {
  // const logos = Object.values(codeLogos);

  return (
    <div className={classes['img-box']}>
      {/* {logos.map((logo, i) => {
        return <img key={i} src={logo} alt='coding logo' />;
      })} */}
    </div>
  );
};

export default Logos;
