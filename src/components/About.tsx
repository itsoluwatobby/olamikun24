import { IconType } from "react-icons";
import { Socials } from "../utils/constants";


export default function About() {


  return (
    <div
    id='About'
    className="py-4 flex flex-col gap-y-5 h-[60%] maxscreen:h-full"
    >

      <div className="px-6 maxscreen:px-3 flex md:items-start items-center maxscreen:flex-col gap-5">
        <CoupleComponent 
          name={'Adekunmi Oluwaseun'} position="RIGHT" 
          socials={Socials.Bride}
          about={'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis asperiores itaque exercitationem, iusto delectus voluptatem veniam amet harum impedit, dicta molestiae ullam facere explicabo pariatur nobis, minus porro consequuntur tempore.'}
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
          about={'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis asperiores itaque exercitationem, iusto delectus voluptatem veniam amet harum impedit, dicta molestiae ullam facere explicabo pariatur nobis, minus porro consequuntur tempore.'}
        />
      </div>
    </div>
  )
}


type CoupleComponentProps = {
  name: string;
  about: string;
  position: 'RIGHT' | 'LEFT';
  socials: { link: string, icon: IconType }[]
}
export const CoupleComponent = ({ name, about, position, socials }: CoupleComponentProps) => {

  return (
    <div className="flex flex-col gap-y-2">
      <h3 className={`${position === 'LEFT' ? 'text-right' : ''} vibes font-bold text-4xl capitalize`}>{name}</h3>
      <p className="text-xs font-medium">{about}</p>

      <div className={`${position === 'LEFT' ? 'self-start' : 'self-end'} flex items-center gap-x-3 py-1`}>
       {
        socials.map((Icon, index) => (
          Icon.link ?
          <a href={Icon.link} key={index} target="_blank"
          className="rounded-full p-1 hover:bg-gray-200 bg-gray-400 bg-opacity-50 transition-colors grid place-content-center"
          >
            <Icon.icon className="text-xl text-pink-800 hover:scale-[1.002] active:scale-[1] transition-transform cursor-pointer " />
          </a>
          : null
        ))
       }
      </div>
    </div>
  )
}