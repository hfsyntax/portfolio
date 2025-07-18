import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "@/app/globals.css"
import "@fortawesome/fontawesome-svg-core/styles.css"
import { ReactNode } from "react"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { Providers } from "./providers"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Noah Kaiser - Portfolio",
  description:
    "A portfolio containing website applications made by Noah Kaiser.",
  applicationName: "NoahKaiser",
  referrer: "origin-when-cross-origin",
  keywords: ["Noah Kaiser Portfolio", "noah kaiser portfolio"],
  authors: [{ name: "Noah Kaiser", url: "https://noahkaiser.vercel.app" }],
  creator: "Noah Kaiser",
  publisher: "Noah Kaiser",
  metadataBase: new URL("https://noahkaiser.vercel.app"),
  openGraph: {
    title: "Noah Kaiser - Portfolio",
    description:
      "A portfolio containing website applications made by Noah Kaiser.",
    type: "website",
    locale: "en_US",
    url: "https://noahkaiser.vercel.app",
    siteName: "NoahKaiser",
    images: "/opengraph-image.png",
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <div className="absolute flex min-h-full w-full flex-col bg-background text-color">
            <Navbar />
            {children}
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  )
}
