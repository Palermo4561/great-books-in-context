import { Toaster } from '@/components/ui/sonner'

import Navbar from './components/Navbar'
import { Contact, Events, Footer, Mission, Overview, SignUp, Title } from './pages'

export default function App() {
  return (
    <div className='bg-light-blue'>
      <Navbar />
      <Title />
      <Overview />
      <Mission />
      <Events />
      <SignUp />
      <Contact />
      <Footer />
      <Toaster position='top-center' richColors />
    </div>
  )
}
