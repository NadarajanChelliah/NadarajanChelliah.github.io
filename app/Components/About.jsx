import { assets, infoList, toolsData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { useTheme } from './ThemeProvider'

const About = () => {
  const { isDark, toggle } = useTheme();
  return (
    <div id='about' className='w-full px-[10%] py-10 scroll-mt-10'>
      <h4 className='text-center mb-2 text-lg'>Introduction</h4>
      <h2 className='text-center text-5xl'>About me</h2>
      <div className='flex w-full flex-col lg:flex-row item-center gap-20 mt-5 mb-20'>
        <div className='w-64 sm:w-80 max-w-none rounded-3xl mx-auto'>
            <Image src={assets.user_image} alt='user'
            className='w-full rounded-3xl'/>
        </div>
        <div className='flex-1'>
            <p className='mb-10 max-w-2xl'>
            &emsp;&emsp;I’m a Full-Stack Developer and working in Zoho corporation, Madurai. 
            With hands-on experience in Java, MERN stack development, and Linux, 
            I enjoy building scalable, efficient, and user-friendly applications. 
            I’m particularly interested in Cloud Computing and DevOps, and 
            I’m learning how they can improve the way applications are built and deployed.</p>
            <ul className='grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl'>
                {infoList.map(({icon,iconDark,title,description},index)=>(
                    <li key={index}
                    className='border-[0.5px] border-gray-400
                    rounded-xl p-6 cursor-pointer hover:bg-light-hover hover:-translate-y-1 duration-500 hover:shadow-black 
                    dark:border-white dark:hover:shadow-white dark:hover:bg-dark-hover/50'>
                        <div className='flex items-center gap-3 mb-2'>
                            <Image src={isDark?iconDark:icon} alt={title} className='w-7'/>
                            <h3 className='my-2 font-semibold text-gray-700
                            dark:text-white'>
                                {title}</h3>    
                        </div>
                        {/* <p className='text-gray-700 text-sm dark:text-white/80'>
                            {description}</p> */}
                        <ul className='whitespace-pre-line list-disc pl-5 text-gray-700 text-sm dark:text-white space-y-2'>
                            {description.map((item, i) => (
                              <li key={i}>{item}</li>
                            ))}
                          </ul>
                    </li>
                ))}
            </ul>
            {/* <h4 className='my-6 text-gray-700'>Tools I use</h4>
            <ul className='flex items-center gap-3 sm:gap-3'>
                {toolsData.map((tool,index)=>(
                    <li key={index}
                    className='flex items-center justify-center
                    w-12 sm:w-14 aspect-square border border-gray-400
                    rounded-lg cursor-pointer hover:-translate-y-1 duration-500'>
                        <Image src={tool} alt='Tool' className='w-5 sm:w-7' />
                    </li>
                ))}
            </ul> */}
        </div>
      </div>
    </div>
  )
}

export default About
