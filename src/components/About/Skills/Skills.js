// import classes from './Skills.module.scss';
// import Logos from './Logos';
// import { useState } from 'react';

// const Skills = () => {
//   const [showAside, setShowAside] = useState(false);

//   const switchHandler = () => {
//     setShowAside((prev) => !prev);
//   };

//   return (
//     <div className={classes.container}>
//       {/* <Logos /> */}
//       <div className={classes['txt-box']}>
//         <h2>Relevant Skills 🧑‍💻</h2>
//         <div className={classes.skills}>
//           <ul
//             className={`${classes.list} ${
//               showAside ? classes.hide : classes.show
//             }`}
//           >
//             <li>Figma for creating wireframes/mockups</li>
//             <li>
//               Semantic <span className={classes.html}>HTML</span> for better SEO
//               and for screen-readers.
//             </li>
//             <li>
//               Advanced <span className={classes.css}>CSS</span> with{' '}
//               <span className={classes.sass}>SaSS</span> with or without
//               <span className={classes.bootstrap}> Bootstrap</span>.
//             </li>
//             <li>
//               Deep knowledge of <span className={classes.js}>JavaScript</span>{' '}
//               and basic understanding of{' '}
//               <span className={classes.ts}>TypeScript</span>.
//             </li>
//             <li>
//               Made most, if not all, my projects using{' '}
//               <span className={classes.react}>React.</span>
//             </li>
//             <li>
//               Made some projects using{' '}
//               <span className={classes.rdx}>Redux</span>,{' '}
//               <span className={classes.jest}>Jest</span>, and,{' '}
//               <span>NextJs</span>.
//             </li>
//             <li>
//               Good knowledge and experience of how to use{' '}
//               <span className={classes.git}>Git</span> and <span>GitHub</span>{' '}
//               collaboratively.
//             </li>
//             <li>Good knowledge with mongoDB as well as Firebase.</li>
//           </ul>
//           <button onClick={switchHandler} className={classes.btn}>
//             <ion-icon name='chevron-forward-outline' />
//           </button>
//           <aside
//             className={`${classes.aside} ${
//               showAside ? classes.show : classes.hide
//             }`}
//           >
//             <strong>Side note!</strong> On top of these skills, I also have very
//             good english communication as I have previously worked for a
//             US-based company as a<span> Virtual Assistant</span>. I also love
//             optimization in terms of <span>performance</span> and{' '}
//             <span>code-readability</span>. I design my own projects using
//             <span> Figma</span>, optimize images using <span>Squoosh</span>, and
//             use a lot more tools to make an optimized and good-looking website!
//           </aside>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Skills;
