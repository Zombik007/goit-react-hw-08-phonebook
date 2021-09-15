import axios from 'axios';
import {
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  addContactsRequest,
  addContactsSuccess,
  addContactsError,
  deleteContactsRequest,
  deleteContactsSuccess,
  deleteContactsError,
} from './contacts-actions';

const fetchContacts = () => async dispatch => {
  dispatch(fetchContactsRequest());
  try {
    const { data } = await axios.get('/contacts');
    dispatch(fetchContactsSuccess(data));
  } catch (error) {
    dispatch(fetchContactsError());
  }
};

const addContacts = item => async dispatch => {
  dispatch(addContactsRequest);
  try {
    const { data } = await axios.post('contacts', item);
    dispatch(addContactsSuccess(data));
  } catch (error) {
    dispatch(addContactsError());
  }
};

const deleteContacts = contactsId => async dispatch => {
  deleteContactsRequest();
  try {
    await axios.delete(`contacts/${contactsId}`);
    dispatch(deleteContactsSuccess(contactsId));
  } catch (error) {
    dispatch(deleteContactsError(error));
  }
};

export default { fetchContacts, addContacts, deleteContacts };
