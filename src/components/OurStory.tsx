import useObserver from "../hooks/useObserver"


type OurStoryProps = {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}
export default function OurStory({ setOpen }: OurStoryProps) {
  const { isIntersecting: isIntersecting0, observerRef: observerRef0 } = useObserver({ screenPosition: '0px', threshold: 1 })
  const { isIntersecting: isIntersecting1, observerRef: observerRef1 } = useObserver({ screenPosition: '0px', threshold: 1 })
  // last 3 observers for both small screens and large screens
  const { isIntersecting: isIntersecting3, observerRef: observerRef3 } = useObserver({ screenPosition: '0px', threshold: 1 })
  const { isIntersecting: isIntersecting4, observerRef: observerRef4 } = useObserver({ screenPosition: '0px', threshold: 1 })
  const { isIntersecting: isIntersecting5, observerRef: observerRef5 } = useObserver({ screenPosition: '0px', threshold: 1 })
  // first 3 observers for large screens above 767px
  const { isIntersecting: isIntersecting6, observerRef: observerRef6 } = useObserver({ screenPosition: '0px', threshold: 0.9 })
  const { isIntersecting: isIntersecting7, observerRef: observerRef7 } = useObserver({ screenPosition: '0px', threshold: 0.9 })
  const { isIntersecting: isIntersecting8, observerRef: observerRef8 } = useObserver({ screenPosition: '0px', threshold: 0.9 })

  const observerRefs = [observerRef6, observerRef7, observerRef8, observerRef3, observerRef4, observerRef5]
  const intersections = [isIntersecting6, isIntersecting7, isIntersecting8, isIntersecting3, isIntersecting4, isIntersecting5]

  return (
    <div
      id='Our Story'
      onClick={() => setOpen(false)}
      className="h-full w-full m-auto flex flex-col items-center gap-y-5 p-3">
      <div className="self-center flex flex-col items-center">
        <h3 className="text-center text-4xl text-pink-600">Our Story</h3>
        <h5 className="text-2xl pacifico">How it happened</h5>
      </div>

      <div className='relative flex flex-col md:justify-center md:flex-row gap-5 text-[13px] py-8'>

        <div className='h-full flex flex-col gap-5 font-medium md:w-[45%]'>
          <TimelineCard
            observerRef={observerRef0} isIntersecting={isIntersecting0} image={[
              'https://firebasestorage.googleapis.com/v0/b/olamikun24.appspot.com/o/beginning%2FIMG-20240122-WA0005.jpg?alt=media&token=24a88662-b7bd-4b35-b08c-db57327fb840',
              'https://firebasestorage.googleapis.com/v0/b/olamikun24.appspot.com/o/beginning%2FIMG-20240122-WA0000.jpg?alt=media&token=642d328d-6855-42e2-b1c6-1bb90563bb06'
            ]}
            title='HOW WE MET' date='Undergraduate days' count={1}
            content="We met in University concerning a sad event that occurred to me and I was approached by these beautiful damsel asking me for my name which I told her and suddenly she said do I know the meaning of the name I said No, she said Because I ask from the lord..This sparked something in me and I was inquisitive to know more about her personality."
          />

          <TimelineCard
            observerRef={observerRef1} isIntersecting={isIntersecting1} image={[
              'https://firebasestorage.googleapis.com/v0/b/olamikun24.appspot.com/o/beginning%2FIMG-20240122-WA0004.jpg?alt=media&token=50ad2041-1733-4fa4-90cc-8ecc291f7881',
              'https://firebasestorage.googleapis.com/v0/b/olamikun24.appspot.com/o/beginning%2FIMG-20240122-WA0003.jpg?alt=media&token=848fe83c-1d6c-4f42-ab48-635fcc2070d1'
            ]}
            title='Continuation' date='Undergraduate days' count={2}
            content="I just had that feeling I have found the right one for me….We became close friends for years but I knew I wanted more so I seize my opportunity at the right moment and Here we are today It&apos;s been a journey and It doesn&apos;t matter where you are going, it&apos;s who you have beside you."
          />
        </div>

        <div className='hidden md:flex flex-col items-center'>
          {
            [...Array(4).keys()]?.map(i => (
              <div
                key={i}
                ref={observerRefs[i] as React.LegacyRef<HTMLDivElement>}
                className='hidden md:flex flex-col gap-1.5 py-0.5 items-center h-full'>
                <div className='w-0.5 h-full bg-[#c788d7]' />
                <p className={`w-5 h-7 ${intersections[i] === 'SWITCH' ? 'md:-translate-y-0' : 'md:-translate-y-20'} transition-all  rounded-full bg-gradient-to-r to-indigo-500 from-[#ce2af7] grid place-content-center text-xs`}>{i + 1}</p>
              </div>
            ))
          }
        </div>

        <div className='h-full flex flex-col gap-5 md:w-[45%]'>
          <TimelineCard
            observerRef={observerRef3} isIntersecting={isIntersecting3} image={[
              'https://firebasestorage.googleapis.com/v0/b/olamikun24.appspot.com/o/Proposal%2FIMG-20240124-WA0004.jpg?alt=media&token=2024935f-e1b6-4c68-95ed-812c20bc8a09',
              'https://firebasestorage.googleapis.com/v0/b/olamikun24.appspot.com/o/Proposal%2FIMG-20240124-WA0003.jpg?alt=media&token=3c4d122a-3446-4240-90ce-b79f51a571c6'
            ]}
            title='Proposal' date='February 24, 2023' count={4}
            content={`On this special day i took her out on a date like i've done she wasn't suspicious of anything since it isn't something out the ordinary. And like always say "One thing led to another" went on one knee and here we are today about to make it official `}
          />

          <TimelineCard
            observerRef={observerRef4} isIntersecting={isIntersecting4} image={[
              'https://firebasestorage.googleapis.com/v0/b/olamikun24.appspot.com/o/new%2FDSC_0407.JPG?alt=media&token=fa242ed3-5d38-42a5-bee5-64320d635e35',
              'https://firebasestorage.googleapis.com/v0/b/olamikun24.appspot.com/o/new%2FIMG-20240122-WA0008.jpg?alt=media&token=d9170da6-232b-4c70-8be4-e85a6c757a4b',
              'https://firebasestorage.googleapis.com/v0/b/olamikun24.appspot.com/o/mid%2FIMG-20240122-WA0010.jpg?alt=media&token=9f44e4c6-744c-4a22-900c-66d7484ab2cd'
            ]}
            title='Journey so far' date='Present and Forever' count={4}
            content="Every day with you is a wonderful addition to my life's journey. If i had the power I'd give you the ability to see yourself through my eyes. Only then would you realize how special you are to me."
          />
        </div>

      </div>

      <div className="grid-pics">
        <img src="https://firebasestorage.googleapis.com/v0/b/olamikun24.appspot.com/o/new%2FIQA_7185.jpg?alt=media&token=e7d448ec-7ce3-40f0-8640-d2587e7257a2" alt="" className="br reveal-image2" loading="lazy" />
        <img src="https://firebasestorage.googleapis.com/v0/b/olamikun24.appspot.com/o/new%2FIMG-20240122-WA0008.jpg?alt=media&token=d9170da6-232b-4c70-8be4-e85a6c757a4b" alt="" className="dr reveal-image" loading="lazy" />
        <img src="https://firebasestorage.googleapis.com/v0/b/olamikun24.appspot.com/o/new%2FIQA_7221.jpg?alt=media&token=d84faf06-6dbd-4b25-9579-8f66c3303f31" alt="" className="fr" loading="lazy" />
        <img src="https://firebasestorage.googleapis.com/v0/b/olamikun24.appspot.com/o/new%2FIMG-20240122-WA0009.jpg?alt=media&token=5b689827-ef35-4aa6-885c-3ca19ede8b0a" alt="" className="cr reveal-image" loading="lazy" />
        <img src="https://firebasestorage.googleapis.com/v0/b/olamikun24.appspot.com/o/new%2FIQA_7202.jpg?alt=media&token=6801b853-bc48-42e0-8b6d-5f983853c378" alt="" className="er reveal-image2" loading="lazy" />
      </div>

    </div>
  )
}

type CardProps = {
  title: string,
  date: string,
  content: string,
  count: number,
  image: string[],
  isIntersecting: IsIntersectingType,
  observerRef: (node: HTMLDivElement) => void
}

const TimelineCard = ({ title, date, content, image, count, isIntersecting, observerRef }: CardProps) => {

  return (
    <div
      id='timeline'
      ref={observerRef}
      className={`flex items-center gap-2 ${count > 3 ? 'md:translate-y-10' : ''} text-xs align-top`}>

      <div className={`flex flex-col transition-all md:hidden gap-1 py-0.5 items-center h-full`}>
        <div className='w-0.5 h-full bg-[#c788d7]' />
        <p className={`w-4 h-4 ${isIntersecting === 'SWITCH' ? 'midscreen:translate-y-0' : 'midscreen:-translate-y-20'} transition-all rounded-full bg-gradient-to-r to-indigo-500 from-[#ce2af7] grid place-content-center text-xs`}>{count}</p>
      </div>

      <div className={`flex ${count > 3 ? 'md:flex-col-reverse flex-col' : 'flex-col'} gap-1 md:gap-11 whitespace-pre-wrap font-medium cursor-pointer transition-all leading-5`}>
        <div className='flex flex-col gap-1'>
          <p className='pacifico font-medium text-base'>{title}</p>

          <div className="flex items-center gap-x-2">
            {
              image.map((img, i) => (
                <figure key={i} className="flex-none bg-slate-300 bg-opacity-50 w-20 h-20 rounded-full shadow-sm border-0">
                  <img src={img} alt="" className='h-full w-full object-contain rounded-full' loading="lazy" />
                </figure>
              ))
            }
          </div>
          <p className='w-[90%] text-[11px]'>{content}</p>
        </div>
        <p className={`text-[#be3255] ${count > 3 ? (isIntersecting === 'STOP' ? 'text-right' : 'text-left') : (isIntersecting === 'STOP' ? 'md:text-left text-right' : 'md:text-right text-left')} transition-all`}>{date}</p>
      </div>

    </div>
  )
}