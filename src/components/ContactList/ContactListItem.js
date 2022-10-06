import React from 'react';
import s from './ContactList.module.css';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { delContact } from 'redux/operations';

export default function ContactListItem({ name, phone, id }) {
  const dispatch = useDispatch();
  return (
    <li className={s.item} id={id}>
      <p className={s.contact}>
        {name}: {phone}
      </p>
      <button
        className={s.button}
        type="submit"
        onClick={() => dispatch(delContact(id))}
      >
        Delete
      </button>
    </li>
  );
}

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};
