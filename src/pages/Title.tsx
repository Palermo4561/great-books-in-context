import Page from '@/components/Page'
import Text from '@/components/Text'

const Column = () => {
  return (
    <div className='w-60 overflow-hidden'>
      <img alt='Column' src='/column.png' className='mb-[-50px]' />
    </div>
  )
}

const Book = () => {
  return <img alt='Book' src='/open_book.png' className='mx-auto w-1/2' />
}

export default function Title() {
  return (
    <Page id='title' className='bg-light-blue p-0'>
      <div className='flex flex-row justify-between'>
        <Column />
        <div className='flex flex-col content-center justify-between pt-20'>
          <Text type='headliner'>Great Books in Context</Text>
          <Text type='p_md'>A lecture series hosted by Christian Bateman</Text>
          <Book />
        </div>
        <Column />
      </div>
    </Page>
  )
}
