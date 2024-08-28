
// import React, { useRef } from 'react'
// import Card from './Card'
// import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'

// const HorizontalScroCard = ({data=[],heading,trending}) => {
//     const containerRef=useRef();
//     const handleNext=()=>{
//         containerRef.current.scrollLeft +=300
//     }
//     const handleprevious=()=>{
//         containerRef.current.scrollLeft-=300
//     }
//   return (
//     <div className='container  mx-auto px-3 my-10'>
//         <h1 className='font-bold text-xl lg:text-2xl mb-3 text-white capitalize'>{heading}</h1>
        
//         <div className='relative'>
        
//           <div ref={containerRef}  className='grid grid-cols-[repeat(auto-fit,230px)] grid-flow-col gap-5 overflow-hidden overflow-x-scroll relative z-10 scroll-smooth transition-all duration-300 no-scrollbar'>
//                {
//                data.map((data,index)=>{
//                 return (
//                 <Card key={data.id+"heading"+index} data={data} index={index+1} trending={trending}/>
//                    )
//                   })
//                }
//            </div>

//            <div className='absolute top-0 hidden lg:flex justify-between w-full h-full items-center'>
//                <button onClick={handleprevious} className='bg-white text-black p-1 -ml-2 rounded-full z-10 '>
//                  <FaAngleLeft/>
//                </button>
//                <button onClick={handleNext} className='bg-white text-black p-1 -mr-2 rounded-full z-10 '>
//                 <FaAngleRight/>
//                </button>
//             </div>
//         </div>
//       </div>
//   )
// }

// export default HorizontalScroCard





import React, { useRef } from 'react'
import Card from './Card'
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";

const HorizontalScollCard = ({data = [], heading, trending, media_type}) => {
    const contaierRef = useRef()

    const handleNext = ()=>{
        contaierRef.current.scrollLeft += 300
    }
    const handlePrevious = ()=>{
        contaierRef.current.scrollLeft -= 300
    }
  return (
    <div className='container mx-auto px-3 my-10'>
          <h2 className='text-xl lg:text-2xl font-bold mb-3 text-white capitalize'>{heading}</h2>

          <div className=' relative'>
                <div  ref={contaierRef} className='grid grid-cols-[repeat(auto-fit,230px)] grid-flow-col gap-6 overflow-hidden overflow-x-scroll relative z-10 scroll-smooth transition-all no-scrollbar'>
                    {
                        data.map((data,index)=>{
                        return (
                            <Card key={data.id+"heading"+index} data={data} index={index+1} trending={trending} media_type={media_type}/>
                        )
                        })
                    }
                </div>

                <div className='absolute top-0 hidden lg:flex justify-between w-full h-full items-center'>
                    <button onClick={handlePrevious} className='bg-white p-1 text-black rounded-full -ml-2 z-10'>
                        <FaAngleLeft/>
                    </button>
                    <button onClick={handleNext} className='bg-white p-1 text-black rounded-full -mr-2 z-10'>
                        <FaAngleRight/>
                    </button>
                </div>
          </div>
          
        </div>
  )
}

export default HorizontalScollCard





















// import React, { useRef } from 'react'
// import Card from './Card'
// import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'

// const HorizontalScroCard = ({data=[],heading,trending}) => {
//     const containerRef=useRef();
//     const handleNext=()=>{
//         containerRef.current.scrollLeft+=300
//     }
//     const handleprevious=()=>{
//         containerRef.current.scrollLeft-=300
//     }
//   return (
//     <div className=' container mx-auto px-3 my-10'>
//         <h1 className='font-bold text-xl lg:text-2xl mb-3 text-white capitalize'>{heading}</h1>
        
//         <div className=' relative'>
        
//           <div ref={containerRef}  className='grid grid-cols-[repeat(auto-fit,230px)] grid-flow-col gap-5 overflow-hidden overflow-x-scroll relative z-10 scroll-smooth transition-all duration-300 scrolbar-none '>
//                {
//                data.map((data,index)=>{
//                 return (
//                 <Card key={data.id+"heading"+index} data={data} index={index+1} trending={trending}/>
//                    )
//                   })
//                }
//            </div>

//            <div className='absolute top-0 hidden lg:flex justify-between w-full h-full items-center'>
//                <button onClick={handleprevious} className='bg-white text-black p-1 -ml-2 rounded-full z-10 '>
//                  <FaAngleLeft/>
//                </button>
//                <button onClick={handleNext} className='bg-white text-black p-1 -mr-2 rounded-full z-10 '>
//                 <FaAngleRight/>
//                </button>
//             </div>
//         </div>
//       </div>
//   )
// }

// export default HorizontalScroCard