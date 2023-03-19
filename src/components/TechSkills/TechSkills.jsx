import s from './techSkills.module.css';

function TechSkills({ label }) {
  return (
    <li className={s.item}>
      <span className={s.text}>{label}</span>
    </li>
  );
}

export default TechSkills;