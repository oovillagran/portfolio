'use client';
import Head from 'next/head';
import Image from 'next/image';
import oscardev from '../public/ovg-avatar.png';
import languages from '../public/languages1.jpg';
import framework from '../public/framework.jpg';
import skills from '../public/skills.jpg';
import web6 from '../public/EasyClinics-Appointment.png';
import '@tailwindcss/forms';
import formImage from '../public/form.png';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useRouter } from 'next/navigation';
import { motion as m } from 'framer-motion';
import Navbar from './components/navbar';
import { useDarkMode } from './DarkModeContext';
import Connect from './components/Connect';
import {AiFillGithub, AiFillHtml5} from 'react-icons/ai';
import {BiLogoCss3, BiLogoJavascript, BiLogoPostgresql, BiLogoTailwindCss, BiLogoReact, BiLogoRedux} from 'react-icons/bi';
import {DiRuby, DiBootstrap} from 'react-icons/di';
import {SiRubyonrails} from 'react-icons/si';
import {GiNothingToSay} from 'react-icons/gi';
import {LuArrowDownRightFromCircle} from 'react-icons/lu'

export default function Home() {
  const { darkMode } = useDarkMode();

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

      <main className='bg-white px-5 md:px-10 dark:bg-gray-900'>
        <section className="min-h-screen">
          <Navbar />
          <div className="text-center p-10 py-15">
            <h2 className='text-5xl py-2 text-teal-600 font-bold md:text-6xl'>Hi, I'm Oscar</h2>
            <h3 className='text-2xl py-2 font-bold mb-4 md:text-3xl dark:text-gray-200'>Software developer</h3>
            <p className='text-md py-5 leading-8 text-gray-800 md:text-xl mx-auto dark:text-gray-200'>
              I'm a software engineer based in Santo Domingo, Ecuador. I have a passion 
              for creating beautiful and functional websites and applications. 
              Join me down below and let's get in touch!</p>
          </div>
          <Connect />
          <div className="relative bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 mx-auto overflow-hidden md:h-96 md:w-96">
            <Image className='w-32 h-32 mx-auto my-4' src={oscardev} alt="emoticon" layout='fill' objectFit='cover' objectPosition='center' />
          </div>
        </section>
        {/* second section */}
        <section id='portfolio' className='py-20'>
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
            <div className='flex flex-col gap-10 py-10 md:flex-row md:flex-wrap min-h-screen items-center justify-center bg-slate-100'>
              <div className='group h-96 w-96 [perspective:1000px]'>
                <div className='relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(360deg)]'>
                  <div className='absolute inset-0'>
                    <Image src={web6} className='w-full h-full rounded-xl object-cover shadow-xl shadow-black/40' />
                  </div>
                  <div className='absolute inset-0 h-full w-full rounded-xl bg-black/60 px-12 text-center text-slate-200 [transform:rotateY(360deg)] transition-opacity opacity-0 group-hover:opacity-100'>
                    <div className='flex min-h-full flex-col items-center justify-center'>
                      <h1 className='text-3xl font-bold text-teal-200'>
                        Easy Clinics
                      </h1>
                      <p className='text-lg'>
                        FrontEnd and BackEnd App
                      </p>
                      <p className='text-base'>
                        This awesome app allows you to make an appointment with your favorite doctor in your preferred city.
                      </p>
                      <div className='flex justify-between w-full'>
                        <button className='mt-2 rounded-md bg-gradient-to-l from-cyan-500 to-teal-600 py-1 px-2 text-sm hover:text-gray-800 transition-transform transform hover:scale-110'>
                          See Live
                          <LuArrowDownRightFromCircle className='inline-block ml-2 text-xl' />
                        </button>
                        <button className='mt-2 rounded-md bg-gradient-to-l from-cyan-500 to-teal-600 py-1 px-2 text-sm hover:text-gray-800 transition-transform transform hover:scale-110'>
                          See Source
                          <AiFillGithub className='inline-block ml-2 text-xl' />
                        </button>
                      </div>
                      <div className='flex items-center flex-wrap py-5 justify-center'>
                        <p className='text-sm bg-teal-500 px-2 py-1 mr-5 mb-2 rounded-full text-white'>
                          React
                        </p>
                        <p className='text-sm bg-teal-500 px-2 py-1 mr-5 mb-2 rounded-full text-white'>
                          Redux
                        </p>
                        <p className='text-sm bg-teal-500 px-2 py-1 mr-5 mb-2 rounded-full text-white'>
                          Rails
                        </p>
                        <p className='text-sm bg-teal-500 px-2 py-1 mr-5 mb-2 rounded-full text-white'>
                          PostgreSQL
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='group h-96 w-96 [perspective:1000px]'>
                <div className='relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(360deg)]'>
                  <div className='absolute inset-0'>
                    <Image src={web6} className='w-full h-full rounded-xl object-cover shadow-xl shadow-black/40' />
                  </div>
                  <div className='absolute inset-0 h-full w-full rounded-xl bg-black/60 px-12 text-center text-slate-200 [transform:rotateY(360deg)] transition-opacity opacity-0 group-hover:opacity-100'>
                    <div className='flex min-h-full flex-col items-center justify-center'>
                      <h1 className='text-3xl font-bold text-teal-200'>
                        Easy Clinics
                      </h1>
                      <p className='text-lg'>
                        FrontEnd and BackEnd App
                      </p>
                      <p className='text-base'>
                        This awesome app allows you to make an appointment with your favorite doctor in your preferred city.
                      </p>
                      <div className='flex justify-between w-full'>
                        <button className='mt-2 rounded-md bg-gradient-to-l from-cyan-500 to-teal-600 py-1 px-2 text-sm hover:text-gray-800 transition-transform transform hover:scale-110'>
                          See Live
                          <LuArrowDownRightFromCircle className='inline-block ml-2 text-xl' />
                        </button>
                        <button className='mt-2 rounded-md bg-gradient-to-l from-cyan-500 to-teal-600 py-1 px-2 text-sm hover:text-gray-800 transition-transform transform hover:scale-110'>
                          See Source
                          <AiFillGithub className='inline-block ml-2 text-xl' />
                        </button>
                      </div>
                      <div className='flex items-center flex-wrap py-5 justify-center'>
                        <p className='text-sm bg-teal-500 px-2 py-1 mr-5 mb-2 rounded-full text-white'>
                          React
                        </p>
                        <p className='text-sm bg-teal-500 px-2 py-1 mr-5 mb-2 rounded-full text-white'>
                          Redux
                        </p>
                        <p className='text-sm bg-teal-500 px-2 py-1 mr-5 mb-2 rounded-full text-white'>
                          Rails
                        </p>
                        <p className='text-sm bg-teal-500 px-2 py-1 mr-5 mb-2 rounded-full text-white'>
                          PostgreSQL
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='group h-96 w-96 [perspective:1000px]'>
                <div className='relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(360deg)]'>
                  <div className='absolute inset-0'>
                    <Image src={web6} className='w-full h-full rounded-xl object-cover shadow-xl shadow-black/40' />
                  </div>
                  <div className='absolute inset-0 h-full w-full rounded-xl bg-black/60 px-12 text-center text-slate-200 [transform:rotateY(360deg)] transition-opacity opacity-0 group-hover:opacity-100'>
                    <div className='flex min-h-full flex-col items-center justify-center'>
                      <h1 className='text-3xl font-bold text-teal-200'>
                        Easy Clinics
                      </h1>
                      <p className='text-lg'>
                        FrontEnd and BackEnd App
                      </p>
                      <p className='text-base'>
                        This awesome app allows you to make an appointment with your favorite doctor in your preferred city.
                      </p>
                      <div className='flex justify-between w-full'>
                        <button className='mt-2 rounded-md bg-gradient-to-l from-cyan-500 to-teal-600 py-1 px-2 text-sm hover:text-gray-800 transition-transform transform hover:scale-110'>
                          See Live
                          <LuArrowDownRightFromCircle className='inline-block ml-2 text-xl' />
                        </button>
                        <button className='mt-2 rounded-md bg-gradient-to-l from-cyan-500 to-teal-600 py-1 px-2 text-sm hover:text-gray-800 transition-transform transform hover:scale-110'>
                          See Source
                          <AiFillGithub className='inline-block ml-2 text-xl' />
                        </button>
                      </div>
                      <div className='flex items-center flex-wrap py-5 justify-center'>
                        <p className='text-sm bg-teal-500 px-2 py-1 mr-5 mb-2 rounded-full text-white'>
                          React
                        </p>
                        <p className='text-sm bg-teal-500 px-2 py-1 mr-5 mb-2 rounded-full text-white'>
                          Redux
                        </p>
                        <p className='text-sm bg-teal-500 px-2 py-1 mr-5 mb-2 rounded-full text-white'>
                          Rails
                        </p>
                        <p className='text-sm bg-teal-500 px-2 py-1 mr-5 mb-2 rounded-full text-white'>
                          PostgreSQL
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='group h-96 w-96 [perspective:1000px]'>
                <div className='relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(360deg)]'>
                  <div className='absolute inset-0'>
                    <Image src={web6} className='w-full h-full rounded-xl object-cover shadow-xl shadow-black/40' />
                  </div>
                  <div className='absolute inset-0 h-full w-full rounded-xl bg-black/60 px-12 text-center text-slate-200 [transform:rotateY(360deg)] transition-opacity opacity-0 group-hover:opacity-100'>
                    <div className='flex min-h-full flex-col items-center justify-center'>
                      <h1 className='text-3xl font-bold text-teal-200'>
                        Easy Clinics
                      </h1>
                      <p className='text-lg'>
                        FrontEnd and BackEnd App
                      </p>
                      <p className='text-base'>
                        This awesome app allows you to make an appointment with your favorite doctor in your preferred city.
                      </p>
                      <div className='flex justify-between w-full'>
                        <button className='mt-2 rounded-md bg-gradient-to-l from-cyan-500 to-teal-600 py-1 px-2 text-sm hover:text-gray-800 transition-transform transform hover:scale-110'>
                          See Live
                          <LuArrowDownRightFromCircle className='inline-block ml-2 text-xl' />
                        </button>
                        <button className='mt-2 rounded-md bg-gradient-to-l from-cyan-500 to-teal-600 py-1 px-2 text-sm hover:text-gray-800 transition-transform transform hover:scale-110'>
                          See Source
                          <AiFillGithub className='inline-block ml-2 text-xl' />
                        </button>
                      </div>
                      <div className='flex items-center flex-wrap py-5 justify-center'>
                        <p className='text-sm bg-teal-500 px-2 py-1 mr-5 mb-2 rounded-full text-white'>
                          React
                        </p>
                        <p className='text-sm bg-teal-500 px-2 py-1 mr-5 mb-2 rounded-full text-white'>
                          Redux
                        </p>
                        <p className='text-sm bg-teal-500 px-2 py-1 mr-5 mb-2 rounded-full text-white'>
                          Rails
                        </p>
                        <p className='text-sm bg-teal-500 px-2 py-1 mr-5 mb-2 rounded-full text-white'>
                          PostgreSQL
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='group h-96 w-96 [perspective:1000px]'>
                <div className='relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(360deg)]'>
                  <div className='absolute inset-0'>
                    <Image src={web6} className='w-full h-full rounded-xl object-cover shadow-xl shadow-black/40' />
                  </div>
                  <div className='absolute inset-0 h-full w-full rounded-xl bg-black/60 px-12 text-center text-slate-200 [transform:rotateY(360deg)] transition-opacity opacity-0 group-hover:opacity-100'>
                    <div className='flex min-h-full flex-col items-center justify-center'>
                      <h1 className='text-3xl font-bold text-teal-200'>
                        Easy Clinics
                      </h1>
                      <p className='text-lg'>
                        FrontEnd and BackEnd App
                      </p>
                      <p className='text-base'>
                        This awesome app allows you to make an appointment with your favorite doctor in your preferred city.
                      </p>
                      <div className='flex justify-between w-full'>
                        <button className='mt-2 rounded-md bg-gradient-to-l from-cyan-500 to-teal-600 py-1 px-2 text-sm hover:text-gray-800 transition-transform transform hover:scale-110'>
                          See Live
                          <LuArrowDownRightFromCircle className='inline-block ml-2 text-xl' />
                        </button>
                        <button className='mt-2 rounded-md bg-gradient-to-l from-cyan-500 to-teal-600 py-1 px-2 text-sm hover:text-gray-800 transition-transform transform hover:scale-110'>
                          See Source
                          <AiFillGithub className='inline-block ml-2 text-xl' />
                        </button>
                      </div>
                      <div className='flex items-center flex-wrap py-5 justify-center'>
                        <p className='text-sm bg-teal-500 px-2 py-1 mr-5 mb-2 rounded-full text-white'>
                          React
                        </p>
                        <p className='text-sm bg-teal-500 px-2 py-1 mr-5 mb-2 rounded-full text-white'>
                          Redux
                        </p>
                        <p className='text-sm bg-teal-500 px-2 py-1 mr-5 mb-2 rounded-full text-white'>
                          Rails
                        </p>
                        <p className='text-sm bg-teal-500 px-2 py-1 mr-5 mb-2 rounded-full text-white'>
                          PostgreSQL
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='group h-96 w-96 [perspective:1000px]'>
                <div className='relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(360deg)]'>
                  <div className='absolute inset-0'>
                    <Image src={web6} className='w-full h-full rounded-xl object-cover shadow-xl shadow-black/40' />
                  </div>
                  <div className='absolute inset-0 h-full w-full rounded-xl bg-black/60 px-12 text-center text-slate-200 [transform:rotateY(360deg)] transition-opacity opacity-0 group-hover:opacity-100'>
                    <div className='flex min-h-full flex-col items-center justify-center'>
                      <h1 className='text-3xl font-bold text-teal-200'>
                        Easy Clinics
                      </h1>
                      <p className='text-lg'>
                        FrontEnd and BackEnd App
                      </p>
                      <p className='text-base'>
                        This awesome app allows you to make an appointment with your favorite doctor in your preferred city.
                      </p>
                      <div className='flex justify-between w-full'>
                        <button className='mt-2 rounded-md bg-gradient-to-l from-cyan-500 to-teal-600 py-1 px-2 text-sm hover:text-gray-800 transition-transform transform hover:scale-110'>
                          See Live
                          <LuArrowDownRightFromCircle className='inline-block ml-2 text-xl' />
                        </button>
                        <button className='mt-2 rounded-md bg-gradient-to-l from-cyan-500 to-teal-600 py-1 px-2 text-sm hover:text-gray-800 transition-transform transform hover:scale-110'>
                          See Source
                          <AiFillGithub className='inline-block ml-2 text-xl' />
                        </button>
                      </div>
                      <div className='flex items-center flex-wrap py-5 justify-center'>
                        <p className='text-sm bg-teal-500 px-2 py-1 mr-5 mb-2 rounded-full text-white'>
                          React
                        </p>
                        <p className='text-sm bg-teal-500 px-2 py-1 mr-5 mb-2 rounded-full text-white'>
                          Redux
                        </p>
                        <p className='text-sm bg-teal-500 px-2 py-1 mr-5 mb-2 rounded-full text-white'>
                          Rails
                        </p>
                        <p className='text-sm bg-teal-500 px-2 py-1 mr-5 mb-2 rounded-full text-white'>
                          PostgreSQL
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </section>
      {/* About me */}
      <section id='about' className='py-1'>
          <div className="text-center p-15">
            <h3 className="text-3xl py-1 dark:text-teal-500 font-bold my-10">
              About me
            </h3>
            <p className="text-md py-2 leading-6 mb-4 text-gray-800 md:text-xl dark:text-gray-200">
              Since the beginning of my journey as a software developer, 
              I've done <span className="text-teal-500 font-bold">remote 
              work</span>, doing <span className="text-teal-500 font-bold">pair-programming</span>, 
              and <span className="text-teal-500 font-bold">collaborated </span> 
              with talented people from all over the world.
            </p>
            <p className="text-md py-2 leading-6 mb-4 text-gray-800 md:text-xl dark:text-gray-200">
            I can help you build a product , feature or website. Look through some of my work and experience!
            <br /> 
            If you like what you see and have a project you need coded, don’t hesitate to contact me.
            </p>
          </div>
          <Connect />
          <div className='py-5'>
            <p className='transition-transform transform hover:scale-105'><a className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8 hover:text-gray-800" href="#">Get my resume</a></p>
          </div>
          <div className='lg:flex gap-10'>
            <div className="md:w-1/3 text-center shadow-lg p-10 rounded-xl my-10 mx-10 md:mx-0 dark:bg-white">
              <Image src={languages} width={200} height={200} className="mx-auto rounded-full" objectFit='cover' />
              <h3 className="text-lg font-medium pt-8 pb-2">Languages</h3>
              <p className="py-2 md:text-xl">
                Creating elegant and practical app suited for your needs.
              </p>
              <h4 className="py-4 text-teal-600">Languages I use</h4>
              <ul className='flex text-center items-center justify-center flex-wrap mx-auto'>
                <li className="text-gray-800 py-1 flex justify-center pr-5">
                  <p className='text-sm bg-teal-500 px-2 py-1 rounded-full text-white'>
                    HTML
                  </p>
                  <AiFillHtml5 className='text-3xl text-center text-teal-600' />
                </li>
                <li className="text-gray-800 py-1 flex justify-center pr-5">
                  <p className='text-sm bg-teal-500 px-2 py-1 rounded-full text-white'>
                    CSS
                  </p>
                  <BiLogoCss3 className='text-3xl text-center text-teal-600' />
                </li>
                <li className="text-gray-800 py-1 flex justify-center pr-5">
                  <p className='text-sm bg-teal-500 px-2 py-1 rounded-full text-white'>
                    JavaScript
                  </p>
                  <BiLogoJavascript className='text-3xl text-teal-600' />
                </li>
                <li className="text-gray-800 py-1 flex justify-center pr-5">
                  <p className='text-sm bg-teal-500 px-2 py-1 rounded-full text-white'>
                    PostgreSQL
                  </p>
                  <BiLogoPostgresql className='text-3xl text-teal-600' />
                </li>
                <li className="text-gray-800 flex justify-center py-1 pr-5">
                  <p className='text-sm bg-teal-500 px-2 py-1 rounded-full text-white'>
                    Ruby
                  </p>
                  <DiRuby className='text-3xl text-teal-600'/>
                </li>
              </ul>
            </div>
            <div className="md:w-1/3 text-center shadow-lg p-10 rounded-xl my-10 mx-10 md:mx-0 dark:bg-white">
              <Image src={framework} width={200} height={200} className="rounded-full mx-auto" />
              <h3 className="text-lg font-medium pt-8 pb-2">Frameworks</h3>
              <p className="py-2 md:text-xl">
                Creating awesome and practical apps.
              </p>
              <h4 className="py-4 text-teal-600">Frameworks I use</h4>
              <ul className='flex text-center items-center justify-center flex-wrap mx-auto'>
                <li className="text-gray-800 py-1 flex justify-center pr-5">
                  <p className='text-sm bg-teal-500 px-2 py-1 rounded-full text-white'>
                    Bootstrap
                  </p>
                  <DiBootstrap className='text-3xl text-center text-teal-600' />
                </li>
                <li className="text-gray-800 py-1 flex justify-center pr-5">
                  <p className='text-sm bg-teal-500 px-2 py-1 rounded-full text-white'>
                    TailwindCSS
                  </p>
                  <BiLogoTailwindCss className='text-3xl text-center text-teal-600' />
                </li>
                <li className="text-gray-800 py-1 flex justify-center pr-5">
                  <p className='text-sm bg-teal-500 px-2 py-1 rounded-full text-white'>
                    React
                  </p>
                  <BiLogoReact className='text-3xl text-teal-600' />
                </li>
                <li className="text-gray-800 py-1 flex justify-center pr-5">
                  <p className='text-sm bg-teal-500 px-2 py-1 rounded-full text-white'>
                    Redux
                  </p>
                  <BiLogoRedux className='text-3xl text-teal-600' />
                </li>
                <li className="text-gray-800 flex justify-center py-1 pr-5">
                  <p className='text-sm bg-teal-500 px-2 py-1 rounded-full text-white'>
                    Rails
                  </p>
                  <SiRubyonrails className='text-4xl text-teal-600'/>
                </li>
              </ul>
            </div>
            <div className="md:w-1/3 text-center shadow-lg p-10 rounded-xl my-10 mx-10 md:mx-0 dark:bg-white">
                <Image src={skills} width={125} height={125} className="mx-auto" />
              <h3 className="text-lg font-medium pt-8 pb-2">Skills</h3>
              <p className="py-2 md:text-xl">
                Soft skills developed along my career.
              </p>
              <h4 className="py-4 text-teal-600">My potential soft skills are</h4>
              <ul className='flex text-center items-center justify-center flex-wrap mx-auto'>
                <li li className="text-gray-800 py-1 flex justify-center pr-5">
                  <p className='text-sm bg-teal-500 px-2 py-1 rounded-full text-white'>
                    Effective communication
                  </p>
                </li>
                <li className="text-gray-800 py-1 flex justify-center pr-5">
                  <p className='text-sm bg-teal-500 px-2 py-1 rounded-full text-white'>
                    Adaptability
                  </p>
                </li>
                <li className="text-gray-800 py-1 flex justify-center pr-5">
                  <p className='text-sm bg-teal-500 px-2 py-1 rounded-full text-white'>
                    Problem solving
                  </p>
                </li>
                <li className="text-gray-800 py-1 flex justify-center pr-5">
                  <p className='text-sm bg-teal-500 px-2 py-1 rounded-full text-white'>
                    Time Management
                  </p>
                </li>
                <li className="text-gray-800 py-1 flex justify-center pr-5">
                  <p className='text-sm bg-teal-500 px-2 py-1 rounded-full text-white'>
                    Teamwork
                  </p>
                </li>
                <li className="text-gray-800 py-1 flex justify-center pr-5">
                  <p className='text-sm bg-teal-500 px-2 py-1 rounded-full text-white'>
                    Leadership
                  </p>
                </li>
                <li className="text-gray-800 flex justify-center py-1 pr-5">
                  <p className='text-sm bg-teal-500 px-2 py-1 rounded-full text-white'>
                    Emphaty
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      {/* Contact section */}
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
                  Let's connect 
                </h1>
                <GiNothingToSay className='text-4xl text-teal-500'/>
              </div>
              <p className='text-md text-gray-500 dark:text-gray-200'>
                If you have an application you are interested in developing, 
                a feature you need built, or a project that needs coding. I'd 
                love to help with it. Feel free to reach out to me. 
                I'll do my best to get back to you!
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
              <Image src={formImage} alt="image" fill className='object-cover rounded-lg' />
            </div>
          </form>
        </section>
      </m.div>
    </div>
  );
}
