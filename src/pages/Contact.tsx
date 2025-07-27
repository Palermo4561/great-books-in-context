import Page from '@/components/Page'
import Text from '@/components/Text'
import { Separator } from 'radix-ui'

export default function Contact() {
  return (
    <Page id="contact" className="bg-light-blue">
      <Text type="subheader">Questions? Comments?</Text>
      <Text type="p_md">
        Contact Christian Bateman at{' '}
        <a href="mailto: cab2364@columbia.edu" className="text-dark-blue underline">
          cab2364@columbia.edu
        </a>
      </Text>
      {/* TODO: add a 'copy to clipboard' icon here? */}
      <div className="mx-auto mt-3 mb-6 h-0.5 w-5/6 rounded-2xl bg-black" />
      <Text type="header">Thank you for your interest!</Text>
      <Text type="p_md">We hope to see you ar a lecture series event soon.</Text>
      <Text className="mt-4" type="p_sm">
        <span className="italic">"The roots of education are bitter, but the fruit is sweet."</span> - Laertius
      </Text>
    </Page>
  )
}
