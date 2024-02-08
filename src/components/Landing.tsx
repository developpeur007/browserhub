import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import LandingImage from '../../images/nocode-web-scraping-illustration.7e001f4a_270Ile.webp'
import PointsLeft from '../../images/ornament-left.f9d9dd67_Zwnqs0.webp'
import PointsRight from '../../images/ornament-right.57ba9714_ZeVGXQ.webp'

export const Landing = () => {
  return (
    <div className='flex justify-between items-center py-14 relative  px-36 w-full'>
        <Image src={PointsLeft} width={300} height={300} alt='points' className='absolute left-0 top-0 -z-10'/>
        <Image src={PointsRight} width={300} height={300} alt='points' className='absolute right-0 bottom-0 -z-10'/>
        <div className="w-[57.7%] flex flex-col gap-y-7">
            <h1 className='text-6xl font-bold text-slate-800'>Easy to use no-code web scraping and data extraction software</h1>
            <p className='text-lg text-gray-600'>Browserhub helps you scrape and extract data from any website without coding. Run your web scrapers with our scheduler and streamline your business flows with our nocode integrations.</p>
            <Link href={`/`} className='p-3 bg-sky-500 rounded-md text-white font-semibold tracking-wide w-fit'>Start a free trial</Link>
        </div>
        <div>
            <Image src={LandingImage} width={500} height={500} alt='landing image'/>
        </div>
    </div>
  )
}
