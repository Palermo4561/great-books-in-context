import FadeInSection from '@/components/FadeInSection'
import Page from '@/components/Page'
import Text from '@/components/Text'
import { getAssetPath } from '@/lib/utils'

const Column = () => {
  return (
    <div className='w-60 overflow-y-hidden'>
      <img alt='Column' src={getAssetPath('column.png')} className='mb-[-50px]' />
    </div>
  )
}

const Book = () => {
  return (
    <img
      alt='Book'
      src={getAssetPath('open_book.png')}
      className='mx-auto w-1/2 drop-shadow-xl drop-shadow-dark-blue'
    />
  )
}

export default function Title() {
  return (
    <Page id='title' className='bg-light-blue p-0 m-0 h-full overflow-x-clip rounded-t-none grid grid-rows-[1fr_5%]'>
      <div className='flex flex-row justify-between'>
        <Column />
        <FadeInSection className='flex flex-col content-center justify-center gap-5 pt-20 max-w-1/2'>
          <Text type='headliner' className='text-wrap'>
            Great Books in Context
          </Text>
          <Text type='p_md'>A lecture series hosted by Christian Bateman</Text>
          <Book />
        </FadeInSection>
        <Column />
      </div>
      <div className='h-full grid grid-rows-3'>
        <div className='bg-pillar-bottom' />
        <div className='row-span-2 bg-gradient-to-b from-pillar-bottom to-light-blue'></div>
      </div>
    </Page>
  )
}
