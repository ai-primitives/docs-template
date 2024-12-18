import { generateStaticParamsFor, importPage } from 'nextra/pages'

export const generateStaticParams = generateStaticParamsFor('mdxPath')

export async function generateMetadata(props) {
  const params = await props.params
  const { metadata } = await importPage(params.mdxPath)
  return metadata
}

export default async function Page(props) {
  const params = await props.params
  const { default: Content } = await importPage(params.mdxPath)
  return <Content {...props} />
}
