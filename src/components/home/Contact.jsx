import React from 'react';
import { useForm } from 'react-hook-form';

import Input from '../form/Input';
import Textarea from '../form/Textarea';
import BtnSubmit from '../buttons/BtnSubmit';

export default function Contact() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <section
      data-scroll-section
      className='home-contact w-screen h-screen bg-gradient-to-b xl:bg-gradient-to-tr from-indigo-600 to-indigo-400'
    >
      <div className='container py-5'>
        <div className='flex flex-col items-center'>
          <h1 className='heading-2xl heading-2xl--outline text-white mb-4'>
            Get In Touch
          </h1>

          <form className='w-10/12' onSubmit={handleSubmit(onSubmit)}>
            <div className='flex row space-x-4 mb-4'>
              <span className='w-6/12 column'>
                <Input
                  label='Full Name'
                  placeholder='Your Name'
                  name='fullName'
                  ref={register({ required: 'Required' })}
                  errors={errors}
                />
              </span>

              <span className='w-6/12 column'>
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
              </span>
            </div>

            <span className='block mb-4 w-9/12'>
              <Textarea
                label='Your Message'
                placeholder='Your Message Here'
                name='message'
                ref={register({ required: 'Required' })}
                errors={errors}
              />
            </span>

            <div className='pt-2'>
              <BtnSubmit label='Submit' />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
