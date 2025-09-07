import FadeInSection from '@/components/FadeInSection'
import OverviewItem from '@/components/OverviewItem'
import Page from '@/components/Page'
import Text from '@/components/Text'
import { getAssetPath } from '@/lib/utils'

export default function Overview() {
  const text = ['Renowned Lecturers', 'Engaging Material', 'Deep Expertise']
  const images = Array(text.length).fill(getAssetPath('/placeholder.png'))

  return (
    <Page id='overview' className='mt-[15vw] flex flex-col gap-10'>
      <FadeInSection className='w-3/4 flex flex-col gap-5'>
        <div className='flex flex-row justify-center-safe flex-wrap gap-5 '>
          {text.map((title, idx) => (
            <OverviewItem title={title} src={images[idx]} description='' className='w-100' />
          ))}
        </div>
      </FadeInSection>
      <FadeInSection>
        <div className='bg-dark-tan border-5 px-2  py-1 shadow-2xl border-dark-red rounded-2xl'>
          <Text type='p_md'>
            ...and <span className='font-bold italic'>much more</span> to engage with the Core Curriculum beyond the
            classroom
          </Text>
        </div>
      </FadeInSection>
    </Page>
  )
}
