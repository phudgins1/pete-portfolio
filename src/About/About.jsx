
import './about.css';

const About = () => {
  return (
    <section className='about-container'>
      <h2>About Me</h2>
      <div className='about-content'>
        <img height="200" width="200" alt='Pete Hudgins' src='/images/pete-avatar.png'/>
        <div className='about-text'>
          <p>
            I have a passion for developing efficient, creative software for clear client problems, 
            and I am excited about the opportunity to showcase my skills.
          </p>
          <p>
            My expertise in NodeJS, Typescript, ElasticSearch and SQL
            allows me to build robust, fast back-end services, 
            as well as rich, front-end interfaces.
          </p>
          <p>
            I've worked extensively in building worker processes, using tools like Redis, 
            RabbitMQ, and MongoDB to better minimize manual operations.
          </p>
          <p>
            In my free time, I enjoy solving puzzles, reading and watching movies. 
            I always try to learn something new every day.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
