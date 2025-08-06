import './resume.css';

const Resume = () => {

  return (
    <section className='resume-container'>
      <article className='resume-intro'>
        <div className='avatar'></div>
        <div className='details'>
          <h2>Pete Hudgins</h2>
          <p className='intro-summary'>Backend &amp; Full Stack Engineer</p>
          <p className='intro-socials'>
            <span>
              <i className='fa-solid fa-location-dot fa-md'></i>
              Norfolk, VA
            </span>
            <span>
              <a href='https://www.linkedin.com/in/pdhudgins/' target='_blank' rel='noreferrer'>
                <i className='fa-brands fa-linkedin fa-md'></i>
                LinkedIn
              </a>
            </span>
            <span>
              <a href='https://github.com/phudgins1' target='_blank' rel='noreferrer'>
                <i className='fa-brands fa-github fa-md'></i>
                Github
              </a>
            </span>
            <span>
              <a href='/contact'>
                <i className='fa-regular fa-envelope fa-md'></i>
                Contact
              </a>
            </span>
          </p>
        </div>
      </article>
      <article className='resume-summary'>
        <h3>Summary</h3>
        <p>
          I am really good at doing things, and will replace this text with an awesome explanation of how I do that.
        </p>
      </article>
    </section>
  );
};

export default Resume;
