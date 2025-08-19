import React from 'react'

import Navbar from './components/Navbar'
import { Contact, Events, Footer, Mission, Overview, SignUp, Title } from './pages'

export default function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Title />
      <Overview />
      <Mission />
      <Events />
      <SignUp />
      <Contact />
      <Footer />
    </React.Fragment>
  )
}
