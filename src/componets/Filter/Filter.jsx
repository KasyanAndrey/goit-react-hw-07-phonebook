import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { contactsSelectors } from 'redux/contacts';
import { changeFilter } from 'redux/contacts/contacts-actions';

import s from './Filter.module.css';

const Filter = () => {
  const value = useSelector(contactsSelectors.getFilter);
  const dispatch = useDispatch();

  return (
    <label htmlFor="">
      <p className={s.title}>Find contacts by name</p>
      <input
        type="text"
        value={value}
        onChange={event => dispatch(changeFilter(event.target.value))}
        className={s.input}
      />
    </label>
  );
};

export default Filter;
