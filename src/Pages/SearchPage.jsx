import React, { useEffect, useState } from 'react'
import { useLoaderData, useLocation, useNavigate } from 'react-router-dom'
import useFetch from '../hooks/UseFetch';
import axios from 'axios';
import Card from '../Components/Card';
import { useParams } from 'react-router-dom';
const SearchPage = () => {
    const location=useLocation();
    const query= location?.search?.slice(3);
    const [data,setData]=useState([])
    const [page,setPage]=useState(1)
    const navigate=useNavigate()

    const fetchData=async()=>{
      try {
        const response = await axios.get(`/search/multi`,{
          params : {
            query:location?.search?.slice(3),
            page : page
          }
        })
        setData((preve)=>{
          return [...preve,
            ...response.data.results]
        })
        // setTotalPageNo(response.data.total_pages)
    } catch (error) {
        console.log('error',error)
    }
  }


  useEffect(()=>{
    if(query){
      setPage(1)
    setData([])
    fetchData()
    }
    
  },[location?.search])

  const handleScroll = ()=>{
    if((window.innerHeight + window.scrollY ) >= document.body.offsetHeight){
      setPage(preve => preve + 1)
    }
  }

  useEffect(()=>{
    if(query){
      fetchData()
    }
},[page])

useEffect(()=>{
  window.addEventListener('scroll',handleScroll)
},[])

  console.log("location",);
  return (
    <div className='py-16 '>
      <div className='lg:hidden my-2 mx-1 sticky top-[70px] z-30'>
        <input type='text' placeholder='Search here' value={query?.split("%20")?.join(" ")} onChange={(e)=> navigate(`/search?q=${e.target.value}`)} className='px-4 py-1 text-lg w-full bg-white rounded-full mx-1 text-neutral-900'/>
      </div>
      <div className='container mx-auto'>
          <h2 className='capitalize text-lg lg:text-xl font-semibold my-3'>Search results</h2>
          <div className='grid grid-cols-[repeat(auto-fit,230px)] gap-6 justify-center lg:justify-start'>
          {
            data.map((searchData,index)=>{
              return (
                <Card data={searchData} key={index} media_type={searchData.media_type} />
              )
              // key={exploreData.id+"exploreSEction"}
            })
          }
         </div>
      </div>
    </div>
  )
}

export default SearchPage

// import axios from 'axios'
// import React, { useEffect, useState } from 'react'
// import { useLocation, useNavigate } from 'react-router-dom'
// import Card from '../components/Card'

// const SearchPage = () => {
//   const location = useLocation()
//   const [data,setData] = useState([])
//   const [page,setPage] = useState(1)
//   const navigate = useNavigate()

//   const query = location?.search?.slice(3)

//   const fetchData = async()=>{
//     try {
//         const response = await axios.get(`search/multi`,{
//           params : {
//             query :location?.search?.slice(3),
//             page : page
//           }
//         })
//         setData((preve)=>{
//           return[
//               ...preve,
//               ...response.data.results
//           ]
//         })
//     } catch (error) {
//         console.log('error',error)
//     }
//   }

//   useEffect(()=>{
//     if(query){
//       setPage(1)
//       setData([])
//       fetchData()
//     }
//   },[location?.search])


//   const handleScroll = ()=>{
//     if((window.innerHeight + window.scrollY ) >= document.body.offsetHeight){
//       setPage(preve => preve + 1)
//     }
//   }

//   useEffect(()=>{
//     if(query){
//       fetchData()
//     }
//   },[page])

//   useEffect(()=>{
//     window.addEventListener('scroll',handleScroll)
// },[])

//   return (
//     <div className='py-16'>

//         <div className='lg:hidden my-2 mx-1 sticky top-[70px] z-30'>
//             <input 
//               type='text'
//               placeholder='Search here...'
//               onChange={(e)=> navigate(`/search?q=${e.target.value}`)}
//               value={query?.split("%20")?.join(" ")}
//               className='px-4 py-1 text-lg w-full bg-white rounded-full text-neutral-900 '
//             />
//         </div>
//         <div className='container mx-auto'>
//           <h3 className='capitalize text-lg lg:text-xl font-semibold my-3'>Search Results</h3>

//           <div className='grid grid-cols-[repeat(auto-fit,230px)] gap-6 justify-center lg:justify-start'>
//               {
//                 data.map((searchData,index)=>{
//                   return(
//                     <Card data={searchData} key={searchData.id+"search"} media_type={searchData.media_type}/>
//                   )
//                 })
//               }
//           </div>

//         </div>
//     </div>
//   )
// }

// export default SearchPage
