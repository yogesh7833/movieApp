import React, { useEffect } from 'react'
import { Route,Routes } from 'react-router-dom'
import ExplorePage from './Pages/ExplorePage'
import DetailPage from './Pages/DetailPage'
import SearchPage from './Pages/SearchPage'
import Home from './Pages/Home'
import Header from './Components/Header'
import Footer from './Components/Footer'
import MobileNavigation from './Components/MobileNavigation'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { setBannerData } from './store/movieoSlice'
import { setImageURL } from './store/movieoSlice'
import { Outlet } from 'react-router-dom'
function App() {
  const dispatch=useDispatch();
  const fetchTrendingData=async()=>{
    try {
      const response=await axios.get('/trending/all/week')
      // dispatch(setBannerData())
      dispatch(setBannerData(response.data.results))
      // console.log('response', response.data.results)
    } catch (error) {
      console.log("error",error)
    }
  }
  const fetchConfiguration=async()=>{
    try {
      const response=await axios.get("/configuration")
      dispatch(setImageURL(response.data.images.
        secure_base_url+"original"))
    } catch (error) {
      
    }
  }
  useEffect(()=>{
      fetchTrendingData();
      fetchConfiguration();
  },[])

  return (
    <div className='pb-14 lg:pb-0'>
       <Header/>
       {/* <div className='pt-16'>

       </div> */}
       <div className=''>
            <Outlet/>
        </div>
       
      <Routes>
        <Route path='' element={<Home/>}> </Route>
        {/* <Route path='/tv/:param'element={<ExplorePage/>}></Route> */}
        <Route path='/:explore'element={<ExplorePage/>}></Route>
        <Route path='/:explore/:id' element={<DetailPage/>}></Route>
        <Route path='/search' element={<SearchPage/>}></Route>
        
      </Routes>
      <Footer/>
      <MobileNavigation/>
    </div>
  )
}


export default App
