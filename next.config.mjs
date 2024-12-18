import nextra from 'nextra'

const withNextra = nextra({
  latex: true,
  search: {
    codeblocks: false,
  },
  contentDirBasePath: '/',
})

export default withNextra({
  defaultShowCopyCode: true,
  themeConfig: './theme.config.jsx'
})
