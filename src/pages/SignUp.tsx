import { useState } from 'react'
import type { HTMLAttributes, PropsWithChildren } from 'react'
import { toast } from 'sonner'

import { postSubscriber } from '@/api/kit'
import Page from '@/components/Page'
import Text from '@/components/Text'
import { cn } from '@/lib/utils'

const FormText = ({ children, className }: HTMLAttributes<HTMLHeadingElement> & PropsWithChildren) => {
  return (
    <Text
      type='p_sm'
      className={cn(
        'border-dark-red my-0 rounded-xl border-4 border-solid bg-white flex flew-row items-start',
        className
      )}
    >
      {children}
    </Text>
  )
}

export default function SignUp() {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')

  const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    postSubscriber(email, name)
      .then((res) => res.data)
      .then((data) => {
        toast.success(`Successfully registered ${data.subscriber.email_address}.`, {
          description: data.subscriber.first_name.length > 0 ? ` Thanks, ${data.subscriber.first_name}!` : '',
        })
      })
      .catch(() => toast.error('Error - could not register email'))
  }

  return (
    <Page id='signup' className='bg-dark-tan border-dark-blue border-3 shadow-lg shadow-dark-blue'>
      <Text type='subheader' className='italic'>
        Interested?
      </Text>
      <Text type='header'>Join our mailing list</Text>
      <Text type='p_md'>Stay updated on events and opportunities</Text>
      <div className='flex flex-row justify-center my-5 box-border'>
        <form onSubmit={submitForm} className='flex flex-row justify-center gap-10 w-5/6'>
          <FormText className='grow'>
            <label className='w-full items-start flex flex-row'>
              Email:
              <input
                className='bg-white ml-3 focus:outline-0 text-gray-500 grow'
                type='email'
                name='email_address'
                placeholder='example@domain.com (required)'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
          </FormText>
          <FormText>
            <label>
              Name:
              <input
                className='bg-white ml-3 focus:outline-0 text-gray-500'
                type='text'
                name='name'
                placeholder='First Last (optional)'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
          </FormText>

          <div className='relative w-[calc(1/8*100%)]'>
            <div className='w-full h-full flex flex-row justify-center items-center top-0 left-0'>
              <button
                type='submit'
                className='absolute bg-dark-red h-full rounded-xl transition duration-200 ease-in-out hover:scale-110 font-bold text-2xl active:scale-100 text-white px-3 hover:border-4 hover:border-white cursor-pointer'
              >
                Subscribe
              </button>
            </div>
          </div>
        </form>
      </div>
    </Page>
  )
}
