
import type { Metadata } from 'next'

export const metadata: Metadata = {
    metadataBase: new URL('https://www.rafart.com.br/'),
    alternates: {
      canonical: '/sobre',
    },
    title: `Raf'Art – Developer and WebDesign`,
    description: 'Pagina de Rafael Marinho desenvolvedor senior frontend',
    robots: 'index, follow',
}

export default function SobreLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            {children}
        </>
    )
}
