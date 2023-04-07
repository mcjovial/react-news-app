import { ClockIcon } from '@heroicons/react/24/outline'
import React from 'react'
import { useStateContext } from '../contexts/ContextProvider'

const NewsDetails = () => {
  const { newsDetail } = useStateContext()
  const { title, image_url, author, date, content, source } = newsDetail
  return (
    <div className='container mx-auto py-6'>
      <div className="flex flex-col space-y-6">
          <div className="relative ">
            <img className="w-full" src={image_url} />
            <div className="absolute bottom-4 left-4 bg-gray-100 p-2">
              <p
                className='font-bold'
                dangerouslySetInnerHTML={{ __html: `By ${author}` }}
              ></p>
              <p className='text-gray-400'>{ source }</p>
              <div className='flex mt-1'>
                <ClockIcon className='w-4' />
                <p>{date}</p>
              </div>
            </div>
          </div>
          <div className="md:space-y-8">
            <p className='md:text-5xl font-bold text-2xl'>{title}</p>
            <p
              className='text-gray-400'
              dangerouslySetInnerHTML={{ __html: content }}
            ></p>
          </div>
        </div>
    </div>
  )
}

export default NewsDetails