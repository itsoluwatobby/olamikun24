import { ChangeEvent, FormEvent, useState } from "react";
import { sanitizeEntries, setCustomBackgroundImage } from "../utils/helpers";
import { toast } from "react-toastify";


type RsvpProps = {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setPrintIv: React.Dispatch<React.SetStateAction<Toggle>>;
}

const initInputValue = {
  name: '', phoneNumber: '', 
  present: { "YES": true, "NO": false }, 
  message: '', numberOfGuests: 'Number of Guests', 
  isAttendingType: 'What will you be Attending',
}
const initAppState = { isLoading: false, error: '' }

export default function Rsvp({ setPrintIv, setOpen }: RsvpProps) {
  const [appState, setAppState] = useState<typeof initAppState>(initAppState);
  const WhatWillYouBeAttending = ['All Events', 'Engagement', 'Church Ceremony', 'Reception']
  const [inputValue, setInputValue] = useState<typeof initInputValue>(initInputValue);

  const { name, phoneNumber, present, message, numberOfGuests, isAttendingType } = inputValue;
  const { isLoading } = appState;

  const handleChecks = (event: ChangeEvent<HTMLInputElement>, target: string) => {
    const [attriName, value] = [event.target.name, event.target.checked]
    setInputValue(prev => ({ ...prev, [attriName]: {
      [target]: value
    }}))
  }

  const canSubmit = [name, phoneNumber].every(Boolean);

  const handleSubmit = async() => {
    if (isLoading) return
    setAppState(prev => ({...prev, isLoading: true}));
    try {
      const apiUrl = import.meta.env.VITE_CONNECTION_URL
      const date = new Intl.DateTimeFormat('en-us', {
        dateStyle: 'medium' }).format(new Date()) 
      let newEntry = {
        Date: date, Name: name, 
        "Phone number": phoneNumber, 
        "Will you be attending": present.YES ? 'YES' : 'NO',
        "Number of guests": numberOfGuests,
        "What will you be Attending": isAttendingType,
        Message: message
      };
      newEntry = sanitizeEntries(newEntry);
      const res = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newEntry)
      })
      if (res.ok) {
        setPrintIv('OPEN')
        toast.success('Response recorded, Please print your Invitation Card')
        setInputValue(initInputValue)
      }
    }
    catch (error) {
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
    onClick={() => setOpen(false)}
    style={setCustomBackgroundImage(
      'https://firebasestorage.googleapis.com/v0/b/olamikun24.appspot.com/o/new%2FIQA_7237.jpg?alt=media&token=7e15e73c-3aeb-49b6-bf16-238f4e3f6f70'
    )}
    className="maxscreen:mt- h-full w-full flex flex-col maxscreen:items-center gap-y-6 py-14 sm:pl-14"
    >
      <div className="p-5 bg-white rounded-md flex flex-col gap-y-4 w-80 text-xs">
        <h3 className="vibes text-2xl font-bold tracking-wider capitalize text-center">Are You Attending</h3>

        <Inputs
          value={name} name='name' placeholder='Name   *required' type='name'
          required={true} setInputValue={setInputValue}
        />
        <Inputs
          value={phoneNumber} name='phoneNumber' placeholder='PhoneNumber   *required' type='tel'
          required={true} setInputValue={setInputValue}
        />

        <div className="flex items-center justify-between text-xs">
          <div className="flex items-center gap-x-2">
            <input
              type='radio'
              id='positive'
              name='present' checked={present.YES}
              onChange={(event) => handleChecks(event, 'YES')}
              className="border-x-0 focus-outline-0 p-2 border-t-0 w-3"
            />
            <label htmlFor="positive">Yes, I will be there</label>
          </div>
          <div className="flex items-center gap-x-2">
            <input type='radio'
              id='negative'
              name='present' checked={present.NO}
              onChange={(event) => handleChecks(event, 'NO')}
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
          disabled={!canSubmit}
          onClick={handleSubmit} 
          className={`${canSubmit ? 'bg-pink-600 hover:bg-gradient-to-tr from-pink-500 to-pink-800' : 'bg-gray-500'} transition-colors text-white border-0 px-5 self-center text-sm w-fit py-3 rounded-[3px] focus:outline-0`}
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
