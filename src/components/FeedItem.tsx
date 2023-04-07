import { ClockIcon } from "@heroicons/react/24/outline";
import { FC } from "react";
import { Link } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";

interface IFeedItemProps {
  id?: number;
  image_url: string;
  title: string;
  author: string;
  date: string;
  description: string;
  source: string;
  content: string;
}

const FeedItem: FC<IFeedItemProps> = ({ id, title, image_url, author, date, description, source, content }) => {
  const { setNewsDetail } = useStateContext()
  const truncateString = (str: string, num: number) => {
    if (str.length <= num) {
      return str
    }
    return str.slice(0, num);
  }

  return (
    <>
      <Link to='/news-detail' onClick={()=> setNewsDetail({ id, title, image_url, author, date, description, source, content })}>
        <div className="my-8">
          <div className="flex flex-col md:flex-row md:items-center">
            <div className="relative md:w-1/2">
              <img className="md:h-80" src={image_url} />
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
            <div className="md:w-1/2 md:space-y-2">
              <p className='md:text-5xl font-bold text-xl'>{title}</p>
              <p
                className='text-gray-400'
                dangerouslySetInnerHTML={{ __html: description }}
              ></p>
            </div>
          </div>
        </div>
      </Link>
    </>
  )
}

export default FeedItem