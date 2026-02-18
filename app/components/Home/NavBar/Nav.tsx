"use client"
import { NavLinks } from '@/app/[locale]/constants/constant'
import { useLocale, useTranslations } from 'next-intl'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { BiDownload } from 'react-icons/bi'
import { HiBars3BottomRight } from 'react-icons/hi2'
import LanguageSelect from './LanguageSelect'
import Image from 'next/image'
import logoRafArt from '../../../../public/assets/images/rafart-logo.svg'

type Props = {
    openNav: () => void
}

const Nav = ({ openNav }: Props) => {

    const t = useTranslations('NavBar');
    const locale = useLocale();
    const cvHref = locale.toLowerCase().startsWith('pt')
        ? '/files/frontEnd-React-RafaelMarinho-pt.pdf'
        : '/files/frontEnd-React-RafaelMarinho-en.pdf';


    const [activeSection, setActiveSection] = useState('home')

    useEffect(() => {
        const sections = document.querySelectorAll('section')

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id)
                    }
                })
            },
            {
                threshold: 0.25, // 25% da section visível
            }
        )

        sections.forEach(section => observer.observe(section))

        return () => observer.disconnect()
    }, [])

    const [navBg, setNavBg] = useState(false)

    useEffect(() => {
        const handler = () => {
            if (window.scrollY >= 90) setNavBg(true)
            else setNavBg(false)
        }

        window.addEventListener("scroll", handler)

        return () => window.removeEventListener("scroll", handler)
    }, [])

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <div className={`transition-all ${navBg ? 'bg-[#171D1Dd9] shadow-md' : 'fixed'} duration-200 h-[12vh] z-10000 fixed w-full bg-[#00000010] backdrop-blur-sm`}>
            <div className='flex items-center h-full justify-between lg:justify-evenly w-[90%] mx-auto '>
                {/* Logo */}
                <Link href="/" onClick={scrollToTop}>
                    <div className='flex items-center space-x-2 cursor-pointer'>

                        <Image
                            src={logoRafArt}
                            alt="logo rafart"
                            title="logo rafart"
                            width={30}
                            height={24}
                            priority
                        />
                        <h2 className='text-xl hidden sm:block md:text-2xl text-zinc-400 '>Raf'Art</h2>
                    </div>
                </Link>
                {/* NavLinks */}
                <div className='hidden lg:flex items-center space-x-10'>
                    {NavLinks.map((link) => {
                        return (<Link key={link.id} href={link.url} className={`text-base  ${activeSection === link.section
                            ? 'text-amber-500'
                            : 'text-zinc-300 hover:text-amber-500'
                            } font-medium transition-all duration-200`}>
                            <p>{t(link.labelKey)}</p>
                        </Link>)
                    })}
                </div>
                {/* Buttons */}
                <div className='flex items-center space-x-4'>


                    {/* CV Button */}
                    <a
                        href={cvHref}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button className='px-6 py-2 text-sm cursor-pointer rounded-lg bg-amber-500 hover:bg-[#ff9500] transition-all duration-300 text-zinc-300 flex items-center space-x-2'>
                            <BiDownload className='w-5 h-5 text-[#171D1D]' />
                            <span className=' text-[#171D1D]'>{t('download')}</span>
                        </button>
                    </a>

                    {/* Select language button */}
                    <LanguageSelect />

                    {/* Burger Menu */}
                    <button onClick={openNav}>
                        <HiBars3BottomRight className='w-8 h-8 cursor-pointer text-zinc-300 lg:hidden' />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Nav