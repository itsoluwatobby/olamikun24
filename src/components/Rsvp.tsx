import { useState } from "react";
import { setCustomBackgroundImage } from "../utils/helpers";
import { toast } from "react-toastify";


type RsvpProps = {
  setPrintIv: React.Dispatch<React.SetStateAction<Toggle>>
}

const initInputValue = {
  name: '', phoneNumber: '', 
  present: { "YES": true, "NO": false }, 
  message: '', numberOfGuests: 'Number of Guests', 
  isAttendingType: 'What will you be Attending',
}
const initAppState = { isLoading: false, error: '' }
const ConnectionUrl = 'https://sheet.best/api/sheets/364bf18b-2069-4654-8e31-90ad9e0014e8'

export default function Rsvp({ setPrintIv }: RsvpProps) {
  const [appState, setAppState] = useState<typeof initAppState>(initAppState);
  const WhatWillYouBeAttending = ['Engagement', 'Church Ceremony', 'Reception', 'All Events']
  const [inputValue, setInputValue] = useState<typeof initInputValue>(initInputValue);

  const { name, phoneNumber, present, message, numberOfGuests, isAttendingType } = inputValue;
  const { isLoading } = appState;

  const handleSubmit = async() => {
    setAppState(prev => ({...prev, isLoading: true}));
    try {
      const date = new Intl.DateTimeFormat('en-us', {
        dateStyle: 'medium'
      }).format(new Date())
      console.log(inputValue)
      await fetch(ConnectionUrl, {
        method: 'POST',
        
      })
      setPrintIv('OPEN')
      toast.success('RSVP submitted, Please print your Invitation Card')
    }
    catch (error) {
      console.log(error)
      setPrintIv('OPEN')
      setAppState(prev => ({...prev, error: ''}));
      toast.error('Fail to submit')
    }
    finally{
      setAppState(prev => ({...prev, isLoading: false}));
    }
  }
  return (
    <div
    id='RSVP'
      style={setCustomBackgroundImage(
        'https://firebasestorage.googleapis.com/v0/b/olamikun24.appspot.com/o/new%2FIQA_7237.jpg?alt=media&token=7e15e73c-3aeb-49b6-bf16-238f4e3f6f70'
      )}
      className="maxscreen:mt- h-full w-full flex flex-col maxscreen:items-center gap-y-6 py-14 sm:pl-14"
    >
      <div className="p-5 bg-white rounded-md flex flex-col gap-y-4 w-72 text-xs">
        <h3 className="vibes text-2xl font-bold tracking-wider capitalize text-center">Are You Attending</h3>

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

        <Inputs
          value={message} name='message' placeholder='Optional message to couple' type='text'
          required={false} setInputValue={setInputValue}
        />

        <button
          onClick={handleSubmit}
          className="bg-pink-600 text-white border-0 px-5 self-center text-sm w-fit py-3 rounded-[3px] focus:outline-0 hover:bg-gradient-to-tr from-pink-500 to-pink-800"
        >
          {isLoading ? 'In progress...' : 'RSVP'}
        </button>
      </div>
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
      // inputMode={type == 'tel' ? 'numeric' : 'text'}
      placeholder={placeholder}
      required={required}
      onChange={e => setInputValue(prev => ({ ...prev, [e.target.name]: e.target.value }))}
      className="inter border-0 border-gray-700 border-b-[1px] py-2 focus:outline-0 px-2 w-full placeholder:text-gray-700"
    />
  )
}
