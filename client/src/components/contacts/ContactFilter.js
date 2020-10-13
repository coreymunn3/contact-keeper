import React, { useContext, useRef, useEffect } from 'react';
import ContactContext from '../../context/contact/ContactContext';

const ContactFilter = () => {
  // global state
  const contactContext = useContext(ContactContext);
  const { filterContacts, clearFilter, filtered } = contactContext;
  // effect to clear text
  useEffect(() => {
    if (filtered === null) {
      text.current.value = '';
    }
  }, [filtered]);
  // text ref
  const text = useRef('');

  const onChange = (e) => {
    if (text.current.value !== '') {
      filterContacts(e.target.value);
    } else {
      clearFilter();
    }
  };

  return (
    <form>
      <input
        ref={text}
        type='text'
        placeholder='Filter Contacts'
        onChange={onChange}
      ></input>
    </form>
  );
};

export default ContactFilter;
