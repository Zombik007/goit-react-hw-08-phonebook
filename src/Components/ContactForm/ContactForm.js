import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { contactsOperations, contactsSelectors } from '../../redux/contacts';
import { Button, Form } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { v4 as uuid } from 'uuid';
import styles from './ContactForm.module.css';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(state => contactsSelectors.getContacts(state));
  const dispatch = useDispatch();

  const inputChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const formSubmit = e => {
    e.preventDefault();
    const isContactExist = !!contacts.items.find(
      contact => contact.name === name,
    );
    isContactExist &&
      toast.error('Contact is already exist', {
        theme: 'colored',
      });
    return (
      !isContactExist &&
      dispatch(contactsOperations.addContacts({ id: uuid(), name, number })) &&
      resetForm()
    );
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  return (
    <div className={styles.contacts}>
      <Form onSubmit={formSubmit}>
        <Form.Group className="mb-2" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            name="name"
            value={name}
            onChange={inputChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="The name can only consist of letters, apostrophes, dashes and spaces. For example, Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan, etc."
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Number</Form.Label>
          <Form.Control
            type="tel"
            name="number"
            value={number}
            placeholder="Enter Number"
            onChange={inputChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </Form.Group>

        <Button
          className={styles.button}
          variant="outline-primary"
          type="submit"
          classMame="ml-5"
        >
          Add contact
        </Button>
      </Form>
    </div>
  );
}
