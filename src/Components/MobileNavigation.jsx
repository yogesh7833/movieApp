import React from 'react'
import { mobileNavigation } from '../constants/Navigation'
import { NavLink } from 'react-router-dom'

const MobileNavigation = () => {
  return (
    <section className='lg:hidden h-14 bg-black fixed bottom-0 w-full z-40'>
      <div className='flex items-center justify-between h-full text-white '>
        {
          mobileNavigation.map((nav,index)=>{

            return (
              <NavLink to={nav.href} key={nav.label+"mobilenavigation"} className={({isActive})=>`px-4 flex items-center flex-col justify-center`}>
                <div className='text-2xl'>
                   {nav.icons}
                </div>
                <p className='text-sm'>{nav.label}</p>
              </NavLink>
              
            )
          })
        }
      </div>
    </section>
  )
}

export default MobileNavigation