import { setCustomBackgroundImage } from "../utils/helpers";


type PersonOfInterestProps = {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}
export default function PersonOfInterest({ setOpen }: PersonOfInterestProps) {
  
  return (
    <div
      id='Person of Interest'
      onClick={() => setOpen(false)}
      className="maxscreen:mt- h-full w-full flex flex-col items-center gap-y-6 p-3"
    >
      <div className="flex flex-col items-center self-center">
        <h3 className="text-4xl text-pink-600">Important Persons</h3>
        <h4 className="pacifico text-3xl font-medium">Bridesmaid and Groomsmen</h4>
      </div>

      <div className="flex items-center gap-x-4 flex-wrap min-w-[70%]">
        <Person name="Sani Kofoworola Agnes" designation="Bridesmaid" image="https://firebasestorage.googleapis.com/v0/b/olamikun24.appspot.com/o/personOfInterest%2FIMG-20240123-WA0018.jpg?alt=media&token=ef58e910-995a-4b11-9da3-189cd2bbfd52" />
        <Person name="Olanipekun Amos" designation="Groomsmen" 
        image="https://firebasestorage.googleapis.com/v0/b/olamikun24.appspot.com/o/personOfInterest%2FIMG-20240123-WA0013.jpg?alt=media&token=08ce484e-3286-4af9-a226-b2c8f2d04ce9" 
        />
        <Person name="Akanmu peace Omosalawa" designation="Bridesmaid" 
        image="https://firebasestorage.googleapis.com/v0/b/olamikun24.appspot.com/o/personOfInterest%2FIMG-20240124-WA0001.jpg?alt=media&token=dc5435da-549c-44ea-b7d8-6f9e0dcaacb0en=3ea6404f-a801-4f1f-8699-b7d881570394" />
        <Person name="Gbenle Mubarak" designation="Groomsmen" 
        image="https://firebasestorage.googleapis.com/v0/b/olamikun24.appspot.com/o/personOfInterest%2FIMG-20240123-WA0014.jpg?alt=media&token=0cb5c404-11ec-49c9-bd75-b2dffe4b5a03" 
        />
      </div>

    </div>
  )
}

type PersonProps ={
  name: string;
  designation: string;
  image: string
}

const Person = ({ name, designation, image }: PersonProps) => {

  return (
    <div className="flex-auto flex p-2 flex-col items-center gap-3">
      <figure 
      style={setCustomBackgroundImage(image, {
        backgroundSize: 'contain',
      })}
      className="bg-slate-300 bg-opacity-50 flex-none w-32 h-44 rounded-full shadow-sm">
        {/* <img src={image} alt="" className='h-full w-full object-cover rounded-full' /> */}
      </figure>

      <div className="flex flex-col items-center">
        <p className="vibes text-base font-semibold tracking-wide capitalize">{name}</p>
        <p className="text-pink-600 text-xs font-medium">{designation}</p>
      </div>
    </div>
  )
}
