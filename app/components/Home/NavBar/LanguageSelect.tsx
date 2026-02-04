'use client'

import {usePathname, useRouter} from 'next/navigation'
import {useLocale} from 'next-intl'
import {useState} from 'react'
import {HiChevronDown} from 'react-icons/hi2'
import { GiBrazilFlag, GiUsaFlag  } from "react-icons/gi";
import { LiaFlagUsaSolid } from "react-icons/lia";

const languages = [
  { code: 'en', label: 'EN' },
  { code: 'pt', label: 'PT', }
]

const LanguageSelect = () => {
  const [open, setOpen] = useState(false)

  const locale = useLocale()
  const pathname = usePathname()
  const router = useRouter()

  const changeLanguage = (lang: string) => {
    // remove o locale atual da rota
    const newPath = pathname.replace(`/${locale}`, `/${lang}`)
    router.push(newPath)
    setOpen(false)
  }

  return (
    <div className="relative">
      {/* Button */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 px-4 py-2 text-sm rounded-lg 
                   bg-[#171D1D] text-zinc-300 hover:bg-[#2B2B2B]
                   transition-all"
      >
        {locale.toUpperCase()}
        {locale === 'en' ? <LiaFlagUsaSolid className='w-5 h-5' /> : <GiBrazilFlag className='w-5 h-5' /> }
        <HiChevronDown className={`w-4 h-4 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>

      {/* Dropdown */}
      {open && (
        <div
          className="absolute right-0 mt-2 w-24 rounded-lg bg-[#171D1D] shadow-lg 
                     border border-white/10 overflow-hidden z-50"
        >
          {languages.map(lang => (
            <button
              key={lang.code}
              onClick={() => changeLanguage(lang.code)}
              className={`w-full text-left px-4 py-2 text-sm transition-all flex gap-2
                ${locale === lang.code
                  ? 'bg-amber-500 text-[#171D1D] font-semibold'
                  : 'text-zinc-300 hover:bg-[#2B2B2B]'
                }`}
            >
              {lang.label}{lang.label === 'EN' ? <LiaFlagUsaSolid className='w-5 h-5' /> : <GiBrazilFlag className='w-5 h-5' /> }
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default LanguageSelect
