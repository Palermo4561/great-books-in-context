import Page from '@/components/Page'
import Text from '@/components/Text'

export default function Title() {
  return (
    <Page className="bg-light-blue">
      <Text type="headliner">The quick brown fox jumps over the lazy dog</Text>
      <Text type="header">The quick brown fox jumps over the lazy dog</Text>
      <Text type="subheader">The quick brown fox jumps over the lazy dog</Text>
      <Text type="p_md">The quick brown fox jumps over the lazy dog</Text>
      <Text type="p_sm">The quick brown fox jumps over the lazy dog</Text>
      <h1>Title Page</h1>
    </Page>
  )
}
