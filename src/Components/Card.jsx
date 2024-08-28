import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
const Card = ({data,trending,index,media_type}) => {
  const mediaType=data.media_type ?? media_type
  const imageURL=useSelector(state=>state.movieoData.imageURL)
  return (
    <Link to={"/"+mediaType+"/"+data.id} className='w-full min-w-[230px] max-w-[230px] h-80 overflow-hidden block rounded relative hover:scale-105 transition-all duration-300'>
      {
        data?.poster_path ? (<img src={imageURL + data?.poster_path}/>):
        (<div className='bg-neutral-800 h-full w-full flex justify-center items-center'>No Image Found</div>)
      }
      
      <div className='absolute  top-2 '>
      {
        trending && (
          <div className='py-1 px-4 backdrop-blur-3xl rounded-r-full bg-black/60 text-white font-bold'>
            #{index} Trending
          </div>
        )
      }
      </div>
      <div className='absolute top-0 right-0'>
      <div className='w-10 h-10  rounded-full text-white bg-black flex justify-center items-center'>{Number(data.vote_average).toFixed(1)}</div>
      </div>
      <div className='absolute bottom-0 h-8 backdrop-blur-3xl w-full bg-black/50 flex items-center justify-center'>
      
        {/* <div className='w-10 h-10  rounded-full text-white bg-black flex justify-center items-center'>{Number(data.vote_average).toFixed(1)}</div> */}
      <div >
        <h2 className='text-ellipsis font-bold line-clamp-1 text-sm text-white'>{data?.title || data?.name}</h2>
      </div>
      
      </div>
    </Link>
  )
}

export default Card