import { MdHomeFilled } from 'react-icons/md'
import { PiTelevisionFill } from 'react-icons/pi'
import { BiSolidMoviePlay } from 'react-icons/bi'
import { IoSearchOutline } from 'react-icons/io5'

export const navigation=[
    {
        label:"Tv Shows",
        href:'tv',
        icons:<PiTelevisionFill/>
    },
    {
      label: "Movies",
      href: "movie",
      icons:<BiSolidMoviePlay/>
    }
]

export const mobileNavigation=[
    {
        label:"Home",
        href:'/',
        icons:<MdHomeFilled/>
    },
    ...navigation,
    {
        label:"search",
        href:"/search",
        icons:<IoSearchOutline/>
    }

]

