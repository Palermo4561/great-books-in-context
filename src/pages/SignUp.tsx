import { type ReactNode, useState } from 'react'

import { postSubscriber } from '@/api/kit'
import Page from '@/components/Page'
import Text from '@/components/Text'

const FormText = ({ children }: { children: ReactNode }) => {
  return (
    <Text type='p_sm' className='border-dark-red my-0 rounded-xl border-4 border-solid bg-white'>
      {children}
    </Text>
  )
}

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
      <div className='flex flex-col justify-center '>
        <form onSubmit={submitForm} className='flex flex-row justify-center gap-10'>
          <FormText>
            <label>
              Name:
              <input
                className='bg-white ml-3 focus:outline-0 text-gray-500'
                type='text'
                name='name'
                placeholder='First Last'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
          </FormText>
          <FormText>
            <label>
              Email:
              <input
                className='bg-white ml-3 focus:outline-0 text-gray-500 w-[400px]'
                type='email'
                name='email_address'
                placeholder='example@domain.com'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
          </FormText>
          <button type='submit' className='bg-dark-red rounded-xl font-bold text-2xl text-white px-3'>
            Submit
          </button>
        </form>
      </div>

      <p className='font-bold bg-black text-white text-2xl'>{outputText}</p>
    </Page>
  )
}
