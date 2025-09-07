import Page from '@/components/Page'
import Text from '@/components/Text'
import { getAssetPath } from '@/lib/utils'

export default function Footer() {
  return (
    <Page className='bg-dark-red flex flex-col pb-0 m-0 rounded-b-none'>
      <div className='flex flex-row pb-[1vw]'>
        <img aria-label='Book Icon' src={getAssetPath('/book_icon.svg')} className='size-30' />
        <div className='font-logo flex flex-col justify-center'>
          <Text type='header' className='py-0'>
            Great Books in Context
          </Text>
          <Text type='p_md' className='py-0'>
            An original series hosted by Christian Bateman
          </Text>
        </div>
      </div>
      <div className='mx-auto mt-3 mb-6 h-0.5 w-5/6 rounded-2xl bg-black' />

      <div className='flex w-full flex-row justify-between'>
        <div className='flex w-[40vw] flex-row justify-baseline gap-[1vw]'>
          <Text type='p_sm'>© {new Date().getFullYear()}</Text>
          <Text type='p_sm'>
            PNGs from{' '}
            <a rel='noopener' href='https://www.vecteezy.com' target='_blank' className='text-light-blue underline'>
              Vecteezy
            </a>
          </Text>
        </div>
        <Text type='p_sm' className='underline'>
          <a href='#title'>Back to Top</a>
        </Text>
        <div className='flex w-[40vw] flex-row items-center justify-end gap-2 mx-[0.5vw]'>
          <Text type='p_sm'>Website Created by Grayson Palermo, CC '27</Text>
          <a rel='noopener' href='https://github.com/Palermo4561/great-books-in-context' target='_blank'>
            <img aria-label='Source Code to Website' src={getAssetPath('/github_icon.png')} className='w-10 h-auto' />
          </a>
        </div>
      </div>
    </Page>
  )
}
