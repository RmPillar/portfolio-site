import React from 'react';

import BtnMenu from '../buttons/BtnMenu';

export default function Header() {
  return (
    <section className='site-header fixed top-0 inset-x-0 z-40'>
      <div className='flex row mx-6 items-center'>
        <BtnMenu classes='z-30 relative ml-auto pt-6' />
      </div>
    </section>
  );
}
