import Footer from '@/components/footer'
import NavBar from '@/components/navBar'
import PreNav from '@/components/preNav'
import Providers from '@/providers'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Event Master',
  description: 'Event Master is an event planning application',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body className={inter.className}>
        <Providers><PreNav></PreNav>
        <NavBar></NavBar>
        <main>{children}</main>
        <Footer></Footer></Providers>
        </body>
    </html>
  )
}
