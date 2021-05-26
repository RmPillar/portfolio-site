import React, { useRef, useState } from 'react';

import Input from '../form/Input';
import Textarea from '../form/Textarea';
import BtnSubmit from '../buttons/BtnSubmit';
import Loader from '../global/Loader';

import { useForm } from 'react-hook-form';
import { sendForm } from 'emailjs-com';

function ContactForm() {
  const { register, handleSubmit, errors } = useForm();
  const formRef = useRef();
  const [form, setForm] = useState();
  const [loading, setLoading] = useState(false);

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
    <section className='home-contactForm w-full'>
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
    </section>
  );
}

export default ContactForm;
