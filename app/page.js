'use client';
import Head from 'next/head';
import Image from 'next/image';
import oscardev from '../public/ovg-avatar.png';
import Navbar from './components/navbar';
import { useDarkMode } from './DarkModeContext';
import Connect from './components/Connect';
import Cards from './components/Cards';
import Skills from './components/Skills';
import Form from './components/Form';

export default function Home() {
  const { darkMode } = useDarkMode();

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
            <h2 className='text-5xl py-2 text-teal-600 font-bold md:text-6xl'>
              Hi, I&apos;m Oscar
            </h2>
            <h3 className='text-2xl py-2 font-bold mb-4 md:text-3xl dark:text-gray-200'>
              Full-stack Web Developer
            </h3>
            <p className='text-md py-5 leading-8 text-gray-800 md:text-xl mx-auto dark:text-gray-200'>
              I&apos;m a software developer based in Santo Domingo, Ecuador, 
              with a passion for creating elegant and <span className="text-teal-500 font-bold">functional websites </span> 
              and <span className="text-teal-500 font-bold">applications </span>. I utilize various programming languages and tools 
              such as JavaScript, Ruby, React, Rails, and database management 
              with PostgreSQL. <br />
              Feel free to explore my work below and let&apos;s get in touch!</p>
          </div>
          <Connect />
          <div className="relative bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 mx-auto overflow-hidden md:h-96 md:w-96">
            <Image className='w-50 h-50 mx-auto my-4' src={oscardev} alt="emoticon" />
          </div>
        </section>
        {/* second section */}
        <section id='portfolio' className='py-20'>
          <div>
            <h3 className="text-3xl text-center py-1 dark:text-teal-500 font-bold">
              Portfolio
            </h3>
            <p className="text-md py-2 leading-8 mb-4 text-gray-800 md:text-xl dark:text-gray-200">
            I have immersed myself in remote development, working on real projects that involve HTML, CSS, 
            JavaScript, React, Redux, Ruby on Rails, and PostgreSQL. My work ranges from creating landing 
            pages to developing both <span className="text-teal-500 font-bold">front-end </span> and <span className="text-teal-500 font-bold">back-end </span> web applications.
            </p>
          </div>
          <Cards />
        </section>
      {/* About me */}
      <section id='about' className='py-1'>
          <div className="text-center p-15">
            <h3 className="text-3xl py-1 dark:text-teal-500 font-bold my-10">
              About me
            </h3>
            <p className="text-md py-2 leading-6 mb-4 text-gray-800 md:text-xl dark:text-gray-200">
              Since the beginning of my journey as a software developer, 
              I&apos;ve done <span className="text-teal-500 font-bold">remote 
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
            <p className='transition-transform transform hover:scale-105'>
              <a className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8 hover:text-gray-800" href="https://docs.google.com/document/d/1LlZGsY-UMNrBu8QZhqwwTcBHQxjYhBABY0orn3hgAMo/edit?usp=sharing" target='_blank' rel='noopener noreferrer'>
                Get my Resume
              </a>
            </p>
          </div>
          <Skills />
        </section>
      </main>

      {/* Contact section */}
      <Form />
    </div>
  );
}
