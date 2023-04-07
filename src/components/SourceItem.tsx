import { LanguageIcon, MapPinIcon, TagIcon } from "@heroicons/react/24/outline"
import { FC } from "react";
import { useStateContext } from "../contexts/ContextProvider";

export interface ISourceItem {
  id: string;
  name: string;
  description: string;
  category: string;
  language: string;
  country: string;
}

const SourceItem: FC<ISourceItem> = ({ id, name, description, category, language, country }) => {
  const { subscribeFeed } = useStateContext()
  return (
    <div>
      <div onClick={(e)=> subscribeFeed(e, id, category)} className="mt-2 shadow hover:shadow-none hover:ring-1 cursor-pointer p-2">
        <p className='font-bold'>{name}</p>
        <div className='flex justify-between text-sm'>
          <div className='flex'>
            <TagIcon className='w-4 mr-2'/>
            <p>{category}</p>
          </div>
          <div className='flex'>
            <LanguageIcon className='w-4 mr-2'/>
            <p>{language}</p>
          </div>
          <div className='flex'>
            <MapPinIcon className='w-4 mr-2'/>
            <p>{country}</p>
          </div>
        </div>
        <p className="text-sm text-gray-500">{description}</p>
        <hr />
      </div>
    </div>
  )
}

export default SourceItem