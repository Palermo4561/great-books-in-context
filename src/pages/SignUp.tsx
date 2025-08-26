import { useState } from 'react'

import { postSubscriber } from '@/api/kit'
import Page from '@/components/Page'
import Text from '@/components/Text'

export default function SignUp() {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [outputText, setOutputText] = useState('')

  const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    postSubscriber(email, name)
      .then((res) => res.data)
      .then((data) => setOutputText(data.subscriber.email_address))
      .catch((err) => setOutputText(err.errors[0]))
  }

  return (
    <Page id='signup' className='bg-dark-tan'>
      <Text type='subheader'>Interested?</Text>
      <Text type='header'>Join our mailing list</Text>
      <Text type='p_md'>Stay updated on events and opportunities</Text>
      <div className='border-dark-red mx-auto mt-8 mb-4 flex h-15 w-5/6 flex-col justify-center rounded-xl border-4 border-solid bg-white align-middle'>
        <Text type='p_sm' className='text-gray bold mx-auto'>
          Name and email input, and sign up button
        </Text>
      </div>
      <form onSubmit={submitForm}>
        <label>
          Name:
          <input
            className='bg-white text-black'
            type='text'
            name='name'
            placeholder='First Last'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Email:
          <input
            className='bg-white text-black'
            type='email'
            name='email_address'
            placeholder='example@domain.com'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <button type='submit'>Submit</button>
      </form>

      <p className='font-bold bg-black text-white text-2xl'>{outputText}</p>
    </Page>
  )
}
