import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { contactsSelectors, filter } from '../../redux/contacts';
import { Form } from 'react-bootstrap';
import styles from './FilterContact.module.css';

export default function Filter() {
  const value = useSelector(state => contactsSelectors.getFilter(state));
  const dispatch = useDispatch();
  return (
    <div className={styles.filter}>
      <Form.Group className="mb-2" controlId="formBasicEmail">
        <Form.Label>Search</Form.Label>
        <Form.Control
          className={styles.filter_input}
          type="text"
          name="filter"
          value={value}
          onChange={e => dispatch(filter(e.currentTarget.value))}
          placeholder="Enter name for Search"
        />
      </Form.Group>
    </div>
  );
}
