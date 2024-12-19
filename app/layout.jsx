/* eslint-env node */
import { Layout, Navbar } from 'nextra-theme-docs'
import { Banner, Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import { Footer } from '../components/Footer'
import 'nextra-theme-docs/style.css'

export const { viewport } = Head

// PLACEHOLDER: metadata object

export default async function RootLayout({ children }) {
  const navbar = (
    <Navbar
      logo={
        <div>
          <b>Nextra</b> <span style={{ opacity: '60%' }}>The Next Docs Builder</span>
        </div>
      }
      chatLink="https://discord.gg/BHZCzx83"
    />
  )
  return (
    <html lang='en' dir='ltr' suppressHydrationWarning>
      <Head faviconGlyph='✦' />
      <body>
        <Layout
          banner={<Banner storageKey='Nextra 2'>Nextra 2 Alpha</Banner>}
          navbar={navbar}
          footer={<Footer />}
          editLink='Edit this page on GitHub'
          docsRepositoryBase='https://github.com/shuding/nextra/blob/main/examples/docs'
          sidebar={{ defaultMenuCollapseLevel: 1 }}
          pageMap={await getPageMap()}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
