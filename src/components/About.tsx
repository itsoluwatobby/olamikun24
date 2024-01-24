import { IconType } from "react-icons";
import { Socials } from "../utils/constants";


type AboutProps = {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}
export default function About({ setOpen }: AboutProps) {
  
  return (
    <div
    id='About'
    onClick={() => setOpen(false)}
    className="py-4 flex flex-col gap-y-5 h-[60%] maxscreen:h-full"
    >

      <div className="px-6 midscreen:px-3 flex md:items-start items-center justify-between midscreen:flex-col gap-5">
        <CoupleComponent 
          name={'Adekunmi Oluwaseun'} position="RIGHT" 
          socials={Socials.Bride}
          about={
          <div className='flex flex-col gap-1'>  
            <p>
              Hello everyone 🤗 My name is Adetona Oluwaseun Adekunmi and I am a strong, confident woman who knows what she wants in life. I am not afraid to go after what I want and I always stay true to myself.
            </p>
            <p>
              I would like to say there is no more lovely, friendly, and charming relationship, communion, or company than a good marriage.'"
            </p>
            <p>
              And
              'Love doesn't make the world go 'round; love is what makes the ride worthwhile.'"`
            </p> 
          </div>
        }
        />

        <div className="flex-auto flex items-baseline maxscreen:flex-col maxscreen:items-center gap-3">
          <figure className="flex-none bg-slate-300 bg-opacity-50 w-44 h-44 rounded-full shadow-sm border-0">
            <img src="https://firebasestorage.googleapis.com/v0/b/olamikun24.appspot.com/o/mid%2FIMG-20240123-WA0017.jpg?alt=media&token=bfccc8a8-0df3-48e9-8971-4276d292f49c" alt="" className='h-full w-full object-cover rounded-full' />
          </figure>
          <figure className="flex-none bg-slate-300 bg-opacity-50 w-44 h-44 rounded-full shadow-sm border-0">
            <img src="https://firebasestorage.googleapis.com/v0/b/olamikun24.appspot.com/o/new%2FDSC_1522.JPG?alt=media&token=1072b2bb-ee6c-44dc-b0a4-abf926f69638" alt="" className='h-full w-full object-contain rounded-full' />
          </figure>
        </div>

        <CoupleComponent 
          name={'Samuel Olamilekan'} position="LEFT"
          socials={Socials.Groom}
          about={
            <div className="flex flex-col">
              <p>
                Hi everyone. My Name is Olanipekun Samuel Olamilekan, If you don&apos;t know me that is you got the wrong wedding invitation 😂😂.
              </p>
              <p className="font-medium">
                I'd like to begin with these quotes which says:
              </p>
              <p>
                "Don't marry the person you think you can live with; marry only the individual you think you can't live without."
              </p>
              <p>
                "Happy is the man who finds a true friend, and far happier is he who finds that true friend in his wife."
              </p>
            </div>
          }
        />
      </div>
    </div>
  )
}


type CoupleComponentProps = {
  name: string;
  about: React.ReactNode;
  position: 'RIGHT' | 'LEFT';
  socials: { link: string, icon: IconType }[];
}
export const CoupleComponent = ({ name, about, position, socials }: CoupleComponentProps) => {

  return (
    <div 
    className="flex flex-col gap-y-2 md:w-[40%]">
      <h3 className={`${position === 'LEFT' ? 'text-right' : ''} vibes font-bold text-4xl capitalize`}>{name}</h3>
      <div className="text-xs font-medium">{about}</div>

      <div className={`${position === 'LEFT' ? 'self-start' : 'self-end'} flex items-center gap-x-3 py-1`}>
       {
        socials.map((Icon, index) => (
          Icon.link ?
          <a href={Icon.link} key={index} target="_blank"
          className="rounded-full p-1 hover:bg-gray-200 bg-gray-400 bg-opacity-50 transition-colors grid place-content-center"
          >
            <Icon.icon className="text-xl text-pink-600 hover:scale-[1.002] active:scale-[1] transition-transform cursor-pointer " />
          </a>
          : null
        ))
       }
      </div>
    </div>
  )
}