/* eslint-env node */
import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Banner, Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import Image from 'next/image'
import 'nextra-theme-docs/style.css'

export const { viewport } = Head

export const metadata = {
  metadataBase: new URL('https://nextra.site'),
  title: {
    template: '%s - Nextra',
  },
  description: 'Nextra: the Next.js site builder',
  applicationName: 'Nextra',
  generator: 'Next.js',
  appleWebApp: {
    title: 'Nextra',
  },
  other: {
    'msapplication-TileImage': '/ms-icon-144x144.png',
    'msapplication-TileColor': '#fff',
  },
  twitter: {
    site: 'https://nextra.site',
  },
}

export default async function RootLayout({ children }) {
  const navbar = (
    <Navbar
      logo={
        <div>
          <b>Nextra</b> <span style={{ opacity: '60%' }}>The Next Docs Builder</span>
        </div>
      }
      // Next.js discord server
      chatLink="https://discord.gg/BHZCzx83"
    />
  )

  const footer = (
    <div className="flex w-full flex-col items-center sm:items-start">
      <div>
        <a
          className="flex items-center gap-1 text-current"
          target="_blank"
          rel="noopener noreferrer"
          href="https://driv.ly"
          title="Powered by Drivly"
        >
          <Image
            src="/images/PoweredByDrivly.svg"
            alt="Powered by Drivly"
            width={120}
            height={30}
            style={{ filter: 'brightness(0) invert(1)' }}
            priority
          />
        </a>
      </div>
      <Footer />
    </div>
  )

  return (
    <html lang='en' dir='ltr' suppressHydrationWarning>
      <Head faviconGlyph='✦' />
      <body>
        <Layout
          banner={<Banner storageKey='Nextra 2'>Nextra 2 Alpha</Banner>}
          navbar={navbar}
          footer={footer}
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
