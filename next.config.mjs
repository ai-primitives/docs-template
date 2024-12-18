import nextra from 'nextra'

const withNextra = nextra({
  defaultShowCopyCode: true,
  latex: true,
  search: {
    codeblocks: false,
  },
  contentDirBasePath: '/',
})

export default withNextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.jsx'
})
