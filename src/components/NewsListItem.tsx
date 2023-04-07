import { ArrowTopRightOnSquareIcon, ClockIcon, PencilIcon, TrashIcon } from '@heroicons/react/24/outline';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { useStateContext } from '../contexts/ContextProvider';
import TButton from './core/TButton';

interface INewsItemProps {
  image_url: string;
  title: string;
  author: string;
  date: string;
  source: string;
  content: string;
}

const NewsListItem: FC<INewsItemProps> = ({ title, image_url, author, date, source, content }) => {
  const { setNewsDetail } = useStateContext()

  return (
    <>
      <Link to='/news-detail' onClick={() => setNewsDetail({ title, image_url, author, date, source, content })}>
        <div>
          <div className="w-full">
            <img className="w-full h-64" src={image_url} alt="" />
          </div>
          <div className="flex justify-between items-center">
            <div className="text-xs">
              <p className="font-light">By {author}</p>
              <p className="text-gray-500">{source}</p>
            </div>
            <div className='flex mt-1'>
              <ClockIcon className='w-4' />
              <p className="text-gray-500 text-xs">{date}</p>
            </div>
          </div>
          <div>
            <p className="font-bold">{title}</p>
          </div>
        </div>
      </Link>
    </>
  )
}

export default NewsListItem