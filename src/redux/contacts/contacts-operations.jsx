import axios from 'axios';
import {
  fetchContactRequest,
  fetchContactSuccess,
  fetchContactError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  deliteContactRequest,
  deliteContactSuccess,
  deliteContactError,
} from './contacts-actions';

axios.defaults.baseURL = 'http://localhost:4040';

const fetchContacts = () => async dispatch => {
  dispatch(fetchContactRequest());

  try {
    const { data } = await axios.get('/contacts');

    dispatch(fetchContactSuccess(data));
  } catch (error) {
    dispatch(fetchContactError(error));
  }

  // axios
  //   .get('/contacts')
  //   .then(({ data }) => dispatch(fetchContactSuccess(data)))
  //   .catch(error => dispatch(fetchContactError(error)));
};

const addContact =
  ({ name, number }) =>
  dispatch => {
    const contact = { name, number };

    dispatch(addContactRequest());

    axios
      .post('/contacts', contact)
      .then(({ data }) => dispatch(addContactSuccess(data)))
      .catch(error => dispatch(addContactError(error)));
  };

const deliteContact = contactId => dispatch => {
  dispatch(deliteContactRequest());

  axios
    .delete(`/contacts/${contactId}`)
    .then(() => dispatch(deliteContactSuccess(contactId)))
    .catch(error => dispatch(deliteContactError(error)));
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  fetchContacts,
  addContact,
  deliteContact,
};
