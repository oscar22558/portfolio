import './globals.css'
import { Inter, Raleway } from 'next/font/google'

const raleway = Raleway({subsets: ["latin"]})

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
            <body className={`${raleway.className}`}>
                {children}
                <div id="top-of-site-pixel-anchor"></div>
            </body>
        </html>
    )
}
