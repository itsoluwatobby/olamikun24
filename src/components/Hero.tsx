import { useEffect, useState } from "react"


type HeroProps = {
  displayConfetti: Toggle;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setFlakes: React.Dispatch<React.SetStateAction<Toggle>>;
  setDisplayConfetti: React.Dispatch<React.SetStateAction<Toggle>>;
}
export default function Hero({ displayConfetti, setDisplayConfetti, setOpen, setFlakes }: HeroProps) {
  const targetDate = new Date("Mar 2, 2024 00:00:00").getTime();
  const [dateCountDown, setDateCountDown] = useState({
    days: 0, hours: 0, minutes: 0, seconds: 0,
  })

  useEffect(() => {
    const intervalId = setInterval(() => {
      const today = new Date().getTime();
      const duration = targetDate - today

      if (duration < 0) {
        clearInterval(intervalId);
        setDisplayConfetti('OPEN')
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
  }, [targetDate, setDisplayConfetti])

  useEffect(() => {
    if (dateCountDown.days === 0) setFlakes('OPEN');
    else setFlakes('CLOSE');
  }, [dateCountDown.days, setFlakes])

  return (
    <div
      id='Home'
      onClick={() => setOpen(false)}
      className="w-full h-[100vh] flex midscreen:flex-col transition-transform"
    >
      <div className="flex flex-col h-full maxscreen:pt-3 justify-center items-center w-full">
        <div className="flex flex-col items-center gap-y-1">

          <div className="pacifico shadow-lg rounded-full p-6 border-2 border-y-slate-800 border-x-gray-500 w-fit self-center flex flex-col gap-y-1 items-center">
            {
              displayConfetti === 'OPEN' ?
              <>
                <p className="motion-text text-5xl capitalize w-fit">Yes</p>
                <p className="text-3xl ml-6 capitalize w-fit">We</p>
                <p className="motion-text-reverse text-5xl capitalize w-fit">Did It</p>
              </>
              :
              <>
                <p className="motion-text text-5xl capitalize w-fit">Save</p>
                <p className="text-3xl ml-6 capitalize w-fit">the</p>
                <p className="motion-text-reverse text-5xl capitalize w-fit">date</p>
              </>
            }
          </div>

          <div className="maxmobile:text-2xl text-3xl tracking-wide font-medium flex items-baseline gap-x-2">
            <p className="first-letter:text-5xl">Oluwaseun</p> and <p className="first-letter:text-5xl">Olamilekan</p>
          </div>
          <p className="font-medium text-lg bg-opacity-50 rounded-md py-1 px-2 bg-slate-300">Happy married life to {displayConfetti === 'OPEN' ? 'Us' : 'March 2, 2024'}</p>
        </div>
      </div>

      <div className="absolute right-5 top-20 text-white b-pink-800 bg-opacity-70 rounded-md font-bold text-4xl flex items-center gap-x-5">
        {
          displayConfetti === 'OPEN' ? 
            <div className="text-gradien w-full self-center text-center pacifico text-3xl lg:text-4xl p-2">HAPPY MARRIED LIFE OLUWASEUN AND OLAMILEKAN</div>
          :
          Object.entries(dateCountDown).map(([key, value]) => (
            <div key={key} className={`${(key === 'days' && value < 1) ? 'hidden' : 'flex'} ${(dateCountDown.days === 0) && (key === 'hours' && value < 1) ? 'hidden' : 'flex'} font-serif flex flex-col justify-center items-center rounded-md border bg-opacity-60 shadow-lg p-2`}>
              <span className={`${(key === 'days' && value === 1) ? 'text-green-700 animate-pulse' : ''} inter text-4xl`}>{value}</span>
              <span className="capitalize italic text-base font-normal">{value === 1 ? key.substring(0, key.length - 1) : key}</span>
            </div>
          ))
        }
      </div>
    </div>
  )
}
