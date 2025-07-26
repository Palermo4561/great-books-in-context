import Page from '@/components/Page'
import Text from '@/components/Text'

export default function Contact() {
  return (
    <Page className="bg-light-blue">
      <Text type="subheader">Questions? Comments?</Text>
      <Text type="p_md">
        Contact Christian Bateman as{' '}
        <a href="mailto: cab2364@columbia.edu" className="text-dark-blue underline">
          cab2364@columbia.edu
        </a>
      </Text>
      {/* TODO: add a 'copy to clipboard' icon here? */}
    </Page>
  )
}
