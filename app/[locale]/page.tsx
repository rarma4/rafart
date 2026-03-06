
import type { Metadata } from 'next'
import Home from '../components/Home/Home'

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params

  return {
    alternates: {
      canonical: `/${locale}`,
      languages: {
        'pt-BR': '/pt',
        en: '/en',
        'x-default': '/pt'
      }
    },
    openGraph: {
      url: `https://www.rafart.com.br/${locale}`
    }
  }
}

const HomePage = () => {
  return (
     <Home/>
  )
}

export default HomePage