// import { setCustomBackgroundImage } from '../utils/helpers'

import { useEffect, useState } from "react"

// import { dateCountDown } from "../utils/helpers";

// import { dateCountDown, setCustomBackgroundImage } from "../utils/helpers";


export default function Hero() {
  const targetDate = new Date("Mar 2, 2024 00:00:00").getTime()
  const [dateCountDown, setDateCountDown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const intervalId = setInterval(() => {
      const today = new Date().getTime();
      const duration = targetDate - today
 
      if (duration < 0) {
        clearInterval(intervalId);
        setDateCountDown(prev => ({ ...prev, days: 0, hours: 0, minutes: 0, seconds: 0 }));
        return;
      }
      else {
        const oneDay = 1000 * 60 * 60 * 24;
        const oneHour = 1000 * 60 * 60;
        const oneMinute = 1000 * 60;
        const days = Math.floor(duration / oneDay);
        const hours = Math.floor((duration % oneDay) / oneHour);
        const minutes = Math.floor((duration % oneHour) / oneMinute);
        const seconds = Math.floor((duration % oneMinute) / 1000);
        setDateCountDown(prev => ({
          ...prev, days, hours, minutes, seconds
        }));
      }
    }, 1000)
  }, [targetDate])

  return (
    <div
      id='Home'
      className="w-full h-[100vh] flex midscreen:flex-col transition-transform"
    >
      <div className="flex flex-col h-full maxscreen:pt-3 justify-center items-center w-full">
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

      <div className="absolute right-5 top-20 text-white b-pink-800 bg-opacity-70 rounded-md font-bold text-4xl flex items-center gap-x-5">
        {
          Object.entries(dateCountDown).map(([key, value]) => (
            <div key={key} className="font-serif flex flex-col justify-center rounded-md border bg-opacity-60 shadow p-2">
              <span className='inter text-2xl'>{value}</span>
              <span className="capitalize italic text-base font-normal">{key}</span>
            </div>
          ))
        }
      </div>
    </div>
  )
}