import { useRouter } from 'next/router'
import Image from 'next/image'

export function Footer() {
  const { route } = useRouter()

  return (
    <footer className="nx-bg-gray-100 nx-pb-[env(safe-area-inset-bottom)] dark:nx-bg-neutral-900 print:nx-bg-transparent">
      <div className="nx-mx-auto nx-flex nx-max-w-[90rem] nx-justify-center nx-py-12 nx-text-gray-600 dark:nx-text-gray-400 md:nx-justify-start">
        <div className="nx-flex nx-flex-col nx-items-center nx-gap-2">
          <a
            href="https://driv.ly"
            target="_blank"
            rel="noopener noreferrer"
            className="nx-flex nx-items-center nx-gap-1 nx-text-current"
          >
            <Image
              src="/images/PoweredByDrivly.svg"
              alt="Powered by Drivly"
              width={120}
              height={30}
              className="nx-dark:invert"
            />
          </a>
        </div>
      </div>
    </footer>
  )
}
