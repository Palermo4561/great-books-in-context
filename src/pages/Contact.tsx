import { ClipboardList } from 'lucide-react'
import type { HTMLAttributes, PropsWithChildren } from 'react'
import { toast } from 'sonner'

import FadeInSection from '@/components/FadeInSection'
import Page from '@/components/Page'
import Text from '@/components/Text'
import { cn } from '@/lib/utils'

interface WrapProps extends PropsWithChildren, HTMLAttributes<HTMLDivElement> {}

const Wrap = ({ children, className, ...props }: WrapProps) => (
  <FadeInSection>
    <div
      className={cn(
        'p-2 bg-dark-blue rounded-2xl w-full shadow-lg border-light-blue border-2 shadow-dark-blue',
        className
      )}
      {...props}
    >
      {children}
    </div>
  </FadeInSection>
)

export default function Contact() {
  const email = 'cab2364@columbia.edu'

  async function copyToClipboard() {
    const type = 'text/plain'
    const clipboardItemData = {
      [type]: email,
    }
    const clipboardItem = new ClipboardItem(clipboardItemData)

    try {
      await navigator.clipboard.write([clipboardItem])
      toast.success(`Copied '${email}' to clipboard`)
    } catch (error) {
      console.error(error)
      toast.error('Error: Could Not Copy To Clipboard')
    }
  }

  return (
    <Page id='contact'>
      <div className='flex flex-col gap-5 my-[15vw]'>
        <Wrap>
          <Text type='subheader'>Questions? Comments?</Text>
          <div className='flex flex-row gap-3 justify-center items-center'>
            <Text type='p_md'>
              Contact Christian Bateman at{' '}
              <a href={`mailto: ${email}`} className='text-light-blue underline'>
                cab2364@columbia.edu
              </a>
            </Text>
            <button
              type='button'
              className='p-[1vw] m-y-auto h-fit cursor-pointer bg-light-blue rounded-2xl hover:text-gray-700 active:text-black'
              title='Copy to Clipboard'
              onClick={() => copyToClipboard()}
            >
              <ClipboardList />
            </button>
          </div>
        </Wrap>
        <Wrap className='bg-dark-tan flex flex-col gap-5'>
          <Text type='header'>Thank you for your interest!</Text>
          <Text type='p_md'>We hope to see you soon!</Text>
          <Text type='p_sm'>
            <span className='italic font-bold'>"The roots of education are bitter, but the fruit is sweet."</span> -
            Aristotle, Diogenes Laertius <span className='italic'>Lives of Philosophers</span> bk. 5, sect. 18
          </Text>
        </Wrap>
      </div>
    </Page>
  )
}
