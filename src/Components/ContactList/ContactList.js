import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { contactsOperations, contactsSelectors } from "../../redux/contacts";
import styles from "./ContactList.module.css";
import { Button } from "react-bootstrap";

export default function ContactList() {
  const { isLoading, error } = useSelector((state) =>
    contactsSelectors.getContacts(state)
  );
  const contacts = useSelector((state) =>
    contactsSelectors.getVisibleContacts(state)
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  if (contacts === []) return null;
  if (isLoading) return <h2>Loading...</h2>;
  if (error) return <h1>{error}</h1>;
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <ContactListItem id={id} name={name} number={number} />
      ))}
    </ul>
  );
}

const ContactListItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return (
    <li className={styles.item}>
      {name}:{number}
      <Button
        size="sm"
        type="button"
        variant="secondary"
        onClick={() => dispatch(contactsOperations.deleteContacts(id))}
      >
        Delete
      </Button>
    </li>
  );
};
