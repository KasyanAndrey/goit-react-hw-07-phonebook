import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import contactOperations from '../../redux/contacts/contacts-operations';
import { getVisibleContacts } from '../../redux/contacts/contacts-selectors';

import s from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactOperations.fetchContacts());
  }, [dispatch]);

  const onDeletContacts = id => dispatch(contactOperations.deliteContact(id));

  return (
    <ul className={s.list}>
      {contacts.map(({ id, name, number }) => (
        <li className={s.item} key={id}>
          <p>{name}:</p>
          <p>{number}</p>
          <button onClick={() => onDeletContacts(id)} className={s.btn}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
