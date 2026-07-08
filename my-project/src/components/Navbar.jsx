import React from 'react'
import { navlinksdata , navIcons } from '../constents'
import dayjs from 'dayjs'
const Navbar = () => {
  return (
     <nav >
        <div>
            <img className='h-7' src="/images/logo.svg" alt="logo" />
            <p className='font-bold text-2xl
            '>Areeb's Portfolio</p>

          <div className='ml-10'>
            {
                navlinksdata.map((items)=>{
                   return  <h3 className='text-2xl cursor-pointer hover:underline' key={items.id} >{items.name}</h3>
                })
            }
          </div>
        </div>
        <ul>
           { navIcons.map((items)=>{
             return <li  key={items.id}><img className='h-[20px]' src={items.img} alt="" /></li>
            })}
        <time className='font-extrabold'>{dayjs().format("ddd MMM D h:mm A")}</time>
        </ul>
     </nav>
  )
}

export default Navbar
