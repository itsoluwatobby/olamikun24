import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";

export default function About() {


  return (
    <div
    id='About'
    className="py-4 flex flex-col gap-y-5 h-[60%] maxscreen:h-full"
    >

      <div className="px-3 flex md:items-start items-center maxscreen:flex-col gap-5">
        <CoupleComponent 
          name={'Adekunmi Oluwaseun'} position="RIGHT"
          about={'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis asperiores itaque exercitationem, iusto delectus voluptatem veniam amet harum impedit, dicta molestiae ullam facere explicabo pariatur nobis, minus porro consequuntur tempore.'}
        />

        <div className="flex-auto flex items-baseline maxscreen:flex-col maxscreen:items-center gap-3">
          <figure className="flex-none bg-slate-300 bg-opacity-50 w-44 h-44 rounded-full shadow-sm border-0">
            <img src="" alt="" className='h-full w-full object-cover rounded-full' />
          </figure>
          <figure className="flex-none bg-slate-300 bg-opacity-50 w-44 h-44 rounded-full shadow-sm border-0">
            <img src="" alt="" className='h-full w-full object-cover rounded-full' />
          </figure>
        </div>

        <CoupleComponent 
          name={'Samuel Olamilekan'} position="LEFT"
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
}
export const CoupleComponent = ({ name, about, position }: CoupleComponentProps) => {
  const Icons = [
    { link: '', icon: FaFacebookF }, 
    { link: '', icon: FaXTwitter }, 
    { link: '', icon: FaInstagram }
  ]

  return (
    <div className="flex flex-col gap-y-2">
      <h3 className={`${position === 'LEFT' ? 'text-right' : ''} vibes font-bold text-4xl capitalize`}>{name}</h3>
      <p className="text-xs font-medium">{about}</p>

      <div className={`${position === 'LEFT' ? 'self-start' : 'self-end'} flex items-center gap-x-3 py-1`}>
       {
        Icons.map((Icon, index) => (
          <a href={Icon.link} key={index} target="_blank"
          className="rounded-full p-1 hover:bg-gray-200 bg-gray-400 bg-opacity-50 transition-colors grid place-content-center"
          >
            <Icon.icon className="text-xl text-pink-800 hover:scale-[1.002] active:scale-[1] transition-transform cursor-pointer " />
          </a>
        ))
       }
      </div>
    </div>
  )
}