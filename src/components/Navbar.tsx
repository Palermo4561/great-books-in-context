import Text from '@/components/Text'
import { getAssetPath } from '@/lib/utils'

export default function Navbar() {
  return (
    <div className='bg-dark-red fixed top-0 flex w-full flex-row justify-between opacity-95 z-50'>
      <div className='flex flex-row content-center'>
        <img className='my-auto h-10 w-10' alt='Book icon' src={getAssetPath('/book_icon.svg')} />
        <Text type='p_sm' className='font-logo px-1 py-2'>
          GreatBooksInContext
        </Text>
      </div>
      <div className='flex flex-row gap-3'>
        <a href='#mission'>
          <Text type='p_sm' className='py-2 underline'>
            Mission Statement
          </Text>
        </a>
        <a href='#events'>
          <Text type='p_sm' className='py-2 underline'>
            Events
          </Text>
        </a>
        <a href='#signup'>
          <Text type='p_sm' className='py-2 underline'>
            Sign Up
          </Text>
        </a>
        <a href='#contact'>
          <Text type='p_sm' className='py-2 underline'>
            Contact
          </Text>
        </a>
      </div>
    </div>
  )
}
