import React from 'react';

import ScrollSection from './ScrollSection';
import ContactForm from './ContactForm';

export default function Contact() {
  return (
    <ScrollSection
      heading='Get In Touch'
      id='contact'
      theme='teal'
      classes='home-contact min-w-screen'
    >
      <ContactForm />
    </ScrollSection>
  );
}
