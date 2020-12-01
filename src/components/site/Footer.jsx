import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Github } from '../../assets/svg/github.svg';
import { ReactComponent as Instagram } from '../../assets/svg/instagram.svg';
import { ReactComponent as Linkedin } from '../../assets/svg/linkedin.svg';

export default function Footer() {
  return (
    <section className='py-5 mt-auto site-footer bg-gray-900'>
      <div className='container'>
        <div className='mx-auto md:flex md:w-8/12 row'>
          <div className='text-center md:w-6/12 column md-max:mb-6'>
            <h5 className='mb-2 text-white copy md-max:hidden'>Site Links</h5>

            <Link
              className='block mb-2 text-white transition-transform duration-300 transform copy cursor-trigger'
              to='/'
            >
              Home
            </Link>
            <Link
              className='block mb-2 text-white transition-transform duration-300 transform copy cursor-trigger'
              to='/skills'
            >
              Skills
            </Link>
            <Link
              className='block mb-2 text-white transition-transform duration-300 transform copy cursor-trigger'
              to='/experience'
            >
              Experience
            </Link>
            <Link
              className='block mb-2 text-white transition-transform duration-300 transform copy cursor-trigger'
              to='/projects'
            >
              Projects
            </Link>
            <Link
              className='block mb-2 text-white transition-transform duration-300 transform copy cursor-trigger'
              to='/contact'
            >
              Contact
            </Link>
          </div>

          <div className='text-center md:w-6/12 column'>
            <h5 className='mb-2 text-white copy md-max:hidden'>Social</h5>

            <div className='flex items-end justify-center'>
              <a
                href='https://www.instagram.com/rmpillar/'
                className='mx-2  transition-transform duration-300 transform cursor-trigger'
              >
                <span className='block text-white site-footer__social'>
                  <Instagram />
                </span>
              </a>

              <a
                href='https://www.linkedin.com/in/robin-pillar-b5500888/'
                className='mx-2 transition-transform duration-300 transform cursor-trigger'
              >
                <span className='block text-white site-footer__social'>
                  <Linkedin />
                </span>
              </a>

              <a
                href='https://github.com/RmPillar'
                className='mx-2 transition-transform duration-300 transform cursor-trigger'
              >
                <span className='block text-white site-footer__social'>
                  <Github />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
