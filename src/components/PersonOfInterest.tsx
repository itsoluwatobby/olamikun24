

export default function PersonOfInterest() {
  return (
    <div
      className="maxscreen:mt- h-full w-full flex flex-col items-center gap-y-6 p-3"
    >
      <div className="flex flex-col items-center self-center">
        <h3 className="text-lg text-pink-600">Important Persons</h3>
        <h4 className="pacifico text-2xl font-medium">Bridesmaid and Groomsmen</h4>
      </div>

      <div className="flex items-center gap-x-2 flex-wrap min-w-[70%]">
        <Person name="noname" designation="Bridesmaid" image="" />
        <Person name="Olanipekun Amos" designation="Groomsmen" image="" />
        <Person name="noname" designation="Bridesmaid" image="" />
        <Person name="noname" designation="Groomsmen" image="" />
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
      <figure className="bg-slate-300 bg-opacity-50 flex-none w-32 h-44 rounded-full shadow-sm">
        <img src={image} alt="" className='h-full w-full object-cover rounded-full' />
      </figure>

      <div className="flex flex-col items-center">
        <p className="vibes text-base font-semibold tracking-wide capitalize">{name}</p>
        <p className="text-pink-600 text-xs font-medium">{designation}</p>
      </div>
    </div>
  )
}