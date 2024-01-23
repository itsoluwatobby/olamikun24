import React, { useState } from "react"
import { MdMenuOpen } from 'react-icons/md'


type HeaderProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}
export default function Header({ open, setOpen }: HeaderProps) {
  const navButtons = [
    'Home', 'About', 'Our Story', 'Person of Interest', 'RSVP', 'Our Wedding', 'Contact']
  const [active, setActive] = useState<string>(navButtons[0]);


  return (
    <nav
      className='fixed top-0 pb-2 pt-5 flex items-center sm:justify-center z-50 bg-white w-full'>
      <ul className={`bg-white maxscreen:w-full maxscreen:shadow-md maxscreen:rounded-b-2xl maxscreen:z-20 maxscreen:fixed maxscreen:top-0 maxscreen:py-5 flex items-center gap-5 justify-center font-medium maxscreen:flex-col transition-all ${open ? '' : 'maxscreen:hidden'}`}>
        {
          navButtons.map(nav => (
            <li key={nav}
              onClick={() => setActive(nav)}
              className={`${active === nav ? 'border-b-[2px]' : ''} border-orange-500 border border-x-0 border-y-0 hover:border-b-[2px] pb-1 hover:opacity-90 cursor-pointer transition-all`}
            >
              <a href={`#${nav}`}>
                {nav}
              </a>
            </li>
          ))
        }
      </ul>

      <MdMenuOpen 
        onClick={() => setOpen(true)} 
        className='self-end sm:hidden text-3xl cursor-pointer' 
      />
    </nav>
  )
}