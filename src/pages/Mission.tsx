import Page from '@/components/Page'
import Text from '@/components/Text'

export default function Mission() {
  const text = ['Expert Lecturers', 'Engaging Material', 'Thought-Provoking Discussions']

  return (
    <Page id='mission' className='bg-dark-tan'>
      <Text type='header'>
        The Core Curriculum <span className='italic underline'>Reimagined</span>
      </Text>
      <div className='flex flex-row justify-center gap-4 py-8'>
        {Array.from({ length: 3 }).map((_, idx) => (
          <div key={idx} className='flex w-96 flex-col justify-start'>
            <Text className='flex h-30 items-center justify-center' type='subheader'>
              {text[idx]}
            </Text>
            <div className='bg-light-red w-auto rounded-2xl pb-[100%]' />
          </div>
        ))}
      </div>
      <Text type='p_md'>
        ...and <span className='font-bold italic'>much more</span> to engage with the Core Curriculum beyond the
        classroom
      </Text>
    </Page>
  )
}
