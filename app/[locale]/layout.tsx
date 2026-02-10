import type { Metadata } from "next";
import "./globals.css";
import ResponsiveNav from "../components/Home/NavBar/ResponsiveNav";
import Footer from "../components/Home/Footer/Footer";
import ScrollToTop from "../components/Helper/ScrollToTop";
import { Toaster } from "react-hot-toast";
import { NextIntlClientProvider } from "next-intl";
import { hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { Comfortaa } from 'next/font/google'

const FontComfortaa = Comfortaa({
  weight: '700',
  variable: '--font-comfortaa',
  subsets: ['latin'],
  display: 'swap',
})

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isDefaultLocale = locale === 'pt';
  const canonicalPath = isDefaultLocale ? '/pt' : `/${locale}`;

  return {
    title: `Raf'Art – Developer and WebDesign`,
    description: 'Pagina de Rafael Marinho desenvolvedor senior frontend, Bacharel em Sistemas de Informação com sólida experiência em tecnologias como React.js, Next.js, TypeScript, PHP, WordPress,  MySQL e PostgreSQL. Experiência com estilização utilizando Tailwind, Styled Components, SCSS e Bootstrap, além de Performance e SEO.',
    metadataBase: new URL('https://www.rafart.com.br/'),
    alternates: {
      canonical: canonicalPath,
      languages: {
        'pt-BR': '/pt',
        'en': '/en',
      },
    },
    robots: 'index, follow',
    manifest: '/assets/manifest.json',
    keywords: ['Rafael Marinho', 'Rafart', 'Desenvolvedor Web', 'Frontend', 'Web Design', 'Programador', 'Portfolio', 'Desenvolvimento de Sites', 'React', 'Next.js', 'JavaScript', 'CSS', 'HTML', 'Desenvolvedor Senior'],
    openGraph: {
      title: `Raf'Art – Developer and WebDesign`,
      description: 'Pagina de Rafael Marinho desenvolvedor senior frontend, Bacharel em Sistemas de Informação com sólida experiência em tecnologias como React.js, Next.js, TypeScript, PHP, WordPress,  MySQL e PostgreSQL. Experiência com estilização utilizando Tailwind, Styled Components, SCSS e Bootstrap, além de Performance e SEO.',
      url: `https://www.rafart.com.br${canonicalPath}`,
      siteName: `Raf'Art`,
      locale: locale === 'pt' ? 'pt_BR' : 'en_US',
    },
    twitter: {
      title: `Raf'Art – Developer and WebDesign`,
      description: 'Pagina de Rafael Marinho desenvolvedor senior frontend, Bacharel em Sistemas de Informação com sólida experiência em tecnologias como React.js, Next.js, TypeScript, PHP, WordPress,  MySQL e PostgreSQL. Experiência com estilização utilizando Tailwind, Styled Components, SCSS e Bootstrap, além de Performance e SEO.',
      card: 'summary_large_image',
    },  
  };
}

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;

}>) {

  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <head>
        <link rel="preload" href="../assets/images/home-bg.webp" as="image" />
      </head>
      <body
        className={`${FontComfortaa.className} antialiased bg-[#242424] scroll-smooth`}
        suppressHydrationWarning
      >
        <NextIntlClientProvider>
          <ResponsiveNav />
          {children}
          <Footer />
          <ScrollToTop />
          <Toaster position="bottom-right" reverseOrder={false} />
        </NextIntlClientProvider>

      </body>
    </html>
  );
}
