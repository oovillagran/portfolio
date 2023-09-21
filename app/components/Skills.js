import Image from 'next/image';
import {AiFillHtml5} from 'react-icons/ai';
import {BiLogoCss3, BiLogoJavascript, BiLogoPostgresql, BiLogoTailwindCss, BiLogoReact, BiLogoRedux} from 'react-icons/bi';
import {DiRuby, DiBootstrap} from 'react-icons/di';
import {SiRubyonrails} from 'react-icons/si';

export default function Skills() {
  return (
    <div className='lg:flex gap-10'>
      <div className="md:w-1/3 text-center shadow-lg p-10 rounded-xl my-10 mx-10 md:mx-0 dark:bg-white">
        <Image src='/languages.jpg' alt='languages-icon' width={200} height={200} className="mx-auto rounded-full" />
        <h3 className="text-lg font-medium pt-8 pb-2">Languages</h3>
        <p className="py-2 md:text-xl">
          Programming languages I use:
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
        <Image src='/framework.jpg' alt='framework-image' width={200} height={200} className="rounded-full mx-auto" />
          <h3 className="text-lg font-medium pt-8 pb-2">Frameworks</h3>
          <p className="py-2 md:text-xl">
            Creating awesome and practical apps:
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
          <Image src='/skills.jpg' alt='soft_skills-image' width={125} height={125} className="mx-auto" />
          <h3 className="text-lg font-medium pt-8 pb-2">Skills</h3>
          <p className="py-2 md:text-xl">
            Soft skills developed along my career:
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
  )
}
