import classes from './Footer.module.scss';
const Footer = () => {
  return (
    <footer className={classes.footer}>
      <p>
        Copyright © 2022 by{' '}
        <a
          href='https://github.com/jasonLapina'
          target='_blank'
          rel='noopener noreferrer'
        >
          <strong>Jason Lapina.</strong>
        </a>
      </p>

      <address className={classes.contacts}>
        +63 9563090839 &mdash;{' '}
        <a href='mailto:lapina.jason@gmail.com'>lapina.jason@gmail.com</a>
      </address>
      <div className={classes.socials}>
        <a
          href='https://github.com/jasonLapina'
          target='_blank'
          rel='noopener noreferrer'
        >
          <ion-icon name='logo-github'></ion-icon>
        </a>
        <a
          className={classes.linkedIn}
          href='https://www.linkedin.com/in/jason-lapina-1b203624b/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <ion-icon name='logo-linkedin'></ion-icon>
        </a>
        <a
          className={classes.fb}
          href='https://www.facebook.com/klemekek'
          target='_blank'
          rel='noopener noreferrer'
        >
          <ion-icon name='logo-facebook'></ion-icon>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
