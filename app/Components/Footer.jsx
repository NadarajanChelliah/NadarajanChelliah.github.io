import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { useTheme } from './ThemeProvider'

const Footer = () => {
  const { isDark } = useTheme();
  return (
    <div className='mt-20'>
      <div className='text-center'>
        <Image alt='Nadarajan' src={isDark?assets.logo_dark:assets.logo} className='w-40 mx-auto mb-2'/>
        <div className='w-max flex items-center gap-2 mx-auto'>
            <Image src={assets.mail_icon} alt='' className='w-6'/>
            nadarajanc37@gmail.com
        </div>
      </div>

        <div className='text-center sm:flex items-center justify-between
        border-t border-gray-400 mx-[10%] mt-12 py-6'>  
            <p>© 2025 Nadarajan. All rights reserved.</p>
            <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
                <li >
                    <a className='flex items-center gap-1' target='_blank' href='https://github.com/NadarajanChelliah'>
                    <Image src={assets.github} alt='github' className='w-6 dark:invert'/> Github</a>
                </li>
                <li>
                    <a className='flex items-center gap-1' target='_blank' href='https://www.linkedin.com/in/nadarajan-chelliah-5195b2221/'>
                    <Image src={assets.linkedin} alt='linkedin' className='w-6 dark:invert'/>LinkedIn</a>
                </li>
            </ul>
        </div>

    </div>
  )
}

export default Footer
