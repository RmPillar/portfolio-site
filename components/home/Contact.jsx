import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';

import { sendForm } from 'emailjs-com';

import Input from '../form/Input';
import Textarea from '../form/Textarea';
import BtnSubmit from '../buttons/BtnSubmit';
import Loader from '../global/Loader';

export default function Contact() {
  const { register, handleSubmit, errors } = useForm();
  const [form, setForm] = useState();
  const [loading, setLoading] = useState(false);
  const formRef = useRef();

  const onSubmit = () => {
    setLoading(true);
    sendForm(
      'service_1vki1m9',
      'template_56gh6dh',
      formRef.current,
      'user_KwY7DKIDRj2KBKeNhT1fC'
    )
      .then(
        () => {
          setForm(
            'Thanks for getting in touch. I will respond as soon as I can'
          );
        },
        () => {
          setForm('An error has occured, please try again later');
        }
      )
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <section
      data-scroll-section
      className='home-contact max-w-screen w-screen h-screen relative bg-gray-100'
      id='contact'
    >
      <div className='container py-25 h-full flex items-center justify-center'>
        <div className='flex flex-col xl:items-center w-screen'>
          <h1
            className='heading-2xl text-gradient bg-gradient-to-tr from-teal-700 to-teal-300 xl:absolute top-0 inset-x-0 text-center xl:mt-40 xl-max:mb-20'
            data-scroll
            data-scroll-speed={-2}
          >
            Get In Touch
          </h1>

          <form
            className='w-full md:w-10/12 xl:w-8/12 mx-auto xl:mt-100'
            onSubmit={handleSubmit(onSubmit)}
            ref={formRef}
          >
            <div className='xl:flex row xl-max:space-y-10 xl:space-x-20 mb-10 xl:mb-20'>
              <div className='xl:w-6/12 column'>
                <Input
                  label='Full Name'
                  placeholder='Your Name'
                  name='fullName'
                  ref={register({ required: 'Required' })}
                  errors={errors}
                />
              </div>

              <div className='xl:w-6/12 column'>
                <Input
                  label='Email'
                  placeholder='youremail@email.com'
                  name='email'
                  ref={register({
                    required: 'Required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'invalid email address',
                    },
                  })}
                  errors={errors}
                />
              </div>
            </div>

            <span className='block mb-20'>
              <Textarea
                label='Your Message'
                placeholder='Your Message Here'
                name='message'
                ref={register({ required: 'Required' })}
                errors={errors}
              />
            </span>

            <div className='pt-2 xl:flex items-center'>
              <BtnSubmit label='Submit' />
              {form && <span className='form-label ml-20'>{form}</span>}
              <span className='ml-20'>{loading && <Loader />}</span>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
