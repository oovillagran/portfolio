import Image from 'next/image';
// import project1 from '..../public/project1.png'
// import project2 from '.../public/project2.png';
// import project3 from '.../public/project3.png';
// import project4 from '.../public/project4.png';
// import web6 from '.../public/EasyClinics-Appointment.png';
import {AiFillGithub} from 'react-icons/ai';
import {LuArrowDownRightFromCircle} from 'react-icons/lu'

export default function Cards() {
  return (
    <div className='flex flex-col gap-10 py-10 md:flex-row md:flex-wrap min-h-screen items-center justify-center rounded-xl bg-slate-100 dark:bg-gray-600'>
      <div className='group h-96 w-96 [perspective:1000px]'>
        <div className='relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(360deg)]'>
          <div className='absolute inset-0'>
            <Image src='/project1.png' alt='project-image' width={500} height={500} className='w-full h-full rounded-xl object-cover shadow-xl shadow-black/40' />
          </div>
          <div className='absolute inset-0 h-full w-full rounded-xl bg-black/60 px-12 text-center text-slate-200 [transform:rotateY(360deg)] transition-opacity opacity-0 group-hover:opacity-100'>
            <div className='flex min-h-full flex-col items-center justify-center'>
              <h1 className='text-3xl font-bold text-teal-200'>
                Global Submit Conference
              </h1>
              <p className='text-lg'>
                Conference Web Page
              </p>
              <p className='text-base'>
                This is an HTML/CSS & JavaScript capstone project for the Full-Stack Web Development Program at Microverse. This capstone project is about a conference page.
              </p>
              <div className='flex justify-between w-full'>
                <button className='mt-2 rounded-md bg-gradient-to-l from-cyan-500 to-teal-600 py-1 px-2 text-sm hover:text-gray-800 transition-transform transform hover:scale-110'>
                  <a href='https://oovillagran.github.io/Global-Summit-Conference-/' target='_blank' rel='noopener noreferrer'>
                    See Live
                  </a>
                  <LuArrowDownRightFromCircle className='inline-block ml-2 text-xl' />
                </button>
                <button className='mt-2 rounded-md bg-gradient-to-l from-cyan-500 to-teal-600 py-1 px-2 text-sm hover:text-gray-800 transition-transform transform hover:scale-110'>
                  <a href='https://github.com/oovillagran/Global-Summit-Conference-' target='_blank' rel='noopener noreferrer'>
                    See Source
                  </a>
                  <AiFillGithub className='inline-block ml-2 text-xl' />
                </button>
              </div>
              <div className='flex items-center flex-wrap py-5 justify-center'>
                <p className='text-sm bg-teal-500 px-2 py-1 mr-5 mb-2 rounded-full text-white'>
                  HTML
                </p>
                <p className='text-sm bg-teal-500 px-2 py-1 mr-5 mb-2 rounded-full text-white'>
                  CSS
                </p>
                <p className='text-sm bg-teal-500 px-2 py-1 mr-5 mb-2 rounded-full text-white'>
                  JavaScript
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='group h-96 w-96 [perspective:1000px]'>
        <div className='relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(360deg)]'>
          <div className='absolute inset-0'>
            <Image src='/project2.png' alt='project-image' width={500} height={500} className='w-full h-full rounded-xl object-cover shadow-xl shadow-black/40' />
          </div>
          <div className='absolute inset-0 h-full w-full rounded-xl bg-black/60 px-12 text-center text-slate-200 [transform:rotateY(360deg)] transition-opacity opacity-0 group-hover:opacity-100'>
            <div className='flex min-h-full flex-col items-center justify-center'>
              <h1 className='text-3xl font-bold text-teal-200'>
                Central Cinema Trends
              </h1>
              <p className='text-lg'>
                FrontEnd App
              </p>
              <p className='text-base'>
                Central Cinema Trends is a webapp that shows you the most popular movies at the moment.
              </p>
              <div className='flex justify-between w-full'>
                <button className='mt-2 rounded-md bg-gradient-to-l from-cyan-500 to-teal-600 py-1 px-2 text-sm hover:text-gray-800 transition-transform transform hover:scale-110'>
                  <a href='https://centralcinematrends.onrender.com/' target='_blank' rel='noopener noreferrer'>
                    See Live
                  </a>
                  <LuArrowDownRightFromCircle className='inline-block ml-2 text-xl' />
                </button>
                <button className='mt-2 rounded-md bg-gradient-to-l from-cyan-500 to-teal-600 py-1 px-2 text-sm hover:text-gray-800 transition-transform transform hover:scale-110'>
                  <a href='https://github.com/oovillagran/Central-Cinema-Trends' target='_blank' rel='noopener noreferrer'>
                    See Source
                  </a>
                  <AiFillGithub className='inline-block ml-2 text-xl' />
                </button>
              </div>
              <div className='flex items-center flex-wrap py-5 justify-center'>
                <p className='text-sm bg-teal-500 px-2 py-1 mr-5 mb-2 rounded-full text-white'>
                  HTML
                </p>
                <p className='text-sm bg-teal-500 px-2 py-1 mr-5 mb-2 rounded-full text-white'>
                  CSS
                </p>
                <p className='text-sm bg-teal-500 px-2 py-1 mr-5 mb-2 rounded-full text-white'>
                  JavaScript
                </p>
                <p className='text-sm bg-teal-500 px-2 py-1 mr-5 mb-2 rounded-full text-white'>
                  API-REST
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='group h-96 w-96 [perspective:1000px]'>
        <div className='relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(360deg)]'>
          <div className='absolute inset-0'>
            <Image src='/project3.png' alt='project-image' width={500} height={500} className='w-full h-full rounded-xl object-cover shadow-xl shadow-black/40' />
          </div>
          <div className='absolute inset-0 h-full w-full rounded-xl bg-black/60 px-12 text-center text-slate-200 [transform:rotateY(360deg)] transition-opacity opacity-0 group-hover:opacity-100'>
            <div className='flex min-h-full flex-col items-center justify-center'>
              <h1 className='text-3xl font-bold text-teal-200'>
                Movie's Time App
              </h1>
              <p className='text-lg'>
                FrontEnd
              </p>
              <p className='text-base'>
                Designed for movie lovers. Powered by React and Redux, this application categorizes the top trending movies into four sections.
              </p>
              <div className='flex justify-between w-full'>
                <button className='mt-2 rounded-md bg-gradient-to-l from-cyan-500 to-teal-600 py-1 px-2 text-sm hover:text-gray-800 transition-transform transform hover:scale-110'>
                  <a href='https://movies-time.onrender.com/' target='_blank' rel='noopener noreferrer'>
                    See Live
                  </a>
                  <LuArrowDownRightFromCircle className='inline-block ml-2 text-xl' />
                </button>
                <button className='mt-2 rounded-md bg-gradient-to-l from-cyan-500 to-teal-600 py-1 px-2 text-sm hover:text-gray-800 transition-transform transform hover:scale-110'>
                  <a href='https://github.com/oovillagran/Movie-s-time-app' target='_blank' rel='noopener noreferrer'>
                    See Source
                  </a>
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
                  API-REST
                </p>
                <p className='text-sm bg-teal-500 px-2 py-1 mr-5 mb-2 rounded-full text-white'>
                  JavaScript
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='group h-96 w-96 [perspective:1000px]'>
        <div className='relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(360deg)]'>
          <div className='absolute inset-0'>
            <Image src='/project4.png' alt='project-image' width={500} height={500} className='w-full h-full rounded-xl object-cover shadow-xl shadow-black/40' />
          </div>
          <div className='absolute inset-0 h-full w-full rounded-xl bg-black/60 px-12 text-center text-slate-200 [transform:rotateY(360deg)] transition-opacity opacity-0 group-hover:opacity-100'>
            <div className='flex min-h-full flex-col items-center justify-center'>
              <h1 className='text-3xl font-bold text-teal-200'>
                MyXpenses
              </h1>
              <p className='text-lg'>
                FrontEnd and BackEnd App
              </p>
              <p className='text-base'>
                This is a mobile web application that allows you to manage your budget, organize your list of daily expenses and take control over your incomes/expenses.
              </p>
              <div className='flex justify-between w-full'>
                <button className='mt-2 rounded-md bg-gradient-to-l from-cyan-500 to-teal-600 py-1 px-2 text-sm hover:text-gray-800 transition-transform transform hover:scale-110'>
                  <a href='https://rails-hc3r.onrender.com' target='_blank' rel='noopener noreferrer'>
                    See Live
                  </a>
                  <LuArrowDownRightFromCircle className='inline-block ml-2 text-xl' />
                </button>
                <button className='mt-2 rounded-md bg-gradient-to-l from-cyan-500 to-teal-600 py-1 px-2 text-sm hover:text-gray-800 transition-transform transform hover:scale-110'>
                  <a href='https://github.com/oovillagran/myxpenses' target='_blank' rel='noopener noreferrer'>
                    See Source
                  </a>
                  <AiFillGithub className='inline-block ml-2 text-xl' />
                </button>
              </div>
              <div className='flex items-center flex-wrap py-5 justify-center'>
                <p className='text-sm bg-teal-500 px-2 py-1 mr-5 mb-2 rounded-full text-white'>
                  Ruby
                </p>
                <p className='text-sm bg-teal-500 px-2 py-1 mr-5 mb-2 rounded-full text-white'>
                  Rails
                </p>
                <p className='text-sm bg-teal-500 px-2 py-1 mr-5 mb-2 rounded-full text-white'>
                  PostgreSQL
                </p>
                <p className='text-sm bg-teal-500 px-2 py-1 mr-5 mb-2 rounded-full text-white'>
                  Full-Stack
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='group h-96 w-96 [perspective:1000px]'>
        <div className='relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(360deg)]'>
          <div className='absolute inset-0'>
            <Image src='/project5.png' alt='project-image' width={500} height={500} className='w-full h-full rounded-xl object-cover shadow-xl shadow-black/40' />
          </div>
          <div className='absolute inset-0 h-full w-full rounded-xl bg-black/60 px-12 text-center text-slate-200 [transform:rotateY(360deg)] transition-opacity opacity-0 group-hover:opacity-100'>
            <div className='flex min-h-full flex-col items-center justify-center'>
              <h1 className='text-3xl font-bold text-teal-200'>
                Space Travelers
              </h1>
              <p className='text-lg'>
                FrontEnd App
              </p>
              <p className='text-base'>
                This awesome app designed for a company offering commercial and scientific space travel services.
              </p>
              <div className='flex justify-between w-full'>
                <button className='mt-2 rounded-md bg-gradient-to-l from-cyan-500 to-teal-600 py-1 px-2 text-sm hover:text-gray-800 transition-transform transform hover:scale-110'>
                  <a href='https://space-hubs-travelers.onrender.com/' target='_blank' rel='noopener noreferrer'>
                    See Live
                  </a>  
                  <LuArrowDownRightFromCircle className='inline-block ml-2 text-xl' />
                </button>
                <button className='mt-2 rounded-md bg-gradient-to-l from-cyan-500 to-teal-600 py-1 px-2 text-sm hover:text-gray-800 transition-transform transform hover:scale-110'>
                  <a href='https://github.com/oovillagran/space_travelers' target='_blank' rel='noopener noreferrer'>
                    See Source
                  </a>
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
                  CSS
                </p>
                <p className='text-sm bg-teal-500 px-2 py-1 mr-5 mb-2 rounded-full text-white'>
                  HTML
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='group h-96 w-96 [perspective:1000px]'>
        <div className='relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(360deg)]'>
          <div className='absolute inset-0'>
            <Image src='/project6.png' alt='project-image' width={500} height={500} className='w-full h-full rounded-xl object-cover shadow-xl shadow-black/40' />
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
                  <a href='https://easyclinic-client.vercel.app/' target='_blank' rel='noopener noreferrer'>
                    See Live
                  </a>
                  <LuArrowDownRightFromCircle className='inline-block ml-2 text-xl' />
                </button>
                <button className='mt-2 rounded-md bg-gradient-to-l from-cyan-500 to-teal-600 py-1 px-2 text-sm hover:text-gray-800 transition-transform transform hover:scale-110'>
                  <a href='https://github.com/oovillagran/final-capstone-back-end' target='_blank' rel='noopener noreferrer'>
                    See Source
                  </a>
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
  )
}
