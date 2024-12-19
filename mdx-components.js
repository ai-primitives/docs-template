import { useMDXComponents as baseComponents } from '@mdx-js/react'

export function useMDXComponents(components) {
  return {
    ...baseComponents(components),
    ...components
  }
}
