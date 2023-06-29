import css from './Filter.module.css';
import PropTypes from 'prop-types';

export const Filter = ({ filter, handleChangeInput }) => {
  return (
    <>
      <label className={css.labelFilter}>
        Find contacts by name
        <br />
        <input
          className={css.input}
          onChange={handleChangeInput}
          value={filter}
          type="text"
          name="filter"
        />
      </label>
    </>
  );
};

export default Filter;

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  handleChangeInput: PropTypes.func.isRequired,
};