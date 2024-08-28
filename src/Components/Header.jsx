

import React, { useEffect, useState } from 'react'
import Logo from '../assets/logo.png'
import { NavLink, useNavigate } from 'react-router-dom'
import User from '../assets/user.png'
import { IoSearchOutline } from 'react-icons/io5'
import { navigation } from '../constants/Navigation'
import { useLocation } from 'react-router-dom'
const Header = () => {
    const location = useLocation()
    const removeSpace=location?.search?.slice(3)?.split('%20')?.join(" ")
    console.log(removeSpace)
    const [searchInput,setSearchInput]=useState(location.search.slice(3));
    const navigate=useNavigate();
    
    console.log("location");
   

    useEffect(()=>{
        if(searchInput){
            navigate(`/search?q=${searchInput}`)
        }   
    },[searchInput])
    
    const handleSubmit=(e)=>{
        e.preventDefault();
    }
  return (
    <div className='fixed  w-full h-16 bg-black bg-opacity-80 flex items-center px-4  z-50'>
        <div><NavLink to='/'><img src={Logo} width={120} height={120}/></NavLink></div>
        <nav className='hidden lg:flex gap-x-8 ml-9'>
            {
                navigation.map((nav,index)=>{
                    return (
                        <div key={index}>
                            <NavLink  to={nav.href} className={`hover:text-neutral-400 transition-all duration-300 font-bold text-white`}>{nav.label}</NavLink>
                        </div>
                    )
                })
            }
        </nav>
        <div className='ml-auto flex gap-8 items-center'>
            <form className='flex items-center ' onSubmit={handleSubmit}>
                <input type='text' className=' bg-transparent rounded py-1 outline-none text-white  px-4 text-black hidden lg:block' placeholder='search here...' onChange={(e)=>setSearchInput(e.target.value)} value={searchInput} />
                <button  className=' text-2xl text-white'>
                    <IoSearchOutline />
                </button>
            </form>
            <div className='w-7 h-7 rounded-full overflow-hidden cursor-pointer active:scale-50 transition-all duration-300 '>
                <img src={User} width='w-full h-full' />
            </div>
        </div>
    </div>
  )
}

export default Header





// import React, { useEffect, useState } from 'react'
// import logo from '../assets/logo.png'
// import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
// import userIcon from '../assets/user.png'
// import { IoSearchOutline } from "react-icons/io5";
// // import { navigation } from '../contants/navigation';
// import {navigation} from '../constants/Navigation'


// const Header = () => {
//     const location = useLocation()
//     const removeSpace = location?.search?.slice(3)?.split("%20")?.join(" ")
//     const [searchInput,setSearchInput] = useState(removeSpace)
//     const navigate = useNavigate()
//    console.log("location")
   
//     useEffect(()=>{
//         if(searchInput){
//             navigate(`/search?q=${searchInput}`)
//         }
//     },[searchInput])

//     const handleSubmit = (e)=>{
//         e.preventDefault()
//     }

//   return (
//     <header className='fixed top-0 w-full h-16 bg-black bg-opacity-50 z-40'>
//             <div className='container mx-auto px-3 flex items-center h-full'>
//                 <Link to={"/"}>
//                     <img
//                         src={logo}
//                         alt='logo'
//                         width={120} 
//                     />
//                 </Link>

//                 <nav className='hidden lg:flex items-center gap-1 ml-5'>
//                     {
//                         navigation.map((nav,index)=>{
//                             return(
//                                 <div key={index}>
//                                     <NavLink key={nav.label+"header"+index} to={nav.href} className={({isActive})=>`px-2 hover:text-neutral-100 ${isActive && "text-neutral-100"}`}>
//                                         {nav.label}
//                                     </NavLink>
//                                 </div>
//                             )
//                         })
//                     }
//                 </nav>

//                 <div className='ml-auto flex items-center gap-5'>
//                     <form className='flex items-center gap-2' onSubmit={handleSubmit}>
//                         <input
//                             type='text'
//                             placeholder='Search here...'
//                             className='bg-transparent px-4 py-1 outline-none border-none hidden lg:block'
//                             onChange={(e)=>setSearchInput(e.target.value)}
//                             value={searchInput}
//                         />
//                         <button className='text-2xl text-white'>
//                                 <IoSearchOutline/>
//                         </button>
//                     </form>
//                     <div className='w-8 h-8 rounded-full overflow-hidden cursor-pointer active:scale-50 transition-all'>
//                         <img
//                             src={userIcon}
//                             width='w-ful h-full' 
//                         />
//                     </div>
//                 </div>
//             </div>
//     </header>
//   )
// }

// export default Header










// import React, { useEffect, useState } from 'react'
// import Logo from '../assets/logo.png'
// import { NavLink, useNavigate } from 'react-router-dom'
// import User from '../assets/user.png'
// import { IoSearchOutline } from 'react-icons/io5'
// import { navigation } from '../constants/Navigation'

// const Header = () => {
//     const [searchInput,setSearchInput]=useState('');
//     const navigate=useNavigate();

   

//     useEffect(()=>{
//         if(searchInput){
//             navigate(`/search?q=${searchInput}`)
//         }   
//     },[searchInput])

//     const handleSubmit=(e)=>{
//         e.preventDefault();
//     }
//   return (
//     <div className='fixed top-0 w-full h-16 bg-neutral-600 bg-opacity-80 flex items-center px-4  z-40'>
//         <div><NavLink to='/'><img src={Logo} width={120} height={120}/></NavLink></div>
//         <nav className='hidden lg:flex gap-x-8 ml-9'>
//             {
//                 navigation.map((nav,index)=>{
//                     return (
//                         <div key={index}>
//                             <NavLink  to={nav.href} className={`hover:text-neutral-400 transition-all duration-300 font-bold text-white`}>{nav.label}</NavLink>
//                         </div>
//                     )
//                 })
//             }
//         </nav>
//         <div className='ml-auto flex gap-8 items-center'>
//             <form className='flex items-center ' onSubmit={handleSubmit}>
//                 <input type='text' className='rounded py-1 bg-none outline-none px-4 text-black hidden lg:block' placeholder='search here...' onChange={(e)=>setSearchInput(e.target.value)} value={searchInput} />
//                 <button  className='text-2xl text-white'>
//                     <IoSearchOutline />
//                 </button>
//             </form>
//             <div className='w-7 h-7 rounded-full overflow-hidden cursor-pointer active:scale-50 transition-all duration-300 '>
//                 <img src={User} width='w-full h-full' />
//             </div>
//         </div>
//     </div>
//   )
// }

// export default Header