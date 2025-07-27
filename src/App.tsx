import React from 'react'
import { Title, Mission, Events, SignUp, Contact, Footer } from './pages'
import Navbar from './components/Navbar'

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
