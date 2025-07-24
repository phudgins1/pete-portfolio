
import './about.css';

const About = () => {
  return (
    <section className='about-container'>
      <h2>About Me</h2>
      <div className='about-content'>
        <img height="200" width="200" alt='Pete Hudgins' src='/images/pete-avatar.png'/>
        <div className='about-text'>
          <p>
            Text about me will go here.
          </p>
          <p>
            There will be multiple paragraphs.
          </p>
          <p>
            The text will make me seem awesome and not awkward at all.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
