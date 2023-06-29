import NavBar from '@/components/navBar'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Event Master',
  description: 'Event Master',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body className={inter.className}>

        <NavBar></NavBar>
        <main>{children}</main>
        <Footer></Footer>
        </body>
    </html>
  )
}
