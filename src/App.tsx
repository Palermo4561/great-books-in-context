import React from 'react'

import Navbar from './components/Navbar'
import { Contact, Events, Footer, Mission, SignUp, Title } from './pages'

export default function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Title />
      <Mission />
      <Events />
      <SignUp />
      <Contact />
      <Footer />
    </React.Fragment>
  )
}
