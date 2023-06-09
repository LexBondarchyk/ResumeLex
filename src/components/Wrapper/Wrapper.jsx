import PropTypes from 'prop-types';
import s from './wrapper.module.css';

function Wrapper({ children }) {
  return <div className={s.wrapper}>{children}</div>;
}

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Wrapper;