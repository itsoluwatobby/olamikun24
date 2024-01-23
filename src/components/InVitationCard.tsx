import Star from '/star.png'
import StarWhite from '/starWhite.png'
import spark from '/spark.png'
// import { setCustomBackgroundImage } from '../utils/helpers'
// import { useReactToPrint } from "react-to-print";
import { useRef } from 'react'
// import { FaFileDownload } from 'react-icons/fa';


type InvitationCardProps = {
  setPrintIv: React.Dispatch<React.SetStateAction<Toggle>>
}
export const InvitationCard = ({ setPrintIv }: InvitationCardProps) => {
  const invitationRef = useRef(null)

  // const printPDF = useReactToPrint({
  //   content: () => invitationRef?.current,
  //   pageStyle: `{ padding: 2rem 1rem 1rem }`,
  //   documentTitle: 'OLAMIKUN_2024',
  //   onAfterPrint: () => alert('Document downloaded successsfully'),
  //   onPrintError: () => alert('Error printing document')
  // })

  return (
    <section className='fixed z-50 flex items-center justify-center bg-slate-700 bg-opacity-90 top-10 w-full h-full'>
      <button
      onClick={() => setPrintIv('CLOSE')}
       className='absolute top-1 right-2 focus:outline-0 border-0 text-white rounded-sm bg-slate-900 text-xs px-4 py-1.5 hover:opacity-90 active:opacity-100 transition-opacity'
      >
        Close
      </button>
      {/* <FaFileDownload title='download Invite' 
      onClick={printPDF}
      className='text-2xl absolute z-10 top-14 left-6 text-white cursor-pointer hover:opacity-90 active:opacity-100 transition-opacity' /> */}
      <article 
      ref={invitationRef}
      // style={setCustomBackgroundImage(Globe, {

      // })}
      className="relative w-[29rem] p-3 shadow-md bg-orange-800 text-white min-h-[36rem] rounded-tr-xl rounded-bl-xl flex flex-col gap-y-5 justify-center">
        <img src={Star} alt="star" className='absolute top-36 left-24 object-cover w-3 self-center' loading='lazy' />
        <img src={Star} alt="star" className='absolute top-3 right-24 object-cover w-3 self-center' loading='lazy' />
        <img src={spark} alt="star" className='absolute top-20 right-28 object-cover w-3 self-center' loading='lazy' />
        <img src={Star} alt="star" className='absolute top-44 left-8 object-cover w-3 self-center' loading='lazy' />
        <img src={Star} alt="star" className='absolute top-24 left-48 object-cover w-3 self-center' loading='lazy' />
        <img src={Star} alt="spark" className='absolute left-28 object-cover w-3 self-center' loading='lazy' />
        
        <div className='flex flex-col gap-y-5 text-base items-center'>
          <h1 className='uppercase'>Save the Date</h1>

          <h3 className='vibes text-6xl text-center'>OluwaSeun And Olamilekan</h3>

          <p>Invites you to their wedding celebration</p>

          <p>March 2, 2024</p>

          <div className='inter flex flex-col text-xs gap-y-1 px-4'>
            <p className='text-center'>Engagement venue [Time: 7am]:</p>
            <p>
            Alma-Rohm Baptism Church Multipurpose hal, Ile Maarun, Hospital Road, Iwo Osun State.
            </p>
          </div>
          
          <div className='inter flex flex-col text-xs'>
            <p className='text-center'>Church venue [Time: 10am]:</p>
            <p>
            Victory Baptism Church, Beside Forestry, off Ile Igbo Road, Iwo Osun State.
            </p>
          </div>

          <div className='inter flex flex-col text-xs gap-y-1 px-4'>
            <p className='text-center'>Reception venue [Time: After church]:</p>
            <p>
            Alma-Rohm Baptism Church Multipurpose hal, Ile Maarun, Hospital Road, Iwo Osun State.
            </p>
          </div>
        </div>
        <img src={StarWhite} alt="star" loading='lazy' className='absolute right-32 bottom-5 rotate-12 object-cover w-2 self-center' />
        <img src={StarWhite} alt="star" loading='lazy' className='absolute right-12 bottom-16 rotate-12 object-cover w-2 self-center' />
        <img src={spark} alt="spark" loading='lazy' className='absolute right-48 bottom-32 rotate-12 object-cover w-2 self-center' />
        <img src={StarWhite} alt="star" loading='lazy' className='absolute right-32 bottom-5 rotate-12 object-cover w-2 self-center' />
        
        <img src={Star} alt="star" loading='lazy' className='absolute left-12 bottom-4 object-cover w-2 self-center' />
      </article>
    </section>
  )
}