import type { Metadata } from 'next'
import Learn from './Learn'

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params

  return {
    alternates: {
      canonical: `/${locale}/learn`,
      languages: {
        'pt-BR': '/pt/learn',
        en: '/en/learn',
        'x-default': '/pt/learn'
      }
    },
    openGraph: {
      url: `https://www.rafart.com.br/${locale}/learn`
    }
  }
}

const LearnPage = () => {
  return (
    <Learn />
  )
}

export default LearnPage
