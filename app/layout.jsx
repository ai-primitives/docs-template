/* eslint-env node */
import { Layout } from '@nextra/theme-docs/layout'
import { Banner, Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'

export const { viewport } = Head

export const metadata = {
  metadataBase: new URL('https://docs-template.vercel.app'),
  title: {
    template: '%s - Docs Template',
    default: 'Docs Template'
  },
  description: 'Documentation Template powered by Nextra',
  applicationName: 'Docs Template',
  generator: 'Next.js',
  other: {
    'msapplication-TileColor': '#fff'
  }
}

export default async function RootLayout({ children }) {
  return (
    <html lang='en' dir='ltr' suppressHydrationWarning>
      <Head faviconGlyph='✦' />
      <body>
        <Layout
          banner={<Banner storageKey='Nextra 2'>Nextra 2 Alpha</Banner>}
          editLink='Edit this page on GitHub'
          docsRepositoryBase='https://github.com/ai-primitives/docs-template'
          sidebar={{ defaultMenuCollapseLevel: 1 }}
          pageMap={await getPageMap()}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
