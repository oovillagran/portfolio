import { useFormik } from "formik";
import * as Yup from 'yup';
import { motion as m } from 'framer-motion';
import { useRouter } from "next/navigation";
import {GiNothingToSay} from 'react-icons/gi';
import Image from "next/image";
import '@tailwindcss/forms';

export default function Form() {
  // Router
  const router = useRouter();

  // Formik Logics
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      text: '',
    },

    // validate form
    validationSchema: Yup.object({
      name: Yup.string()
        .max(30, 'Name must be 30 characters or less')
        .required('Name is required'),
      email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
      text: Yup.string()
        .max(500, 'Message must be 500 characters or less')
        .required('Message is required'),
    }),

    // submit form
    onSubmit: (values, { resetForm }) => {
      fetch('https://formspree.io/f/xdovzepk', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      })
        .then(() => {
          resetForm();
          router.push('/success');
        })
        .catch((error) => {
          console.log(error);
        });
    },
  });

  return (
    <m.div
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
      className='absolute w-full'
    >
      <section id='contact' className='h-screen flex items-center justify-center bg-gradient-to-r from-cyan-500 to-teal-500'>
        <form
          onSubmit={formik.handleSubmit}
          className='bg-white flex flex-col md:flex-row rounded-lg font-latoRegular shadow-lg w-11/12'
        >
          <div className='flex-1 text-gray-700 p-5'>
            <div className='flex items-center'>
              <h1 className='text-2xl md:text-3xl font-bold px-2 lg:text-4xl pb-2 font-latoBold text-teal-500'>
                  Let&apos;s connect 
                </h1>
                <GiNothingToSay className='text-4xl text-teal-500'/>
              </div>
              <p className='text-md text-gray-500 dark:text-gray-200'>
                If you have an application you are interested in developing, 
                a feature you need built or a project that needs coding. I&apos;d 
                love to help with it. Feel free to reach out to me. 
                I&apos;ll do my best to get back to you!
              </p>
              <div className='mt-5'>
                {/* Name input field */}
                <div className='pb-4'>
                  <label
                    className={`block font-latoBold text-sm pb-2 ${formik.touched.name && formik.errors.name ? 'text-red-500' : ''} dark:text-gray-200`}
                    htmlFor='name'
                  >
                    {formik.touched.name && formik.errors.name ? formik.errors.name : "Name:"}
                  </label>
                  <input
                    className='border-2 border-gray-500 p-2 text-sm rounded-md w-3/4 lg:w-1/2 focus:border-teal-500 focus:ring-teal-500'
                    type='text'
                    name='name'
                    placeholder='Enter your name'
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </div>
                {/* Email input field */}
                <div className='pb-4'>
                  <label
                    className={`block font-latoBold text-sm pb-2 ${formik.touched.email && formik.errors.email ? 'text-red-500' : ''} dark:text-gray-200`}
                    htmlFor='email'
                  >
                    {formik.touched.email && formik.errors.email ? formik.errors.email : "Email:"}
                  </label>
                  <input
                    className='border-2 border-gray-500 p-2 text-sm rounded-md w-3/4 lg:w-1/2 focus:border-teal-500 focus:ring-teal-500'
                    type='email'
                    name='email' 
                    placeholder='Enter your email'
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </div>
                {/* Text area field */}
                <div className='pb-4'>
                  <label
                    className={`block font-latoBold text-sm pb-2 ${formik.touched.text && formik.errors.text ? 'text-red-500' : ''} dark:text-gray-200`}
                    htmlFor='text'
                  >
                    {formik.touched.text && formik.errors.text ? formik.errors.text : "Write your message:"}
                  </label>
                  <textarea
                    className='border-2 border-gray-500 p-2 text-sm rounded-md w-3/4 lg:w-1/2 focus:border-teal-500 focus:ring-teal-500 h-40'
                    type='textarea'
                    name='text' 
                    placeholder='Write your message here...'
                    style={{ resize: 'none' }}
                    value={formik.values.text}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </div>
                {/* Submit button */}
                <button
                  type='submit'
                  className='bg-teal-500 font-latoBold text-white px-4 py-2 rounded-md'
                >
                  Get in Touch
                </button>
              </div>
            </div>
            <div className='flex-1 relative'>
              <Image src='/form.png' alt="contact-image" fill className='object-cover rounded-lg' />
            </div>
          </form>
        </section>
      </m.div>
  )
}