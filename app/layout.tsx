import React from 'react'
import './globals.css'

export const metadata = {
  title: 'Countdown Timer',
  description: 'A countdown timer that ends in intentional nothingness',
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
