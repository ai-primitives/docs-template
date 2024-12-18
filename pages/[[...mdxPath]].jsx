import { useRouter } from 'next/router'
import { getStaticProps, getStaticPaths } from 'nextra/pages'

export { getStaticProps, getStaticPaths }

export default function Page(props) {
  const { Component, pageProps } = props
  return <Component {...pageProps} />
}
