import { useNavigate } from 'react-router-dom';
import SkillList from '../SkillList/SkillList';

import './home.css';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className='home-container'>
      <section className='intro'>
        <h2>Software Developer</h2>
        <p>Creating Back End APIs and Front End solutions to user problems with clean code.</p>
        <p>
          <button onClick={() => navigate('/resume')}>Resume</button>
          <button onClick={() => navigate('/about')}>About Me</button>
        </p>
      </section>
      <SkillList/>
    </div>
  );
};

export default Home;
