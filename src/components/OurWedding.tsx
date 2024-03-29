import { eventTypes } from "../utils/constants";
import { setCustomBackgroundImage } from "../utils/helpers"


type OurWeddingProps = {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}
export default function OurWedding({ setOpen }: OurWeddingProps) {


  return (
    <div
      id='Our Wedding'
      onClick={() => setOpen(false)}
      className="maxscreen:mt- h-full w-full flex flex-col items-center gap-y-6 p-3"
    >
      <div className="self-center flex flex-col items-center gap-y-1">
        <h3 className="inter text-center text-4xl text-pink-600 capitalize">Our Wedding</h3>
        <h5 className="vibes font-semibold text-3xl">When and Where</h5>
      </div>

      <div className="flex items-center gap-5 flex-wrap justify-center maxmobile:flex-col">
        {
          eventTypes.map(event => (
            <PictureFrame key={event.eventType}
              eventType={event.eventType} eventTime={event.eventTime} image={event.image}
              venue={event.venue} eventDate={event.Time} locationLink={event.locationLink}
            />
          ))
        }
      </div>
    </div>
  )
}

type PictureFrameProps = {
  eventType: string;
  eventDate: string;
  image: string;
  locationLink: string;
  eventTime: string;
  venue: string
}
const PictureFrame = ({ eventType, eventDate, image, eventTime, locationLink, venue }: PictureFrameProps) => {


  return (
    <article
      style={setCustomBackgroundImage(image)}
      className="relative h-[26rem] w-80 bg-slate-300 rounded-tr-md rounded-bl-md">

      <a href={locationLink} target='_blank' className="inter text-xs rounded-sm absolute bottom-3 flex flex-col gap-y-4 items-center bg-white w-[90%] left-4 px-4 py-3">
        <p className="pacifico text-2xl whitespace-nowrap">{eventType}</p>
        <div className="h-[2px] w-full bg-pink-500" />
        <p className="">Date: {eventTime}</p>
        <p className="">Time: {eventDate}</p>
        <p className="text-xs text-center">{venue}</p>
      </a>
    </article>
  )
}
