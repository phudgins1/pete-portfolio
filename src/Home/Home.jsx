import { useNavigate } from 'react-router-dom';

import './home.css';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className='home-container'>
      <section className='intro'>
        <h2>Software Developer</h2>
        <p>Creating Back End APIs and Front End solutions to user problems with clean code.</p>
      </section>
    </div>
  );
};

export default Home;
