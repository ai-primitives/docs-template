import Image from 'next/image'
import React from 'react'

const Footer = ({ menu }) => (
  <div className="flex w-full flex-col items-center sm:items-start">
    <div>
      <a
        className="flex items-center gap-1 text-current"
        target="_blank"
        rel="noopener noreferrer"
        href="https://driv.ly"
      >
        <Image
          src="/images/PoweredByDrivly.svg"
          alt="Powered by Drivly"
          width={120}
          height={30}
          style={{ filter: 'brightness(0) invert(1)' }}
        />
      </a>
    </div>
    <p className="mt-6 text-xs">
      © {new Date().getFullYear()} Docs Template
    </p>
  </div>
)

const themeConfig = {
  useNextSeoProps() {
    return {
      titleTemplate: '%s – Docs Template'
    }
  },
  logo: <span>Docs Template</span>,
  project: {
    link: 'https://github.com/ai-primitives/docs-template'
  },
  docsRepositoryBase: 'https://github.com/ai-primitives/docs-template',
  footer: {
    component: Footer
  }
}

export default themeConfig
