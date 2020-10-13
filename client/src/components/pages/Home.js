import React from 'react';
// components
import ContactForm from '../contacts/ContactForm';
import Contacts from '../contacts/Contacts';
import ContactFilter from '../contacts/ContactFilter';

const Home = () => {
  return (
    <div className='grid-2'>
      <div>
        <ContactForm />
      </div>
      <div>
        <h2 className='text-primary'>View + Filter Contacts</h2>
        <ContactFilter />
        <Contacts />
      </div>
    </div>
  );
};

export default Home;
