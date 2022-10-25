import classes from './About.module.scss';

const About = () => {
  const aboutMe = [
    {
      title: 'Experience',
      text: '',
      image: '',
    },
    {
      title: 'Skills',
      text: '',
      image: '',
    },
    {
      title: 'Education',
      text: '',
      image: '',
    },
  ];

  return (
    <section className={classes.about}>
      <h1>ABOUT ME</h1>
      <div className={classes.summary}>
        <h2>Summary</h2>
        <p>
          After studying Economics in the University of the Philippines, I
          pursued my long-time passion for technology which led me into the
          world of web development and it was love at first code.
        </p>
      </div>
      {aboutMe.map((about, i) => {
        const { title, text, image } = about;
        return (
          <div className={classes.card} key={i}>
            <h3>{title}</h3>
            <p>{text}</p>
          </div>
        );
      })}
    </section>
  );
};

export default About;
