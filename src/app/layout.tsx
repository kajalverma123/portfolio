import './globals.css'
import './pearl-mist-bg.css'
import type { Metadata } from 'next'
import { ThemeProvider } from './components/theme-provider'
import { Providers } from './providers'
import Header from './components/Header'
import Footer from './components/Footer'
import SocialMedia from './components/SocialMedia'


export const metadata: Metadata = {
  title: 'Kajal Verma - Full Stack Developer',
  description: 'Emerging Full Stack Developer with hands-on experience in Java, Spring Boot and React. Building responsive web applications and RESTful APIs.',
  keywords: 'developer, portfolio, full stack, java, spring boot, react, web developer, kajal verma',
}

export const viewport = {
  width: 'device-width',
  initialScale: 1.0,
  maximumScale: 5.0,
  userScalable: true,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-body">
        <Providers>
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
            <div className="min-h-screen w-full flex flex-col relative bg-black text-white">
              {/* Pearl Mist Background with Top Glow */}
              <div className="absolute inset-0 z-0 bg-pearl-mist" />
              <div className="relative z-10 flex flex-col min-h-screen">
                <Header />
                <main className="flex-1">{children}</main>
                <Footer />
                <SocialMedia />
              </div>
            </div>
          </ThemeProvider>
        </Providers>
      </body>
    </html>
  )
}
