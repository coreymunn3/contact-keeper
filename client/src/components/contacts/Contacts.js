import React, { useContext, Fragment } from 'react';
// components
import ContactItem from './ContactItem';
// state
import ContactContext from '../../context/contact/ContactContext';

const Contacts = () => {
  const contactContext = useContext(ContactContext);
  const { contacts } = contactContext;
  return (
    <Fragment>
      {contacts.map((contact) => (
        <ContactItem contact={contact} key={contact.id} />
      ))}
    </Fragment>
  );
};

export default Contacts;
