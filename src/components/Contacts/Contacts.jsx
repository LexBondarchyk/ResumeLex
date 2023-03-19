import s from './contacts.module.css';

function Contacts({ link, text }) {
  return (
    <li className={s.contact}>
      <a className={s.link} href={link} target="_blank" rel="noreferrer">
        {text}
      </a>
    </li>
  );
}

export default Contacts;
