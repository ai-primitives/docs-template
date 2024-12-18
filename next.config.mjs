import nextra from 'nextra'

const withNextra = nextra({
  defaultShowCopyCode: true,
  search: {
    codeblocks: false
  },
  latex: true,
  contentDirBasePath: '/'
})

export default withNextra()
