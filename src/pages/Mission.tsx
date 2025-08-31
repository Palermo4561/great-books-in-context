import FadeInSection from '@/components/FadeInSection'
import Page from '@/components/Page'
import Text from '@/components/Text'
import { getAssetPath } from '@/lib/utils'

export default function Mission() {
  return (
    <Page id='mission' className='p-0 m-0'>
      <div className='relative border-t-5 border-b-5 border-dark-blue'>
        <img
          aria-label='Columbia University'
          className='relative blur-xs'
          src={getAssetPath('/columbia_background_cropped.jpeg')}
        />
        <div className='absolute z-10 w-full h-full flex flex-col gap-10 justify-center items-center top-0 left-0'>
          <FadeInSection>
            <Text type='header' className='underline font-bold'>
              Our Mission
            </Text>
          </FadeInSection>
          <div className='p-6 w-1/2 bg-dark-blue opacity-85 rounded-4xl z-10 shadow-black shadow-lg'>
            <FadeInSection>
              <Text type='p_sm' className='opacity-100 font-bold text-black'>
                For over a century, the Columbia Core Curriculum has exposed students to the Great Books of Western
                literature and philosophy through small, discussion-based seminars. However, there are few opportunities
                for students to hear directly from leading thinkers who engage critically with these foundational texts.
                Our initiative aims to fill that gap by hosting lectures that place key works from the Literature
                Humanities and Contemporary Civilization syllabi in broader intellectual and historical contexts.
              </Text>
            </FadeInSection>
          </div>
        </div>
      </div>
    </Page>
  )
}
