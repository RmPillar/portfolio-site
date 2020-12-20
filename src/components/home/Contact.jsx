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

  const onSubmit = (data) => {
    setLoading(true);
    sendForm(
      'service_1vki1m9',
      'template_56gh6dh',
      formRef.current,
      'user_KwY7DKIDRj2KBKeNhT1fC'
    )
      .then(
        (result) => {
          setForm(
            'Thanks for getting in touch. I will respond as soon as I can'
          );
        },
        (error) => {
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
      className='home-contact w-screen h-screen bg-gradient-to-t xl:bg-gradient-to-tr from-indigo-600 to-indigo-400'
    >
      <div className='container py-5'>
        <div className='flex flex-col xl:items-center'>
          <h1 className='heading-2xl heading-2xl--outline text-white mb-4'>
            Get In Touch
          </h1>

          <form
            className='w-full md:w-10/12'
            onSubmit={handleSubmit(onSubmit)}
            ref={formRef}
          >
            <div className='xl:flex row xl-max:space-y-2 xl:space-x-4 mb-2 xl:mb-4'>
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

            <span className='block mb-4'>
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
              {form && <span className='form-label ml-4'>{form}</span>}
              <span className='ml-4'>{loading && <Loader />}</span>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
