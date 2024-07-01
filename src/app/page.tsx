import Head from 'next/head';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { AiFillCiCircle,AiFillLinkedin } from 'react-icons/ai';
import Image from 'next/image';
import sumanth from '../assets/images/sumanth.jpg';
 

export default function Home() {
  return (
    <div>
      <Head>
        <title>Sumanth Guduru Portfolio</title>
      </Head>
      <main className='px-10'>
        <section className="min-h-screen">
          <nav className='py-10 mb-12 flex justify-between'> 
            <h1 className=' text-xl font-burtons '>developedbysumanth</h1>
          <ul className='flex items-center'>
            <li><BsFillMoonStarsFill className=' cursor-pointer text-xl '/></li>
            <li><a className="bg-gradient-to-r from-cyan-500 to-teal-500 px-4 py-2 rounded-md ml-8" href='#'>Resume</a></li>
          </ul>
          </nav>
         <div className=' text-center p-10 py-10 '>
          <h2 className=' text-5xl py-2 text-teal-600 font-medium font-burtons'>Sumanth Guduru</h2>
          <h3  className='text-2xl py-2'>Developer and Designer</h3>
          <p className='text-md py-5 '>Freelancer looking to create responsive webappliactions</p>
         </div>
         <div className='text-5xl flex justify-center gap-16 py-3'>
          <AiFillLinkedin></AiFillLinkedin>
         </div>
         <div className="relative bg-gradient-to-b from-slate-100 rounded-full w-80 h-80 mt-20 overflow-hidden shadow-orange-300 shadow-sm">
          <Image src={sumanth} layout='fill' objectFit='cover' />
         </div>
        </section>
        
<section>
  <div>
    <h3 className='text-3xl py-1'>Services offer</h3>
    <p className='text-md py-2 leading-8 '>sinc i grow up ia stRAEDEC TO take care of websites</p>
    <p className='text-md py-2 leading-8 '>sinc i grow up ia stRAEDEC TO take care of websites</p>
    <p className='text-md py-2 leading-8 '>sinc i grow up ia stRAEDEC TO take care of websites</p>
  </div>
  <div>
    <div>
      <Image />
    </div>
  </div>
</section>

      </main>
    </div>
  );
}
