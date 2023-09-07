'use client';
import Head from 'next/head';
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillTwitterCircle, AiFillGithub, AiFillLinkedin, AiFillInstagram, AiFillMediumCircle} from 'react-icons/ai';
import Image from 'next/image';
import oscardev from '../public/ovg-avatar.png';
import design from '../public/design.png';
import code from '../public/code.png';
import consulting from '../public/consulting.png';
import web1 from '../public/web1.png';
import web2 from '../public/web2.png';
import web3 from '../public/web3.png';
import web4 from '../public/web4.png';
import web5 from '../public/EasyClinics.png';
import web6 from '../public/EasyClinics-Appointment.png';
import { useState } from 'react';
import '@tailwindcss/forms';
import formImage from '../public/form.png';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useRouter } from 'next/navigation';
// import { useSearchParams } from 'next/navigation';
// import { usePathname } from 'next/navigation';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  // const pathname = usePathname();


  // Router
  const router = useRouter();

  // Formic Logics
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      text: '',
    },

    // validate form
    validationSchema: Yup.object({
      name: Yup.string().max(20, 'Name must be 20 characters or less').required('Name is Required'),
      email: Yup.string().email('Invalid email address').required('Email is Required'),
      text: Yup.string().max(300, 'Message must be 300 characters or less').required('Message is Required'),
    }),

    // Submit form
    onSubmit: (values) => {
      console.log(values);
      router.push('/success');
    },
  });

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Oscar Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900'>
        <section className="min-h-screen">
          <nav className='py-10 mb-12 flex justify-between'>
            <h1 className='text-xl font-burtons dark:text-gray-200'>alfa&omega</h1>
            <ul className='flex items-center'>
              <li>
                <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className='cursor-pointer text-2xl dark:text-gray-200'/>
              </li>
              <li><a className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8" href="#">Resume</a></li>
              <li><a className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8" href="#contact">Contact</a></li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className='text-5xl py-2 text-teal-600 font-bold md:text-6xl'>Hi, I'm Oscar</h2>
            <h3 className='text-2xl py-2 font-bold mb-4 md:text-3xl dark:text-gray-200'>Software developer</h3>
            <p className='text-md py-5 leading-8 mb-4 text-gray-800 md:text-xl max-w-xl mx-auto dark:text-gray-200'>I'm a software engineer based in Santo Domingo, Ecuador. I have a passion for creating beautiful and functional websites and applications. Join me down below and let's get in touch!</p>
          </div>
          <div className="text-3xl flex justify-center gap-8 py-3 text-gray-600">
            <AiFillTwitterCircle className='dark:text-gray-200'/>
            <AiFillGithub className='dark:text-gray-200' />
            <AiFillLinkedin className='dark:text-gray-200' />
            <AiFillInstagram className='dark:text-gray-200' />
            <AiFillMediumCircle className='dark:text-gray-200' />
          </div>
          <div className="relative bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 mx-auto overflow-hidden md:h-96 md:w-96">
            <Image className='w-32 h-32 mx-auto my-4' src={oscardev} alt="emoticon" layout='fill' objectFit='cover' objectPosition='center' />
          </div>
        </section>
        {/* second section */}
        <section className='py-10'>
          <div className="text-center p-10">
            <h3 className="text-3xl py-1 dark:text-gray-200">
              Services I offer
            </h3>
            <p className="text-md py-2 leading-8 mb-4 text-gray-800 md:text-xl dark:text-gray-200">
              Since the beginning of my journey as a software developer, 
              I've done <span className="text-teal-500 font-bold">remote 
              work</span>, doing <span className="text-teal-500 font-bold">pair-programming</span>, 
              and <span className="text-teal-500 font-bold">collaborated </span> 
              with talented people from all over the world.
            </p>
            <p className="text-md py-2 leading-8 mb-4 text-gray-800 md:text-xl dark:text-gray-200">
              I offer from a wide range of services, including programming and teaching.
            </p>
          </div>
          <div className='lg:flex gap-10'>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
              <Image src={design} width={100} height={100} className="mx-auto" />
              <h3 className="text-lg font-medium pt-8 pb-2">Beautiful Designs</h3>
              <p className="py-2 md:text-xl">
                Creating elegant designs suited for your needs design.
              </p>
              <h4 className="py-4 text-teal-600">Designs tools I use</h4>
              <ul>
                <li className="text-gray-800 py-1">Figma</li>
                <li className="text-gray-800 py-1">Adobe XD</li>
                <li className="text-gray-800 py-1">Adobe Photoshop</li>
              </ul>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
                <Image src={consulting} width={100} height={100} className="mx-auto" />
              <h3 className="text-lg font-medium pt-8 pb-2">Beautiful Designs</h3>
              <p className="py-2 md:text-xl">
                Creating elegant designs suited for your needs design.
              </p>
              <h4 className="py-4 text-teal-600">Designs tools I use</h4>
              <ul>
                <li className="text-gray-800 py-1">Figma</li>
                <li className="text-gray-800 py-1">Adobe XD</li>
                <li className="text-gray-800 py-1">Adobe Photoshop</li>
              </ul>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
                <Image src={code} width={100} height={100} className="mx-auto" />
              <h3 className="text-lg font-medium pt-8 pb-2">Beautiful Designs</h3>
              <p className="py-2 md:text-xl">
                Creating elegant designs suited for your needs design.
              </p>
              <h4 className="py-4 text-teal-600">Designs tools I use</h4>
              <ul>
                <li className="text-gray-800 py-1">Figma</li>
                <li className="text-gray-800 py-1">Adobe XD</li>
                <li className="text-gray-800 py-1">Adobe Photoshop</li>
              </ul>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl text-center py-1 dark:text-gray-200">Portfolio</h3>
            <p className="text-md py-2 leading-8 mb-4 text-gray-800 md:text-xl dark:text-gray-200">
              Since the beginning of my journey as a software developer, 
              I've done <span className="text-teal-500 font-bold">remote 
              work</span>, doing <span className="text-teal-500 font-bold">pair-programming</span>, 
              and <span className="text-teal-500 font-bold">collaborated </span> 
              with talented people from all over the world.
            </p>
            <p className="text-md py-2 leading-8 mb-4 text-gray-800 md:text-xl dark:text-gray-200">
              I offer from a wide range of services, including programming and teaching.
            </p>
          </div>
          <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
            <div className="basis-1/3 flex-1">
              <Image src={web1} className='rounded-lg object-cover' width={'100%'} height={'100%'} layout="responsive" />
            </div>
            <div className="basis-1/3 flex-1">
              <Image src={web2} className='rounded-lg object-cover' width={'100%'} height={'100%'} layout="responsive" />
            </div>
            <div className="basis-1/3 flex-1">
              <Image src={web3} className='rounded-lg object-cover' width={'100%'} height={'100%'} layout="responsive" />
            </div>
            <div className="basis-1/3 flex-1">
              <Image src={web4} className='rounded-lg object-cover' width={'100%'} height={'100%'} layout="responsive" />
            </div>
            <div className="basis-1/3 flex-1">
              <Image src={web5} className='rounded-lg object-cover' width={'100%'} height={'100%'} layout="responsive" />
            </div>
            <div className="basis-1/3 flex-1">
              <Image src={web6} className='rounded-lg object-cover' width={'100%'} height={'100%'} layout="responsive" />
            </div>
          </div>
        </section>

      </main>
      <section id='contact' className='h-screen flex items-center justify-center bg-gradient-to-l from-cyan-500 to-teal-500'>
        <form
          onSubmit={formik.handleSubmit}
          className='bg-white flex flex-col md:flex-row rounded-lg w-3/4 font-latoRegular'
        >
          <div className='flex-1 text-gray-700 p-10'>
            <h1 className='text-2xl md:text-4xl lg:text-5xl pb-4 font-latoBold'>
              Let's connect 🤝
            </h1>
            <p className='text-md text-gray-500'>
              If you have an application you are interested in developing, 
              a feature you need built, or a project that needs coding. I'd 
              love to help with it. Feel free to reach out to me. 
              I'll do my best to get back to you!
            </p>
            <div className='mt-6'>
              {/* Name input field */}
              <div className='pb-4'>
                <label
                  className={`block font-latoBold text-sm pb-2 ${formik.touched.name && formik.errors.name ? 'text-red-500' : ''}`}
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
                  className={`block font-latoBold text-sm pb-2 ${formik.touched.email && formik.errors.email ? 'text-red-500' : ''}`}
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
                  className={`block font-latoBold text-sm pb-2 ${formik.touched.text && formik.errors.text ? 'text-red-500' : ''}`}
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
            <Image src={formImage} alt="image" fill className='object-cover rounded-lg' />
          </div>
        </form>
      </section>
    </div>
  );
}
