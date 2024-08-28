import { useEffect, useState } from "react"
import axios from "axios";
const useFetch=(endpoint)=>{
const [data,setData]=useState([])
const [loading,setloading]=useState(false);
   
const fetchData=async()=>{
    try {
      const response=await axios.get(endpoint)
      setloading(false)
      setData(response.data.results)
      // console.log(response.data.results)
    } catch (error) {
      console.log("error",error)
    }
  }

  useEffect(()=>{
    fetchData()
  },[endpoint])
 return {data,loading}
}

export default useFetch