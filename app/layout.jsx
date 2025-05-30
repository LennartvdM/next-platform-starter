import "../styles/globals.css";
import Navbar from "@/components/ui/Navbar";

export const metadata = {
  title: "Scroll‑Snap Site",
  description: "Next.js + Netlify + Tailwind",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
