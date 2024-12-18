import Image from 'next/image'

export default {
  footer: {
    content: (
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
        <span>
          MIT {new Date().getFullYear()} © Nextra
        </span>
        <a href="https://driv.ly" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center' }}>
          <Image
            src="/images/PoweredByDrivly.svg"
            alt="Powered by Drivly"
            width={120}
            height={30}
            style={{ filter: 'brightness(0) invert(1)' }}
          />
        </a>
      </div>
    )
  }
}
