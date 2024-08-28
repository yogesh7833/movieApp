import React, { useEffect, useState } from 'react'
import BannerHome from '../Components/BannerHome'
import { useSelector } from 'react-redux'
import HorizontalScroCard from '../Components/HorizontalScroCard'
import axios from 'axios'
import useFetch from '../hooks/UseFetch'


const Home = () => {
  const trendingData=useSelector((state)=>state.movieoData.bannerData)
  // const [nowPlayingData,setNowPlayingData]=useState([])
  const {data:nowPlayingData}=useFetch("/movie/now_playing")
  const {data:topRatedData}=useFetch("/movie/top_rated")
  const {data:popularTvShowData}=useFetch("/tv/popular") 
  const {data:topRatedShow}=useFetch("/tv/top_rated") 
  const {data:onTheAirShowData}=useFetch("/tv/on_the_air")
  
  return (
    <div>
      <BannerHome/>
      <HorizontalScroCard data={trendingData} heading={"Trending"} trending={true}/>
      <HorizontalScroCard data={nowPlayingData} heading={"Now Playing"} media_type={"movie"}/>
      <HorizontalScroCard data={topRatedData} heading={"Top Rated Movie"}  media_type={"movie"}/>
      <HorizontalScroCard data={topRatedShow} heading={"Top Rated Shows"}  media_type={"Tv"}/>
      <HorizontalScroCard data={popularTvShowData} heading={"Popular Tv Shows"}  media_type={"Tv"}/>
      <HorizontalScroCard data={onTheAirShowData} heading={"On The Air"}  media_type={"Tv"}/>
    </div>
  )
}

export default Home