import { ChangeEvent, FormEvent, useState } from "react";


const initInputValue = {
  name: '', phoneNumber: '', present: {
    "YES": true,
    "NO": false
  }, numberOfGuests: 'Number of Guests', isAttendingType: 'What will you be Attending',
}

export default function Rsvp() {
  const WhatWillYouBeAttending = ['Engagement', 'Church Ceremony', 'Reception', 'All Events']
  const [inputValue, setInputValue] = useState<typeof initInputValue>(initInputValue);

  const { name, phoneNumber, present, numberOfGuests, isAttendingType } = inputValue

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    try {
      console.log(inputValue)
    }
    catch (error) {
      console.log(error)
    }
  }
  return (
    <div
      className="maxscreen:mt- h-full w-full flex flex-col items-center gap-y-6 p-3"
    >
      <form onSubmit={handleSubmit} className="bg-white rounded-md flex flex-col gap-y-4 w-72 text-xs">
        <legend className="vibes text-2xl font-bold tracking-wider capitalize text-center">Are You Attending</legend>

        <Inputs
          value={name} name='name' placeholder='Name' type='name'
          required={true} setInputValue={setInputValue}
        />
        <Inputs
          value={phoneNumber} name='phoneNumber' placeholder='PhoneNumber' type='tel'
          required={true} setInputValue={setInputValue}
        />

        <div className="flex items-center justify-between text-xs">
          <div className="flex items-center gap-x-2">
            <input
              type='radio'
              id='positive'
              name='present' checked={present.YES}
              onChange={e => setInputValue(prev => ({ ...prev, [e.target.name]: e.target.checked }))}
              className="border-x-0 focus-outline-0 p-2 border-t-0 w-3"
            />
            <label htmlFor="positive">Yes, I will be there</label>
          </div>
          <div className="flex items-center gap-x-2">
            <input type='radio'
              id='negative'
              name='present' checked={present.NO}
              onChange={e => setInputValue(prev => ({ ...prev, [e.target.name]: e.target.checked }))}
              className="border-x-0 focus-outline-0 p-2 border-t-0 w-3 h-3 marker:bg-pink-600"
            />
            <label htmlFor="negative">Sorry, I can't come</label>
          </div>
        </div>

        <select name="numberOfGuests" id=""
          value={numberOfGuests}
          onChange={e => setInputValue(prev => ({ ...prev, [e.target.name]: e.target.value }))}
          className="inter text-[12px] focus:outline-0 border-0 border-gray-700 border-b-[1px] py-2"
        >
          <option value="">Number of Guests</option>
          {
            [...Array(10).keys()].map(num => (
              <option key={num + 1} value={num + 1} className="text-center">{num + 1}</option>
            ))
          }
        </select>

        <select name="isAttendingType" value={isAttendingType}
          onChange={e => setInputValue(prev => ({ ...prev, [e.target.name]: e.target.value }))}
          className="inter text-[12px] focus:outline-0 border-0 border-gray-700 border-b-[1px] py-2"
        >
          <option value="" className="capitalize">What will you be Attending</option>
          {
            WhatWillYouBeAttending.map(event => (
              <option key={event} value={event} className="text-center p-1">{event}</option>
            ))
          }
        </select>

        <button
          type="submit"
          className="bg-pink-600 border-0 px-5 self-center text-sm w-fit py-3 rounded-[3px] focus:outline-0 hover:bg-gradient-to-tr from-pink-600 to-pink-700 text-black"
        >
          RSVP
        </button>
      </form>
    </div>
  )
}


type InputProps = {
  value: string;
  name: string;
  placeholder: string;
  type: string;
  required: boolean;
  setInputValue: React.Dispatch<React.SetStateAction<typeof initInputValue>>
}
const Inputs = ({ type, value, name, placeholder, required, setInputValue }: InputProps) => {

  return (
    <input type={type}
      name={name} value={value}
      inputMode={type == 'tel' ? 'numeric' : 'tel'}
      placeholder={placeholder}
      required={required}
      onChange={e => setInputValue(prev => ({ ...prev, [e.target.name]: e.target.value }))}
      className="inter border-0 border-gray-700 border-b-[1px] py-2 focus:outline-0 px-2 w-full placeholder:text-gray-700"
    />
  )
}