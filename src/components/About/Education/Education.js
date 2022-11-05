import { useState } from 'react';
import classes from './Education.module.scss';
const Education = () => {
  const educ = [
    {
      title: 'Summary 📜',
      text: `I used Udemy's paid courses to teach myself the necessary skills to become a React Front-End Developer. Certificates are available upon request.`,
    },

    {
      title: 'Self-education journey 👨‍💻',
      text: `I used Udemy's paid courses to teach myself the necessary skills to become a React Front-End Developer. Certificates are available upon request.`,
    },
    {
      title: 'Tertiary Education 🐃',
      text: `I studied Agricultural Economics in the University of the Philippines, Los Baños but decided to pursue my real passion for technology.`,
    },
    {
      title: 'Secondary Education 🏫',
      text: `I went to Santa Rosa Science and Technology High School and took STEM as my course for senior high.`,
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
        <h1>AJSDASDJAJDAS</h1>
      </div>
    </div>
  );
};

export default Education;
