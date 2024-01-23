// import { setCustomBackgroundImage } from '../utils/helpers'

import { dateCountDown } from "../utils/helpers";


export default function Hero() {

  // console.log(ate)
  return (
      <div
        id='Home'
        className="w-full h-full flex midscreen:flex-col transition-transform"
      >
        <div className="flex flex-col h-full maxscreen:pt-3 sm:h-[90%] justify-center items-center w-full">
          <div className="flex flex-col items-center gap-y-1">

            <div className="pacifico rounded-full p-6 border-2 border-y-slate-800 border-x-black w-fit self-center flex flex-col gap-y-1 items-center">
              <p className="motion-text text-5xl capitalize w-fit">Save</p>
              <p className="text-3xl ml-6 capitalize w-fit">the</p>
              <p className="motion-text-reverse text-5xl capitalize w-fit">date</p>
            </div>

            <div className="maxmobile:text-2xl text-3xl tracking-wide font-medium flex items-baseline gap-x-2">
              <p className="first-letter:text-5xl">Oluwaseun</p> and <p className="first-letter:text-5xl">Olamilekan</p>
            </div>
            <p className="font-medium text-lg bg-opacity-50 rounded-md py-1 px-2 bg-slate-300">We are getting married March 2, 2024</p>
          </div>
        </div>

        <figure className="relative w-full h-full sm:h-[90%] rounded-tr-lg rounded-br-lg shadow-sm border-0">
          <img src="" alt="" className='h-full w-full object-cover rounded-tr-lg rounded-br-lg' />

          <div className="absolute left-5 text-white bg-pink-800 bg-opacity-70 rounded-md p-1 px-5 font-bold text-4xl bottom-5 flex items-center justify-between w-[90%]">
            {
              Object.entries(dateCountDown()).map(([key, value]) => (
                <p key={key} className="font-serif flex flex-col justify-center">
                  <span>{value}</span>
                  <span className="capitalize italic text-base font-normal">{key}</span>
                </p>
              ))
            }
          </div>
        </figure>
      </div>
  )
}