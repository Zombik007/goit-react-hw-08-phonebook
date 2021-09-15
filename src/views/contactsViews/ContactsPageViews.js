import styles from "./ContactsViews.module.css";
import ContactForm from "../../Components/ContactForm/ContactForm";
import ContactList from "../../Components/ContactList/ContactList";
import Filter from "../../Components/FilterContact/FilterContact";

export default function ContactsViews() {
  return (
    <div>
      <h2 className={styles.title}>Phonebook</h2>
      <ContactForm />

      <h2 className={styles.title}>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}
