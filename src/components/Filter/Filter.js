import s from './Filter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilter } from 'redux/selectors';
import { filterContact } from 'redux/filterSlice';

export default function Filter() {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const eventFilter = e => {
    dispatch(filterContact(e.currentTarget.value));
  };

  return (
    <div className={s.box}>
      <label className={s.label}>
        <span>Find contacts by name:</span>
        <input
          className={s.input}
          value={filter}
          type="text"
          onChange={eventFilter}
        />
      </label>
    </div>
  );
}
