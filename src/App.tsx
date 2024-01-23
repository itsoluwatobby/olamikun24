import { useState } from 'react';
import About from './components/About'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import OurStory from './components/OurStory'
import OurWedding from './components/OurWedding'
import PersonOfInterest from './components/PersonOfInterest'
import Rsvp from './components/Rsvp';
import { InvitationCard } from './components/InVitationCard';

export const App = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [printIv, setPrintIv] = useState<Toggle>('CLOSE')

  return (
    <main
      className='relative text-sm flex flex-col gap-y-5 w-full overflow-y-scroll transition-all scroll-smooth'>
      <Header
        open={open} setOpen={setOpen}
      />
      <Hero />
      <About />
      <OurStory />
      <PersonOfInterest />
      <Rsvp setPrintIv={setPrintIv} />
      <OurWedding />
      <Footer />

      {
        printIv === 'OPEN' ?
        <InvitationCard setPrintIv={setPrintIv} /> 
        : null
      }
      <ToastContainer />
    </main>
  )
}
