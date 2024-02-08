import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDay } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'
import Data from '../../images/data-export-illustration.2da2d599_1agaoo.webp'

export const Csv = () => {
  return (
    <div className=' px-36 mt-36 py-8 flex justify-between items-start w-full'>
        <div className='w-[50%]'>
            <Image src={Data} width={600} height={600} alt='visuel image' />
        </div>
        <div className='w-[40%]'>
            <h4 className='text-sky-600 font-semibold'>Comprehensive data export</h4>
            <h1 className='text-4xl my-5 font-bold'>Export the scraped data to your local machine or no-code integrations</h1>
            <p className='text-gray-600 leading-7 text-lg my-5'>How you access the scraped data is essential, so we make sure to provide the best launchpad to export it.</p>
            <div className='flex flex-col gap-y-3 mt-4'>
                <div className='flex items-start'>
                    <div className='w-12 pr-3'>
                        <FontAwesomeIcon icon={faCalendarDay}  className='w-full mt-2 text-sky-600'/>
                    </div>
                    <p className='text-gray-600 text-lg'><span className="font-bold">CSV, JSON, and XLSX export.</span> These common formats ensure compatibility with spreadsheet, database, and analytics tools.</p>
                </div>
            </div>
        </div>
    </div>
  )
}
