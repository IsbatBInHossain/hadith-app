import type { Metadata } from 'next'
// import { Inter } from 'next/font/google'
import './globals.css'

// const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ওহীর সূচনা অধ্যায় - সহিহ বুখারী | iHadis.com',
  description:
    'The iHadis app, is a collection of over 49,000 hadith from the most authentic and accepted hadith books of the Prophet Muhammad. The app includes 25 books, including the six hadith books known as Kutub al-Sittah or Sihah Sitta, which means "The Authentic Six".',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='bn'>
      <body className={`  font-kalpurush bg-hadith-bg`}>{children}</body>
    </html>
  )
}
