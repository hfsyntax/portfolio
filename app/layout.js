import { Inter } from "next/font/google"
import "../public/css/globals.css"
import "@fortawesome/fontawesome-svg-core/styles.css"
import Container from "../components/Container"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Container id="wrapper">
          <Navbar/>
          {children}
          <Footer/>
        </Container>
      </body>
    </html>
  )
}