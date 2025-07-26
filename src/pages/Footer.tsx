import Page from '@/components/Page'
import Text from '@/components/Text'

export default function Footer() {
  return (
    <Page className="bg-dark-red">
      <Text type="header">Footer - this will take extra styling</Text>

      <a rel="noopener" href="https://www.vecteezy.com" target="_blank" className="text-light-blue underline">
        PNGs from Vecteezy
      </a>
    </Page>
  )
}
