import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/UseFetch';
import useFetchDetails from '../hooks/UseFetchDetails';
import { useSelector } from 'react-redux';
import moment from 'moment';
import { useState } from 'react';
import Divider from '../Components/Divider';
import  HorizontalScroCard from '../Components/HorizontalScroCard'
import VidioPlay from '../Components/VidioPlay';
const DetailPage = () => {
  const params=useParams();
  const imageURL=useSelector(state=>state.movieoData.imageURL)
  const {data}=useFetchDetails(`/${params?.explore}/${params?.id}`)
  const {data:castData}=useFetchDetails(`/${params?.explore}/${params?.id}/credits`)
  const {data:similarData}=useFetch(`/${params?.explore}/${params?.id}/similar`)
  const { data : recommendationData } = useFetch(`/${params?.explore}/${params?.id}/recommendations`)
  const [playVideo,setplayVideo]=useState(false)
  const [playVideoId,setPlayVideoId]=useState("")
  console.log("data",data)
  console.log("star cast",castData);

  const handlePlayVideo=(data)=>{
    setPlayVideoId(data)
    setplayVideo(true)
  }
  
  const duration=(data?.runtime/60).toFixed(1).split(".")
  const writer = castData?.crew?.filter(el => el?.job === "Writer")?.map(el => el?.name)?.join(", ")
  // console.log("write",writer)
  return (
    <div>
      <div className='w-full h-[300px] relative hidden lg:block'>
          <div className='w-full h-full '>
          <img className='h-full w-full object-cover ' src={imageURL+data?.backdrop_path}/>

          </div>
          <div className='absolute w-full h-full top-0 bg-gradient-to-t from-neutral-900/90 to-transparent'></div>    
      </div>
      <div className='container mx-auto px-3 py-16 lg:py-0 flex flex-col lg:flex-row gap-5 lg:gap-10'>
        <div className='lg:-mt-28 relative mx-auto lg:mx-6 w-fit min-w-60'>
        <img className='h-80 w-60 object-cover rounded ' src={imageURL+data?.poster_path}/>
        <button onClick={()=>handlePlayVideo(data)} className='mt-3 w-full py-2 px-4 text-center bg-white text-black font-bold rounded text-lg  hover:bg-black transition-all duration-300 hover:text-white hover:scale-105'>Play Now</button>
        </div>

        <div className=''>
          <h2 className='text-2xl lg:text-4xl font-bold text-white'>{data?.title || data?.name}</h2>
          <p className='text-neutral-200'>{data?.tagline}</p>
            
          <div className='flex flex-col lg:flex-row my-2 gap-1 lg:gap-2'>
            <div className='flex gap-3'>
             <div className='text-white'>Rating : {Number(data?.vote_average).toFixed(1)}+</div>
             <span> | </span>
            <p>Duration : {duration[0]}h {duration[1]}m</p>
            </div>
            <span className='hidden lg:block'> | </span>
            <div className='flex'>Geners : {data?.genres?.map((gener)=>(<span key={gener.id}>  {gener.name},</span>))}</div>
          </div>
         
            <Divider/>
          <div className=''>
            <h3 className='text-2xl font-bold text-white'>Overview</h3>
            <p>{data?.overview}</p>
            <Divider/>
            <div className='flex gap-1 lg:gap-3 flex-col lg:flex-row'>
              <p>
                Status: {data?.status}
              </p>
              <span className='hidden lg:block'>|</span>
              <p>Release Date : {moment(data?.release_date).format("MMM Do YYYY")}</p>
            </div>
            <Divider/>
          </div>
          <div>
            <p><span className='text-white'>Director :</span> {castData?.crew[0]?.name}</p>
            <p><span className='text-white'>Writer: {writer}</span></p>
          </div>

          <Divider/>
          <h2 className='font-bold text-lg'>Cast:</h2>
          <div className='grid grid-cols-[repeat(auto-fit,96px)] gap-5 my-4 mx-auto'>
                    {
                      castData?.cast?.filter(el => el?.profile_path).map((starCast,index)=>{
                        return(
                          <div key={starCast.id}>
                            <div className='grid grid-cols-[repeat(auto-fit,96px)] gap-5'>
                              <img
                                src={imageURL+starCast?.profile_path} 
                                className='w-24 min-w-16 min-h-16 h-24 object-cover rounded-full'
                              />
                            </div>
                            <p className='font-semibold text-center text-sm'>{starCast?.name}</p>
                          </div>
                        )
                      })
                    }
                </div>

      </div>
      </div>

      {/* <div className='container mx-auto px-10'> */}
        {/* <h2 className='text-lg lg:text-2xl font-bold my-3'>Star Cast</h2> */}
      {/* </div> */}

      <div>
        <HorizontalScroCard data={similarData} heading={"Similar "+params?.explore} media_type={params?.explore}/>
        <HorizontalScroCard data={recommendationData } heading={"Recommendation "+params?.explore} media_type={params?.explore}/>
      </div>
      {
        playVideo && <VidioPlay data={playVideoId} close={()=>setplayVideo(false)} media_type={params?.explore}/>
      }
      
    </div>
  )
}

export default DetailPage