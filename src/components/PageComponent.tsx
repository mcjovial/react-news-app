import { ClockIcon } from '@heroicons/react/24/outline';
import React, { FC } from 'react'

interface IPageComponent {
  title: string;
  buttons?: any;
  element?: any;
  children: any
}

const PageComponent: FC<IPageComponent> = ({ title, buttons = '', element, children }) => {
  const truncateString = (str: string, num: number) => {
    if (str.length <= num) {
      return str
    }
    return str.slice(0, num);
  }
  return (
    <>
      <header className="bg-white">
        <hr className='border-gray-400' />
        <div className="flex flex-col md:flex-row justify-between items-center mx-auto max-w-7xl py-4 px-4 sm:px-6 lg:px-8 space-y-4 md:space-y-0">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">{title}</h1>
          <div className='flex justify-between items-center gap-4 md:gap-20'>
            <div>{ element }</div>
            <div className=''>
              {buttons}
            </div>
          </div>
        </div>
        <hr className='border-gray-400 mb-1' /><hr className='border-gray-400' />
      </header>
      <main>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          {children}
        </div>
      </main>
    </>
  )
}

export default PageComponent