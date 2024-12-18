import nextra from 'nextra'

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.jsx',
  defaultShowCopyCode: true,
  search: {
    codeblocks: false
  },
  latex: true,
  contentDirBasePath: '/',
  staticImage: true,
  codeHighlight: true
})

export default withNextra({
  reactStrictMode: true
})
