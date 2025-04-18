import '../styles/globals.css'
import Navbar from '../components/Navbar'

export const metadata = {
  title: 'My Scroll‑Snap Site',
  description: 'Built with Next.js & Netlify',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
