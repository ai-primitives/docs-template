import { Inter } from 'next/font/google'
import { useTheme } from 'nextra-theme-docs'
import { Footer } from '../components/Footer'
import 'nextra-theme-docs/style.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Docs Template',
  description: 'Documentation Template for AI Primitives',
}

export default function RootLayout({ children }) {
  const { navbar } = useTheme()

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <div className="relative flex min-h-screen flex-col">
          {navbar}
          <main className="flex-auto">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
