import {Inter} from "@next/font/google"

import '@/styles/reset.css'
import '@/styles/global.css'

import Header from "@/components/header/header"
import Footer from "@/components/footer/footer"

const interFontFamily = Inter({subsets:["latin"]})

export default function RootLayout({ children }) {
  return (
    <html lang="tr" className={interFontFamily.className}>
      <body className='container'>
        <Header/>
        <main>{children}</main>
        <Footer/>
      </body>
    </html>
  )
}
