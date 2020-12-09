import React from 'react';
import Me from '../../assets/img/robin-pillar.jpg';

export default function ImageContent({ componentID }) {
  return (
    <section
      id={componentID}
      className='global-imageContent'
      data-scroll-section
    >
      <div className='flex row'>
        <div
          className='column w-6/12 global-imageContent__image h-screen flex items-center'
          data-scroll
          data-scroll-target='.global-imageContent__body'
          data-scroll-sticky
        >
          <figure>
            <img src={Me} alt='Me' />
          </figure>
        </div>
        <div className='column w-6/12 global-imageContent__body'>
          <p className='copy mb-2'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lacus
            vestibulum sed arcu non. Sed faucibus turpis in eu mi bibendum. Eget
            felis eget nunc lobortis mattis aliquam. Augue interdum velit
            euismod in pellentesque. Cras sed felis eget velit aliquet. Mauris
            pharetra et ultrices neque ornare aenean. Massa enim nec dui nunc
            mattis enim ut. Sed felis eget velit aliquet sagittis id consectetur
            purus. Senectus et netus et malesuada fames ac turpis egestas.
            Turpis egestas pretium aenean pharetra magna ac placerat vestibulum.
            Habitasse platea dictumst quisque sagittis purus sit. Tempus
            imperdiet nulla malesuada pellentesque elit. Suscipit tellus mauris
            a diam. Risus at ultrices mi tempus imperdiet. Aliquam ut porttitor
            leo a diam sollicitudin tempor. A condimentum vitae sapien
            pellentesque. Sed adipiscing diam donec adipiscing tristique risus
            nec feugiat in. Libero justo laoreet sit amet cursus sit.
          </p>
          <p className='copy mb-2'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lacus
            vestibulum sed arcu non. Sed faucibus turpis in eu mi bibendum. Eget
            felis eget nunc lobortis mattis aliquam. Augue interdum velit
            euismod in pellentesque. Cras sed felis eget velit aliquet. Mauris
            pharetra et ultrices neque ornare aenean. Massa enim nec dui nunc
            mattis enim ut. Sed felis eget velit aliquet sagittis id consectetur
            purus. Senectus et netus et malesuada fames ac turpis egestas.
            Turpis egestas pretium aenean pharetra magna ac placerat vestibulum.
            Habitasse platea dictumst quisque sagittis purus sit. Tempus
            imperdiet nulla malesuada pellentesque elit. Suscipit tellus mauris
            a diam. Risus at ultrices mi tempus imperdiet. Aliquam ut porttitor
            leo a diam sollicitudin tempor. A condimentum vitae sapien
            pellentesque. Sed adipiscing diam donec adipiscing tristique risus
            nec feugiat in. Libero justo laoreet sit amet cursus sit.
          </p>
          <p className='copy mb-2'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lacus
            vestibulum sed arcu non. Sed faucibus turpis in eu mi bibendum. Eget
            felis eget nunc lobortis mattis aliquam. Augue interdum velit
            euismod in pellentesque. Cras sed felis eget velit aliquet. Mauris
            pharetra et ultrices neque ornare aenean. Massa enim nec dui nunc
            mattis enim ut. Sed felis eget velit aliquet sagittis id consectetur
            purus. Senectus et netus et malesuada fames ac turpis egestas.
            Turpis egestas pretium aenean pharetra magna ac placerat vestibulum.
            Habitasse platea dictumst quisque sagittis purus sit. Tempus
            imperdiet nulla malesuada pellentesque elit. Suscipit tellus mauris
            a diam. Risus at ultrices mi tempus imperdiet. Aliquam ut porttitor
            leo a diam sollicitudin tempor. A condimentum vitae sapien
            pellentesque. Sed adipiscing diam donec adipiscing tristique risus
            nec feugiat in. Libero justo laoreet sit amet cursus sit.
          </p>
        </div>
      </div>
    </section>
  );
}
