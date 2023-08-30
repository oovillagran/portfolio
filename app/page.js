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
import web5 from '../public/web5.png';
import web6 from '../public/web6.png';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Oscar Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='bg-white px-10 md:px-20 lg:px-40'>
        <section className="min-h-screen">
          <nav className='py-10 mb-12 flex justify-between'>
            <h1 className='text-xl font-burtons'>alfa&omega</h1>
            <ul className='flex items-center'>
              <li>
                <BsFillMoonStarsFill className='cursor-pointer text-2xl'/>
              </li>
              <li><a className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8" href="#">Resume</a></li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className='text-5xl py-2 text-teal-600 font-bold md:text-6xl'>Hi, I'm Oscar</h2>
            <h3 className='text-2xl py-2 font-bold mb-4 md:text-3xl'>Software developer</h3>
            <p className='text-md py-5 leading-8 mb-4 text-gray-800 md:text-xl'>I'm a software engineer based in Santo Domingo, Ecuador. I have a passion for creating beautiful and functional websites and applications. Join me down below and let's get in touch!</p>
          </div>
          <div className="text-3xl flex justify-center gap-8 py-3 text-gray-600">
            <AiFillTwitterCircle />
            <AiFillGithub />
            <AiFillLinkedin />
            <AiFillInstagram />
            <AiFillMediumCircle />
          </div>
          <div className="relative bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 mx-auto overflow-hidden">
            <Image className='w-32 h-32 mx-auto my-4' src={oscardev} alt="emoticon" layout='fill' objectFit='cover' objectPosition='center' />
          </div>
        </section>
        {/* second section */}
        <section className='py-10'>
          <div className="text-center p-10">
            <h3 className="text-3xl py-1">
              Services I offer
            </h3>
            <p className="text-md py-2 leading-8 mb-4 text-gray-800 md:text-xl">
              Since the beginning of my journey as a software developer, 
              I've done <span className="text-teal-500 font-bold">remote 
              work</span>, doing <span className="text-teal-500 font-bold">pair-programming</span>, 
              and <span className="text-teal-500 font-bold">collaborated </span> 
              with talented people from all over the world.
            </p>
            <p className="text-md py-2 leading-8 mb-4 text-gray-800 md:text-xl">
              I offer from a wide range of services, including programming and teaching.
            </p>
          </div>
          <div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10">
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
            <div className="text-center shadow-lg p-10 rounded-xl my-10">
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
            <div className="text-center shadow-lg p-10 rounded-xl my-10">
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
            <h3 className="text-3xl text-center py-1">Portfolio</h3>
            <p className="text-md py-2 leading-8 mb-4 text-gray-800 md:text-xl">
              Since the beginning of my journey as a software developer, 
              I've done <span className="text-teal-500 font-bold">remote 
              work</span>, doing <span className="text-teal-500 font-bold">pair-programming</span>, 
              and <span className="text-teal-500 font-bold">collaborated </span> 
              with talented people from all over the world.
            </p>
            <p className="text-md py-2 leading-8 mb-4 text-gray-800 md:text-xl">
              I offer from a wide range of services, including programming and teaching.
            </p>
          </div>
          <div>
            <div className="shadow-lg rounded-xl">
              <Image src={web1} width={100} height={100} className="mx-auto" />
            </div>
            <div className="shadow-lg rounded-xl">
              <Image src={web2} width={100} height={100} className="mx-auto" />
            </div>
            <div className="shadow-lg rounded-xl">
              <Image src={web3} width={100} height={100} className="mx-auto" />
            </div>
            <div className="shadow-lg rounded-xl">
              <Image src={web4} width={100} height={100} className="mx-auto" />
            </div>
            <div className="shadow-lg rounded-xl">
              <Image src={web5} width={100} height={100} className="mx-auto" />
            </div>
            <div className="shadow-lg rounded-xl">
              <Image src={web6} width={100} height={100} className="mx-auto" />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
