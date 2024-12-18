import nextra from 'nextra'

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.jsx',
  latex: true,
  search: {
    codeblocks: false,
  },
  contentDirBasePath: '/',
})

export default withNextra({
  experimental: {
    appDir: true
  }
})
