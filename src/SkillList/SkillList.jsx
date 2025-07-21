import { useEffect, useState } from 'react';
import skillsData from './skills.json';

import './skill-list.css';

const Media = ({skill}) => {
  if (skill.hasOwnProperty('image')) {
    console.log(skill.image);
    return (
      <img alt={skill.name} src={skill.image} />
    );
  } else {
    return (
      <i className={skill.icon} />
    );
  }
}

const Skill = ({skill}) => {
  return (
    <div className='skill'>
      <p>
        <Media skill={skill} />
      </p>
      <p>{skill.name}</p>
      <p>{skill.level}</p>
    </div>
  );
};

const SkillList = () => {
  const [skills, setSkills] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      if (Array.isArray(skillsData)) {
        setSkills(skillsData);
        setIsLoading(false);
      } else {
        throw new Error('Unable to load skill list');
      }
    } catch (err) {
      console.error(err.message);
      setError(err);
      setIsLoading(false);
    }
  }, []);

  if (isLoading) {
    return (
      <section className='skill-list'>
        <h2>Technical Skills</h2>
        <p>
          Loading skill list...
        </p>
      </section>
    );
  }

  if (error) {
    return (
      <section className='skill-list'>
        <h2>Technical Skills</h2>
        <p>
          { error.message }
        </p>
      </section>
    );
  }

  return (
    <section className='skill-list'>
      <h2>Technical Skills</h2>
      <div className='skills-container'>
        {
          skills.map((skill) => {
            return <Skill skill={skill} key={skill.id}/>;
          })
        }
      </div>
    </section>
  );
};

export default SkillList
