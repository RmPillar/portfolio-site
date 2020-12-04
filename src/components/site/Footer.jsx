import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Github } from '../../assets/svg/github.svg';
import { ReactComponent as Instagram } from '../../assets/svg/instagram.svg';
import { ReactComponent as Linkedin } from '../../assets/svg/linkedin.svg';

export default function Footer() {
  return (
    <section
      className='py-5 mt-auto site-footer bg-gray-200'
      data-scroll-section
    >
      <div className='container'>
        <div className='md:flex row'>
          <Link
            className='block mb-2 text-gray-900 copy cursor-trigger column'
            to='/'
          >
            Robin Pillar
          </Link>

          <div className='text-center column ml-auto'>
            <a
              href='https://www.instagram.com/rmpillar/'
              className='mx-2  cursor-trigger'
            >
              <span className='block text-gray-900 site-footer__social'>
                <Instagram />
              </span>
            </a>

            <a
              href='https://www.linkedin.com/in/robin-pillar-b5500888/'
              className='mx-2 cursor-trigger'
            >
              <span className='block text-gray-900 site-footer__social'>
                <Linkedin />
              </span>
            </a>

            <a
              href='https://github.com/RmPillar'
              className='mx-2 cursor-trigger'
            >
              <span className='block text-gray-900 site-footer__social'>
                <Github />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
