/* eslint-disable react/jsx-no-target-blank */
import './footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className='footer-container'>
      <div>&copy; {currentYear} Pete Hudgins. All rights reserved.</div>
      <div className='social-links'>
        <a href='https://github.com/phudgins1' target='_blank' rel='noreferrer' title='Github'>
          <i className='fa-brands fa-github fa-xl'></i>
        </a>
        <a href='https://www.linkedin.com/in/pdhudgins/' target='_blank' rel='noreferrer' title='LinkedIn'>
          <i className='fa-brands fa-linkedin fa-xl'></i>
        </a>
        <a href='https://gram.social/phudgins' target='_blank' rel='noreferrer' title='PixelFed'>
          <i className='fa-solid fa-camera-retro fa-xl'></i>
        </a>
        <a href='https://beige.party/@phudgins' target='_blank' rel='me' title='Mastodon'>
          <i className='fa-brands fa-mastodon fa-xl'></i>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
