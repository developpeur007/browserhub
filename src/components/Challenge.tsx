import Image from 'next/image'
import React from 'react'
import Code from '../../images/code-outline.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode , faSliders ,faServer } from '@fortawesome/free-solid-svg-icons'

export const Challenge = () => {
  return (
    <div className='container px-36 mt-36 py-8 '>
        <div className='w-[80%] m-auto flex flex-col gap-y-3 text-center'>
            <h3 className='text-red-600 text-lg font-semibold'>The challenge of web scraping</h3>
            <h1 className='text-4xl font-bold text-slate-800'>Making your own web scraper is hard</h1>
            <p className='text-gray-600 text-lg '>There could be many challenges in it that will slow you down in achieving your business goals. Would you delay profit by these things?</p>
        </div>
        <div className='grid grid-cols-2 w-[90%] m-auto mt-24 gap-14'>
            <div className='flex items-start'>
                <FontAwesomeIcon icon={faCode} className='text-red-600 w-20 h-12 p-3 mr-4 bg-red-500 bg-opacity-35 rounded-md'/>
                <div>
                    <h3 className='text-slate-800 font-semibold text-base mb-2'>Code and maintain the web scraper</h3>
                    <p className='text-gray-600 text-sm leading-7'>Every time you need to scrape a new web page, you need to write the logic and scheduler from scratch. This takes a lot of time and effort. Not to mention when the web page changes.</p>
                </div>
            </div>
            <div className='flex items-start'>
                <FontAwesomeIcon icon={faSliders} className='text-red-600 w-20 h-12 p-3 mr-4 bg-red-500 bg-opacity-35 rounded-md'/>
                <div>
                    <h3 className='text-slate-800 font-semibold text-base mb-2'>Automate a real browser</h3>
                    <p className='text-gray-600 text-sm leading-7'>Websites that don t welcome programatic visit are increasing. You need to automate a real browser to mimic human behavior and avoid bot detection. This adds a lot of complexity.</p>
                </div>
            </div>
            <div className='flex items-start'>
                <FontAwesomeIcon icon={faServer} className='text-red-600 w-20 h-12 p-3 mr-4 bg-red-500 bg-opacity-35 rounded-md'/>
                <div>
                    <h3 className='text-slate-800 font-semibold text-base mb-2'>Setup proxy and IP rotation</h3>
                    <p className='text-gray-600 text-sm leading-7'>To avoid getting blocked by some strict websites, you need to setup a proxy and rotate IPs frequently. This adds overhead to your infrastructure.</p>
                </div>
            </div>
            <div className='flex items-start'>
                <FontAwesomeIcon icon={faCode} className='text-red-600 w-20 h-12 p-3 mr-4 bg-red-500 bg-opacity-35 rounded-md'/>
                <div>
                    <h3 className='text-slate-800 font-semibold text-base mb-2'>Integrate 3rd party tools</h3>
                    <p className='text-gray-600 text-sm leading-7'>The extracted data needs to be exported or integrated with other tools such as databases, data warehouses, automation hubs, APIs, etc. This requires additional development effort.</p>
                </div>
            </div>
            
        </div>
    </div>
  )
}
