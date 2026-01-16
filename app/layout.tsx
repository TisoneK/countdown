import React from 'react'
import './globals.css'

export const metadata = {
  title: 'Please wait',
  description: 'A countdown timer that ends in intentional nothingness',
  icons: {
    icon: '/favicon.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
