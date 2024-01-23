import { setCustomBackgroundImage } from "../utils/helpers"


export default function OurWedding() {
 

  return (
    <div 
    id='Our Wedding'
    className="maxscreen:mt- h-full w-full flex flex-col items-center gap-y-6 p-3"
    >
      <div className="self-center">
        <h3 className="vibes text-center text-2xl text-pink-600 capitalize">Our Wedding</h3>
        <h5>When and Where</h5>
      </div>

      <div>
        {
          <PictureFrame 
            eventType="Engagement" eventTime="2nd March, 2024   Time: 7am" image=''
            venue="Alma-Rohm Baptism Church Multipurpose hal, Ile Maarun, Hospital Road, Iwo Osun State."
          />
        }
      </div>
    </div>
  )
}

type PictureFrameProps = {
  eventType: string;
  image: string;
  eventTime: string;
  venue: string
}
const PictureFrame = ({ eventType, image, eventTime, venue }: PictureFrameProps) => {


  return (
    <article 
    style={setCustomBackgroundImage(image)}
    className="relative h-fit w-40 rounded-tr-md rounded-bl-md">

      <div className="inter absolute bottom-3 flex flex-col gap-y-4 items-center w-[90%] right-2 left-2">
        <p className="pacifico text-xl">{eventType}</p>
        <div className="h-[2px] w-full bg-pink-500"/>
        <p className="">{eventTime}</p>
        <p className="">{venue}</p>
      </div>
    </article>
  )
}