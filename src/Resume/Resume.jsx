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
          I've worked in a breadth of roles in enterprise web development, specializing in Cloud Architecture, SQL, React, TypeScript, C#, Elasticsearch, Jest, JavaScript, Redis, Ruby on Rails, Node.js and PostgresSQL.
        </p>
      </article>
      <article className='resume-work-experience'>
        <h3>Work Experience</h3>
        <div className='work-experience'>
          <h4>Full Stack Developer</h4>
          <p className='experience-company'>CoStar Group — Norfolk, VA</p>
          <p className='experience-dates'>Aug 2021 — Jun 2024</p>
          <ul className='experience-details'>
            <li>Optimized internal sales tool functionality by implementing back-end service endpoints for new Homes.com data.</li>
            <li>Integrated data and business logic for Homes.com sales products.</li>
            <li>Enhanced user experience of internal sales tool by creating and integrating micro front-ends.</li>
            <li>Implemented all features using Azure Devops pipelines to deploy code to multiple environments.</li>
          </ul>
          <ul className='experience-skills'>
            <li>C#</li>
            <li>ElasticSearch</li>
            <li>MSSQL</li>
            <li>Typescript</li>
            <li>ReactJS</li>
            <li>NodeJS</li>
            <li>TailwindCSS</li>
            <li>Jest</li>
            <li>Cypress</li>
          </ul>
        </div>
        <div className='work-experience'>
          <h4>Backend Developer</h4>
          <p className='experience-company'>Homes.com — Norfolk, VA</p>
          <p className='experience-dates'>Aug 2016 — Aug 2021</p>
          <ul className='experience-details'>
            <li>Implemented micro-services to provide dynamic data to front-end website.</li>
            <li>Created worker processes to handle automated tasks and event processing.</li>
            <li>Implemented Kibana dashboards for ease of log monitoring.</li>
            <li>Rebuilt the main portal's redirect engine, speeding up redirects by half</li>
            <li>Established linting rules for all codebases making them all consistent.</li>
          </ul>
          <ul className='experience-skills'>
            <li>ElasticSearch</li>
            <li>Typescript</li>
            <li>NodeJS</li>
            <li>Jest</li>
            <li>Ramda</li>
            <li>RabbitMQ</li>
            <li>MongoDB</li>
            <li>HapiJS</li>
            <li>ELK</li>
          </ul>
        </div>
      </article>
    </section>
  );
};

export default Resume;
