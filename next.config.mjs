import nextra from 'nextra'

const withNextra = nextra({
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
