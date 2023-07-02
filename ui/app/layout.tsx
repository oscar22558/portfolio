import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'Oscar\'s Portfolio',
    description: 'Oscar Shum\'s portfolio',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" >
            <body className={`${inter.className}`}>
                {children}
                <div id="top-of-site-pixel-anchor"></div>
            </body>
        </html>
    )
}
