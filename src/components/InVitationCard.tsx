import { useRef } from "react"
import InvitationCardImg from '/olamikun24.jpg'
import { FaFileDownload } from "react-icons/fa"


type InvitationCardProps = {
  setPrintIv: React.Dispatch<React.SetStateAction<Toggle>>
}
export const InvitationCard = ({ setPrintIv }: InvitationCardProps) => {
  const invitationRef = useRef(null)

  return (
    <section className='fixed z-50 flex items-cente justify-center bg-slate-700 bg-opacity-90 top-10 w-full h-[95%]'>
      <button
        onClick={() => setPrintIv('CLOSE')}
        className='absolute top-1 right-2 focus:outline-0 border-0 text-white rounded-sm bg-slate-900 text-xs px-4 py-1.5 hover:opacity-90 active:opacity-100 transition-opacity'
      >
        Close
      </button>
      <figure
        ref={invitationRef}
        className="relative w-[29rem] top-[6.5rem] -mt-16 shadow-md bg-slate-400 min-h-[37rem] max-h-[30rem] rounded-tr-xl rounded-bl-xl">
        <a href={InvitationCardImg}
        download={'OLAMIKUN24'}
        className="absolute z-10 top-2 left-2"
        >
          <FaFileDownload title='download Invite'
            className='text-3xl text-black cursor-pointer hover:opacity-90 active:opacity-100 transition-opacity' />
        </a>
          <img src={InvitationCardImg} loading="eager"
          className="object-cover rounded-tr-xl rounded-bl-xl w-full h-full"
        />
      </figure>
    </section>
  )
}