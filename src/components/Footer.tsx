import Image from 'next/image'
import React from 'react'
import Logo from '../../images/icon.svg'
import Link from 'next/link'

export const Footer = () => {
  return (
    <div className='container px-36 mt-36 py-16 bg-slate-900'>
        <div className='flex justify-between items-start'>
            <Image src={Logo} width={40} height={40} alt='Logo'/>
            <div>
                <h5 className='text-white font-semibold mb-3'>Products</h5>
                <ul className='flex flex-col gap-y-5'>
                    <li>
                        <Link href={`/`} className='text-gray-300 text-sm'>Automated Web Scraping</Link> 
                    </li>
                    <li>
                        <Link href={`/`} className='text-gray-300 text-sm'>Chrome Web Scraper</Link> 
                    </li>
                    <li>
                        <Link href={`/`} className='text-gray-300 text-sm'>Blueprints</Link> 
                    </li>
                    <li>
                        <Link href={`/`} className='text-gray-300 text-sm'>Pricing</Link> 
                    </li>
                </ul>
            </div>
            <div>
                <h5 className='text-white font-semibold mb-3'>Resources</h5>
                <ul className='flex flex-col gap-y-5'>
                    <li>
                        <Link href={`/`} className='text-gray-300 text-sm'>Blog</Link> 
                    </li>
                    <li>
                        <Link href={`/`} className='text-gray-300 text-sm'>API Documentation</Link> 
                    </li>
                </ul>
            </div>
            <div>
                <h5 className='text-white font-semibold mb-3'>Resources</h5>
                <ul className='flex flex-col gap-y-5'>
                    <li>
                        <Link href={`/`} className='text-gray-300 text-sm'>Blog</Link> 
                    </li>
                    <li>
                        <Link href={`/`} className='text-gray-300 text-sm'>API Documentation</Link> 
                    </li>
                </ul>
            </div>
        </div>
        <div className='w-full h-[1px] bg-slate-600 mt-24'></div>
        <p className='text-gray-300 mt-5 text-xs'>© 2024 Browserhub. All rights reserved.</p>
    </div>
  )
}
