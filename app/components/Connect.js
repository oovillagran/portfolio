import {AiFillTwitterCircle, AiFillGithub, AiFillLinkedin, AiFillInstagram, AiFillMediumCircle} from 'react-icons/ai';

export default function Connect() {
  return (
    <div>
      <h4 className='uppercase font-bold text-teal-600 text-center text-md pb-5'>
        Let&apos;s connect
      </h4>
      <div className="text-3xl flex justify-center gap-8 py-3 text-gray-600">
        <a href='https://twitter.com/oovillagran' target='_blank' rel='noopener noreferrer'>
          <AiFillTwitterCircle className='dark:text-gray-200 transition-transform transform hover:scale-110 hover:text-teal-600 dark:hover:text-teal-600'/>
        </a>
        <a href='https://github.com/oovillagran' target='_blank' rel='noopener noreferrer'>
          <AiFillGithub className='dark:text-gray-200 transition-transform transform hover:scale-110 hover:text-teal-600 dark:hover:text-teal-600' />
        </a>
        <a href='https://www.linkedin.com/in/oovillagran/' target='_blank' rel='noopener noreferrer'>
          <AiFillLinkedin className='dark:text-gray-200 transition-transform transform hover:scale-110 hover:text-teal-600 dark:hover:text-teal-600' />
        </a>
        <a href='https://www.instagram.com/ovillagran/' target='_blank' rel='noopener noreferrer'>
          <AiFillInstagram className='dark:text-gray-200 transition-transform transform hover:scale-110 hover:text-teal-600 dark:hover:text-teal-600' />
        </a>
        <a href='https://medium.com/@oovillagg' target='_blank' rel='noopener noreferrer'>
          <AiFillMediumCircle className='dark:text-gray-200 transition-transform transform hover:scale-110 hover:text-teal-600 dark:hover:text-teal-600' />
        </a>
      </div>
    </div>
  )
}
