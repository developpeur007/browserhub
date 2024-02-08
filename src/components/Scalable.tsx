import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode , faSliders ,faServer, faBolt, faCube, faEarthAmerica, faInbox, faShieldHalved } from '@fortawesome/free-solid-svg-icons'

export const Scalable = () => {
  return (
    <div className='container px-36 mt-36 py-8 '>
        <div className='w-[80%] m-auto flex flex-col gap-y-3 text-center'>
            <h3 className='text-sky-600 text-lg font-semibold'>Scalable infrastructure</h3>
            <h1 className='text-4xl font-bold text-slate-800'>Every infrastructure you need to automate web scraping in the cloud</h1>
            <p className='text-gray-600 text-lg '>Sweat no more about the technicalities of building and maintaining the web scraping infrastructure. We handle all the details 24/7.</p>
        </div>
        <div className='grid grid-cols-3 w-full m-auto mt-24 gap-12'>
            <div className='flex flex-col gap-y-4'>
                <div className='flex items-center gap-x-3'>
                    <FontAwesomeIcon icon={faCode} className='text-sky-600 w-5 h-5'/>
                    <h6 className='text-slate-800 font-semibold text-base'>API & webhooks</h6>
                </div>
                <div>
                    <p className='text-gray-600 text-base'>Automate and scale web scrapers in seconds with our developer-first API environment.</p>
                </div>
            </div>

            <div className='flex flex-col gap-y-4'>
                <div className='flex items-center gap-x-3'>
                    <FontAwesomeIcon icon={faBolt} className='text-sky-600 w-5 h-5'/>
                    <h6 className='text-slate-800 font-semibold text-base'>Data center & residential proxies</h6>
                </div>
                <div>
                    <p className='text-gray-600 text-base'>Scrape sophisticated websites using our proxies from 100+ locations around the globe.</p>
                </div>
            </div>
            <div className='flex flex-col gap-y-4'>
                <div className='flex items-center gap-x-3'>
                    <FontAwesomeIcon icon={faCube} className='text-sky-600 w-5 h-5'/>
                    <h6 className='text-slate-800 font-semibold text-base'>CAPTCHA solving</h6>
                </div>
                <div>
                    <p className='text-gray-600 text-base'>Navigate websites without encountering reCAPTCHA or hCaptcha anymore.</p>
                </div>
            </div>
            <div className='flex flex-col gap-y-4'>
                <div className='flex items-center gap-x-3'>
                    <FontAwesomeIcon icon={faEarthAmerica} className='text-sky-600 w-5 h-5'/>
                    <h6 className='text-slate-800 font-semibold text-base'>Real browsers</h6>
                </div>
                <div>
                    <p className='text-gray-600 text-base'>Avoid bot detection using our browser infrastructure that mimics human behavior.</p>
                </div>
            </div>
            <div className='flex flex-col gap-y-4'>
                <div className='flex items-center gap-x-3'>
                    <FontAwesomeIcon icon={faInbox} className='text-sky-600 w-5 h-5'/>
                    <h6 className='text-slate-800 font-semibold text-base'>Email notification</h6>
                </div>
                <div>
                    <p className='text-gray-600 text-base'>Get notified by email about the scraping status, errors, or when scraping is completed.</p>
                </div>
            </div>

            <div className='flex flex-col gap-y-4'>
                <div className='flex items-center gap-x-3'>
                    <FontAwesomeIcon icon={faShieldHalved} className='text-sky-600 w-5 h-5'/>
                    <h6 className='text-slate-800 font-semibold text-base'>Secure by design</h6>
                </div>
                <div>
                    <p className='text-gray-600 text-base'>We follow security protocols and standards to keep your data safe and compliant.</p>
                </div>
            </div>
            
            
        </div>
    </div>
  )
}
