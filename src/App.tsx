import { useState } from 'react';
import About from './components/About'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
// import { setCustomBackgroundImage } from './utils/helpers' 
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import OurStory from './components/OurStory'
import OurWedding from './components/OurWedding'
import PersonOfInterest from './components/PersonOfInterest'
import Rsvp from './components/Rsvp';

export const App = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <main
      // style={setCustomBackgroundImage(
      //   'https://images.unsplash.com/photo-1523170887496-4f2e67dd4446?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      //   {
      //     backgroundAttachment: 'fixed',
      //     // backgroundOpacity: '0.55'
      //   }
      // )}
      className='text-sm flex flex-col gap-y-5 w-full overflow-y-scroll transition-all scroll-smooth'>
      <Header
        open={open} setOpen={setOpen}
      />
      <Hero />
      <About />
      <OurStory />
      <PersonOfInterest />
      <Rsvp />
      <OurWedding />
      <Footer />

      <ToastContainer />
    </main>
  )
}
