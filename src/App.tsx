import { useState } from 'react';
import About from './components/About'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero';
import Confetti from 'react-confetti';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import OurStory from './components/OurStory'
import OurWedding from './components/OurWedding'
import BridalParty from './components/BridalParty'
import Rsvp from './components/Rsvp';
import { InvitationCard } from './components/InVitationCard';
import { setCustomBackgroundImage } from './utils/helpers';

export const App = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [printIv, setPrintIv] = useState<Toggle>('CLOSE')
  const [displayConfetti, setDisplayConfetti] = useState<Toggle>('CLOSE')

  return (
    <main
      style={setCustomBackgroundImage(
        'https://firebasestorage.googleapis.com/v0/b/olamikun24.appspot.com/o/new%2FIMG-20240122-WA0006.jpg?alt=media&token=2e971398-df50-4b93-be6b-3df9e6987b8d',
        {
          backgroundAttachment: 'fixed',
          backgroundSize: 'cover'
        }
      )}
      className='relative text-sm flex flex-col gap-y-5 w-full overflow-y-scroll transition-all scroll-smooth'>
      <Header open={open} setOpen={setOpen} setPrintIv={setPrintIv} />
      <Hero
        setOpen={setOpen} displayConfetti={displayConfetti}
        setDisplayConfetti={setDisplayConfetti}
      />
      <About setOpen={setOpen} />
      <OurStory setOpen={setOpen} />
      <BridalParty setOpen={setOpen} />
      <Rsvp setPrintIv={setPrintIv} setOpen={setOpen} />
      <OurWedding setOpen={setOpen} />
      <Footer setOpen={setOpen} />

      {
        printIv === 'OPEN' ?
          <InvitationCard setPrintIv={setPrintIv} />
          : null
      }

      {
        displayConfetti === 'OPEN' ?
          <Confetti
            width={typeof window !== 'undefined' ? window.innerWidth : 300}
            height={600}
            numberOfPieces={400}
            recycle={true}
          />
          : null
      }
      <ToastContainer />
    </main>
  )
}
