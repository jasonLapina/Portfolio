import classes from './Skills.module.scss';
import { useState } from 'react';
import Logos from './Logos';

const Skills = () => {
  const [showAside, setShowAside] = useState(false);
  const switchHandler = () => {
    setShowAside((prev) => !prev);
  };
  return (
    <div className={classes.container}>
      <Logos />
      <div className={classes['txt-box']}>
        <h2>Relevant Skills 🧑‍💻</h2>
        <div className={classes.skills}>
          <ul
            className={`${classes.list} ${
              showAside ? classes.hide : classes.show
            }`}
          >
            <li>
              <span>Figma</span> for wireframes/mockups.
            </li>
            <li>
              Semantic <span className={classes.html}>HTML5</span> for better
              SEO.
            </li>
            <li>
              Advanced <span className={classes.css}>CSS</span>/
              <span className={classes.sass}>SaSS</span> ( w/ or w/o{' '}
              <span className={classes.bootstrap}> Bootstrap</span>).
            </li>

            <li>
              <span className={classes.js}>JavaScript</span> &{' '}
              <span className={classes.ts}>TypeScript</span> proficiency.
            </li>
            <li>
              <span className={classes.react}>React</span> is my most used
              library.
            </li>
            <li>
              Experienced in <span className={classes.rdx}>Redux</span>,{' '}
              <span className={classes.jest}>Jest</span>, and,{' '}
              <span>NextJs</span>.
            </li>
            <li>
              <span className={classes.git}>Git</span> and <span>GitHub</span>{' '}
              proficiency.
            </li>
          </ul>
          <button onClick={switchHandler} className={classes.btn}>
            <ion-icon name='chevron-forward-outline' />
          </button>
          <aside
            className={`${classes.aside} ${
              showAside ? classes.show : classes.hide
            }`}
          >
            <strong>Side note!</strong> On top of these skills, I also have very
            good english communication and teamwork as I have previously worked
            for a US-based company as a<span> Virtual Assistant</span>. I also
            love optimization in terms of <span>performance</span> and{' '}
            <span>code-readability</span> and <span>maintainability</span>.
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Skills;
