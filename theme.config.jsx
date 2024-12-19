import { useRouter } from 'next/router'
import { useConfig } from 'nextra-theme-docs'

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
    const { asPath } = useRouter()
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
      <div className="flex w-full items-center justify-between">
        <div>
          <span>MIT {new Date().getFullYear()} © AI Primitives.</span>
        </div>
      </div>
    )
  }
}
