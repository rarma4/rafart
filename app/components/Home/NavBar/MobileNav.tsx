import { NavLinks } from '@/app/[locale]/constants/constant'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { CgClose } from 'react-icons/cg'


type Props = {
    closeNav: () => void
    showNav: boolean
}

const MobileNav = ({ closeNav, showNav }: Props) => {

    const t = useTranslations('NavBar');


    const navOpen = showNav ? "trasnlate-x-0" : "translate-x-[100%]"
    return (
        <div>
            {/* Overlay */}
            <div className={`fixed inset-0 flex transform ${navOpen} transition-all right-0 duration-500 z-100002 bg-black opacity-70 w-full h-screen`}></div>
            {/* Nav Links */}
            <div className={`text-[#171D1D] fixed justify-center flex flex-col h-full transform ${navOpen} transition-all duration-500 delay-300 w-[80%] sm:w-[60%] bg-amber-500 space-y-6 z-100050 right-0`}>
                {NavLinks.map((link) => {
                    return (
                        <Link key={link.id} href={link.url} onClick={closeNav}>
                            <p className='text-[#171D1D] w-fit text-xl ml-12 border-b-[1.5px] pb-1 border-[#171D1D] sm:text-[30px]'>
                                {t(link.labelKey)}
                            </p>
                        </Link>
                    )
                })}
                {/* Cross Icon */}
                <CgClose onClick={closeNav} className='absolute top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6' />
            </div>
        </div>
    )
}

export default MobileNav