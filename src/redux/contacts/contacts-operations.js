import axios from "axios";
import {
  addContactsRequest,
  addContactsSucces,
  addContactsError,
  deleteContactRequest,
  deleteContactSucces,
  deleteContactError,
  fetchContactsRequest,
  fetchContactsSucces,
  fetchContactsError,
} from "./contacts-actions";

axios.defaults.baseURL = "http://localhost:4040";

const fetchContacts = () => async (dispatch) => {
  dispatch(fetchContactsRequest());

  try {
    const { data } = await axios.get("/contacts");
    dispatch(fetchContactsSucces(data));
  } catch (error) {
    dispatch(fetchContactsError(error));
  }

  // axios
  //   .get('/contacts')
  //   .then(({ data }) => dispatch(fetchContactsSucces(data)))
  //   .catch(error => dispatch(fetchContactsError(error)));
};

const addContact = (data) => async (dispatch) => {
  const contacts = { name: data.name, number: data.number };

  dispatch(addContactsRequest());

  try {
    const { data } = await axios.post("/contacts", contacts);
    dispatch(addContactsSucces(data));
  } catch (error) {
    dispatch(addContactsError(error));
  }

  //   axios
  //     .post('/contacts', contacts)
  //     .then(({ data }) => dispatch(addContactsSucces(data)))
  //     .catch(error => dispatch(addContactsError(error)));
};

const deleteContact = (id) => async (dispatch) => {
  dispatch(deleteContactRequest());

  try {
    const response = await axios.delete(`/contacts/${id}`);
    dispatch(deleteContactSucces(id));
  } catch (error) {
    dispatch(deleteContactError(error));
  }

  // axios
  //   .delete(`/contacts/${id}`)
  //   .then(() => dispatch(deleteContactSucces(id)))
  //   .catch(error => dispatch(deleteContactError(error)));
};

export default {
  addContact,
  deleteContact,
  fetchContacts,
};
