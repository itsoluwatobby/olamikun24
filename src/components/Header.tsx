import React, { useState } from "react"
import { MdMenuOpen } from 'react-icons/md'


type HeaderProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setPrintIv: React.Dispatch<React.SetStateAction<Toggle>>;
}
export default function Header({ open, setOpen, setPrintIv }: HeaderProps) {
  const navButtons = [
    'Home', 'About', 'Our Story', 'Person of Interest', 'RSVP', 'Our Wedding', 'Contact']
  const [active, setActive] = useState<string>(navButtons[0]);

  const closeModal = (nav: string) => {
    setPrintIv('CLOSE')
    setActive(nav)
    setOpen(false)
  }
  return (
    <nav
      className='fixed top-0 h-16 flex items-center justify-between z-50 bg-gray-50 rounded-b-lg w-full'>
      <h1 className="pacifico pl-4 text-lg font-bold first-letter:text-4xl first-letter:text-orange-600">OLAMIKUN'24</h1>

      <ul className={`midscreen:bg-blue-50 midscreen:bg-opacity-90 midscreen:w-full midscreen:shadow-md midscreen:rounded-b-2xl midscreen:z-20 midscreen:fixed midscreen:top-0 midscreen:py-5 flex items-center gap-4 justify-center font-medium midscreen:flex-col transition-all ${open ? '' : 'midscreen:hidden'} pr-5`}>
        {
          navButtons.map(nav => (
            <li key={nav}
              onClick={() => closeModal(nav)}
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
        className='md:hidden text-3xl cursor-pointer mr-4' 
      />
    </nav>
  )
}