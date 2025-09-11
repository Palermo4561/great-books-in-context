import { Toaster } from '@/components/ui/sonner'

import Navbar from './components/Navbar'
import { Contact, Events, Footer, Mission, SignUp, Title } from './pages'

export default function App() {
  return (
    <div className='bg-light-blue'>
      <Navbar />
      <Title />
      <Mission />
      <Events />
      <SignUp />
      <Contact />
      <Footer />
      <Toaster position='top-center' richColors />
    </div>
  )
}
