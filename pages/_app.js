import '@/styles/globals.css'
import GoToTop from 'components/bottom-to-top/GoToTop'
import Footer from 'components/footer/Footer'
import Navbar from 'components/navbar/Navbar'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />

      <Component {...pageProps} />
      <GoToTop />

      <Footer />
    </>
  )
}