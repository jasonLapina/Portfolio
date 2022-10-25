import Card from '../../UI/Card/Card';
import classes from './Skills.module.scss';
import codingLogos from '../../../assets/coding';
import human from '../../../assets/human.svg';
import { useState } from 'react';

const Skills = () => {
  const [page, setPage] = useState(1);

  const changePage = () => {
    setPage((prev) => {
      if (prev === 1) {
        setPage(2);
      } else {
        setPage(1);
      }
    });
  };
  return (
    <Card>
      <h2>Skills</h2>
      <div className={classes.container}>
        {page === 2 && (
          <button
            onClick={changePage}
            className={`${classes.btn} ${classes['btn--left']}`}
          >
            <ion-icon name='chevron-back-outline' />
          </button>
        )}
        {page === 1 && (
          <button
            onClick={changePage}
            className={`${classes.btn} ${classes['btn--right']}`}
          >
            <ion-icon name='chevron-forward-outline' />
          </button>
        )}
        <div className={classes.coding}>
          <div className={classes.heading}>
            <img
              className={classes['heading-logo']}
              src={codingLogos.coding}
              alt='coding browser'
            />
            <h3>Developer skills:</h3>
          </div>
          <ul className={`${classes.list} ${classes['list--coding']}`}>
            <li className={classes['list-item']}>Figma</li>
            <li className={classes['list-item']}>HTML5</li>
            <li className={classes['list-item']}>CSS3, SASS</li>
            <li className={classes['list-item']}>JavaScript, TypeScript</li>
            <li className={classes['list-item']}>Firebase, MongoDB</li>
            <li className={classes['list-item']}>React, Redux, Next</li>
            <li className={classes['list-item']}>Jest</li>
            <li className={classes['list-item']}>Git</li>
          </ul>
        </div>
        {/* ENDS HERE */}
        <div className={classes['soft-skills']}>
          <div className={classes.heading}>
            <img
              className={classes['heading-logo']}
              src={human}
              alt='coding browser'
            />
            <h3>Soft skills:</h3>
          </div>
          <ul className={`${classes.list} ${classes['list--soft']}`}>
            <li>Team player</li>
            <li>Descriptive coding & commenting</li>
            <li>Time management</li>
            <li>SEO & Performance optimizations</li>
          </ul>
        </div>
      </div>
    </Card>
  );
};

export default Skills;
