import classes from './Education.module.scss';
import human from '../../../assets/human.svg';
import pinkpic from '../../../assets/pinkpic.png';

const Education = () => {
  const educ = [
    {
      title: 'TL;DR 📜',
      text: `I studied Economics in the University of the Philippines but went on to pursue my long-time passion for technology which led me to web development.`,
    },

    {
      title: 'Self-education 👨‍💻',
      text: `I used Udemy's paid courses to teach myself the necessary skills to become a React Front-End Developer. Certificates are available upon request.`,
    },
    {
      title: 'Tertiary 🐃',
      text: `I studied Bachelors of Science in Agricultural and Applied Economics in the University of the Philippines, Los Baños.`,
    },
    {
      title: 'Secondary 🏫',
      text: `I studied STEM (Science, Engineering, and Mathematics) at Sta. Rosa Science and Technology High School`,
    },
  ];
  const toggleActive = (e) => {
    e.target.parentElement.classList.toggle(classes.active);
  };

  return (
    <div className={classes.container}>
      <div className={classes['txt-box']}>
        <h2>Education 🏫 </h2>
        <ul className={classes.list}>
          {educ.map((entry, i) => {
            return (
              <li className={classes.entry} key={i}>
                <h3>{entry.title}</h3>
                <p>{entry.text}</p>
                <button onClick={toggleActive} className={classes.btn}>
                  <ion-icon name='chevron-down-outline' />
                </button>
              </li>
            );
          })}
        </ul>
      </div>
      <div className={classes['img-box']}>
        <img src={human} alt='guy coding' />
        <img src={pinkpic} alt='jason lapina' />
      </div>
    </div>
  );
};

export default Education;
