import PageComponent from '../components/PageComponent'
import FeedItem from '../components/FeedItem'
import { useEffect, useState } from 'react'
import { INewsItem } from './Home'
import axiosClient from '../axios'
import dateFormat from 'dateformat'
import Sources from '../components/Sources'
import TButton from '../components/core/TButton'
import { MagnifyingGlassIcon, PlusCircleIcon } from '@heroicons/react/24/outline'
import { useStateContext } from '../contexts/ContextProvider'

const Feed = () => {
  const { sources, setSources } = useStateContext();
  const [news, setNews] = useState<INewsItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [keyword, setKeyword] = useState('')
  const [feedName, setFeedName] = useState('')

  useEffect(() => {
    axiosClient.get('/feed').then(({ data }) => {
      setFeedName(data.source_id)
    });
  }, [])
  

  useEffect(() => {
    setLoading(true)
    axiosClient.post('/filter', {}).then(({ data }) => {
      setNews(data.articles);
      setLoading(false);
    });
  }, [sources])

  const onsubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    axiosClient.post('/filter', {
      keyword,
    }).then(({ data }) => {
      setNews(data.articles);
    })
  }

  return (
    <PageComponent
      title={`News Feed [${feedName}]`}
      element={(
        <form onSubmit={onsubmit}>
          <div className="relative w-80">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <MagnifyingGlassIcon className="w-5 h-5"/>
            </div>
            <input
              type="search"
              className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Search News..."
              onChange={(e)=> setKeyword(e.target.value)}
            />
            <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2">Search</button>
          </div>
        </form>
      )}
      buttons={(
        <TButton color='green' onClick={()=>setSources(true)}>
          <PlusCircleIcon className='h-6 w-6 mr-2' />
          Change feed
        </TButton>
      )}
      >
      <Sources />
      <div className=''>
        {news?.map((feed, i) => (
          <FeedItem
            key={i}
            title={feed.title} 
            image_url={feed.urlToImage} 
            description={feed.description}
            author={feed.author}
            date={dateFormat(feed.publishedAt, "mmmm dS, yyyy")}
            source={feed.source.name}
            content={feed.content}
          />
        ))}
      </div>
    </PageComponent>
  )
}

export default Feed