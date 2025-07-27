import Page from '@/components/Page'
import Text from '@/components/Text'

export default function SignUp() {
  return (
    <Page id="signup" className="bg-dark-tan">
      <Text type="subheader">Interested?</Text>
      <Text type="header">Join our mailing list</Text>
      <Text type="p_md">Stay updated on events and opportunities</Text>
      <div className="border-dark-red mx-auto mt-8 mb-4 flex h-15 w-5/6 flex-col justify-center rounded-xl border-4 border-solid bg-white align-middle">
        <Text type="p_sm" className="text-gray bold mx-auto">
          Name and email input, and sign up button
        </Text>
      </div>
    </Page>
  )
}
