import { useRouter } from 'next/navigation'
import { useConfig } from 'nextra-theme-docs'
import Image from 'next/image'

export default {
  logo: <span>Docs Template</span>,
  project: {
    link: 'https://github.com/ai-primitives/docs-template'
  },
  chat: {
    link: 'https://discord.gg/BHZCzx83'
  },
  docsRepositoryBase: 'https://github.com/ai-primitives/docs-template',
  useNextSeoProps() {
    return {
      titleTemplate: '%s – Docs Template'
    }
  },
  head: () => {
    const { frontMatter } = useConfig()
    return (
      <>
        <meta property="og:title" content={frontMatter.title || 'Docs Template'} />
        <meta property="og:description" content={frontMatter.description || 'Documentation Template'} />
      </>
    )
  },
  footer: {
    text: (
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
              priority
            />
          </a>
        </div>
      </div>
    )
  }
}
