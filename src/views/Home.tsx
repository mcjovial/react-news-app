import { MagnifyingGlassIcon } from "@heroicons/react/24/outline"
import { useEffect, useState } from "react"
import axiosClient from "../axios"
import NewsListItem from "../components/NewsListItem"
import PageComponent from "../components/PageComponent"
import dateFormat from 'dateformat';

export interface INewsItem {
  title: string;
  urlToImage: string;
  author: string;
  publishedAt: string;
  description: string;
  source: {
    id: string;
    name: string;
  }
  content: string;
}

const Home = () => {
  const [news, setNews] = useState<INewsItem[]>([])
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    axiosClient.get('/everything').then(({ data }) => {
      setNews(data.articles);
      setLoading(false);
    });
  }, [])
  
  return (
    <PageComponent
      title="Hot News"
    >
      <div className='grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3'>
        {news?.map((feed, i) => (
          <NewsListItem
            key={i}
            title={feed.title} 
            image_url={feed.urlToImage} 
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

export default Home