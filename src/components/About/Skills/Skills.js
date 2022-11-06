import classes from './Skills.module.scss';
import codingLogos from '../../../assets/coding';

const Skills = () => {
  const logos = Object.values(codingLogos);

  return (
    <div className={classes.container}>
      <div className={classes['img-box']}>
        {logos.map((logo, i) => {
          return <img key={i} src={logo} alt='coding logo' />;
        })}
      </div>
      <div className={classes['txt-box']}>
        <h2>Relevant Skills 🧑‍💻</h2>
        <ul>
          <li>
            Semantic <span className={classes.html}>HTML</span> for better SEO
            and for screen-readers.
          </li>
          <li>
            Advanced <span className={classes.css}>CSS</span> with{' '}
            <span className={classes.sass}>SaSS</span> with or without
            <span className={classes.bootstrap}> Bootstrap</span>.
          </li>
          <li>
            Deep knowledge of <span className={classes.js}>JavaScript</span> and
            basic understanding of{' '}
            <span className={classes.ts}>TypeScript</span>.
          </li>
          <li>
            Made most, if not all, my projects using{' '}
            <span className={classes.react}>React.</span>
          </li>
          <li>
            Made some projects using <span className={classes.rdx}>Redux</span>,{' '}
            <span className={classes.jest}>Jest</span>, and, <span>NextJs</span>
            .
          </li>
          <li>
            Good knowledge and experience of how to use{' '}
            <span className={classes.git}>Git</span> and <span>GitHub</span>{' '}
            collaboratively.
          </li>
        </ul>
        <aside className={classes.aside}>
          <strong>Side note!</strong> On top of these skills, I also have very
          good english communication as I have previously worked for a US-based
          company as a<span> Virtual Assistant</span>. I also love optimization
          in terms of <span>performance</span> and <span>code-readability</span>
          . I design my own projects using
          <span> Figma</span>, optimize images using <span>Squoosh</span>, and
          use a lot more tools to make an optimized and good-looking website!
        </aside>
      </div>
    </div>
  );
};

export default Skills;
