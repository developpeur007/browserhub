import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown, faClock, faGlobe, faList } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'
import VisuelImage from '../../images/visual-web-scraping-illustration.38a91cec_ZvxntE.webp'

export const VisuelWeb = () => {
  return (
    <div className='container px-36 mt-36 py-8 flex justify-between items-start'>
        <div className='w-[40%]'>
            <h4 className='text-sky-600 font-semibold'>Visual web scraping</h4>
            <h1 className='text-4xl my-5 font-bold'>Build your web scraper in clicks – not codes</h1>
            <p className='text-gray-600 leading-7 text-lg my-5'>Our app and Chrome extension enable you to build web scrapers like a regular browsing experience. No coding experience needed.</p>
            <div className='flex flex-col gap-y-3 mt-4'>
                <div className='flex items-start'>
                    <div className='w-12 pr-3'>
                        <FontAwesomeIcon icon={faList}  className='w-full mt-2 text-sky-600'/>
                    </div>
                    <p className='text-gray-600 text-lg'><span className="font-bold">Step-by-step visualization.</span> Actions you take like selecting elements and extracting values are visualized step-by-step for easy understanding.</p>
                </div>
                <div className='flex items-start'>
                    <div className='w-12 pr-3'>
                        <FontAwesomeIcon icon={faGlobe}  className='w-full mt-2 text-sky-600'/>
                    </div>
                    <p className='text-gray-600 text-lg'><span className="font-bold">Modern web support.</span> Extract data seamlessly from modern websites with complex JavaScript, AJAX, and dynamic content. We handle the heavylifting so you don t have to.</p>
                </div>
                <div className='flex items-start'>
                    <div className='w-12 pr-3'>
                        <FontAwesomeIcon icon={faClock}  className='w-full mt-2 text-sky-600'/>
                    </div>
                    <p className='text-gray-600 text-lg'><span className="font-bold">Scheduler.</span> Run your web scrapers or monitor data changes periodically. Our scheduler automatically runs your scrapers on a scheduled interval.</p>
                </div>
                <div className='flex items-start'>
                    <div className='w-12 pr-3'>
                        <FontAwesomeIcon icon={faList}  className='w-full mt-2 text-sky-600'/>
                    </div>
                    <p className='text-gray-600 text-lg'><span className="font-bold">Pagination.</span> Collect data from a table or list that spreads across multiple pages easily. You point us the load more or next button, we do the rest.</p>
                </div>
                <div className='flex items-start'>
                    <div className='w-12 pr-3'>
                        <FontAwesomeIcon icon={faArrowDown}  className='w-full mt-2 text-sky-600'/>
                    </div>
                    <p className='text-gray-600 text-lg'><span className="font-bold">Infinite scroll.</span> Get a continuous stream of data through scrolling and simply setup a data limit to stop the scroll data through scrolling.</p>
                </div>
            </div>
        </div>
        <div className='w-[50%]'>
            <Image src={VisuelImage} width={600} height={600} alt='visuel image' />
        </div>
    </div>
  )
}
