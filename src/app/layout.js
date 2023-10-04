import Footer from "../../components/layout/Footer"
import Navbar from "../../components/layout/Navbar"
import Providers from "../../redux/Providers"
import './globals.css'  

export const metadata = {
  title: 'Stuff Shop',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers> 
          <Navbar />  
          {children}
          <Footer />
        </Providers>
        
        </body>
    </html>
  )
}
