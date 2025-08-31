import ImageContainer from '@/components/ImageContainer'
import OverviewItem from '@/components/OverviewItem'
import Page from '@/components/Page'
import Text from '@/components/Text'

export default function Overview() {
  const text = ['Renowned Lecturers', 'Engaging Material', 'Deep Expertise']
  const images = Array(text.length).fill('/placeholder.png')

  return (
    <Page id='overview'>
      <div className='bg-dark-tan border-5 px-2 py-1 shadow-2xl border-dark-red rounded-2xl'>
        <Text type='header'>The Core Curriculum</Text>
        <Text type='header' className='font-bold italic'>
          Reimagined
        </Text>
      </div>
      <div className='grid grid-cols-3'>
        {text.map((title, idx) => (
          <OverviewItem title={title} src={images[idx]} description='' className='mx-2 my-5' />
        ))}
        {Array.from({ length: 3 }).map((_, idx) => (
          <ImageContainer imagePath={images[idx]} />
        ))}
      </div>
      <div className='bg-dark-tan border-5 px-2 py-1 shadow-2xl border-dark-red rounded-2xl'>
        <Text type='p_md'>
          ...and <span className='font-bold italic'>much more</span> to engage with the Core Curriculum beyond the
          classroom
        </Text>
      </div>
    </Page>
  )
}
