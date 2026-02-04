import { useTranslations } from 'next-intl'

const Footer = () => {
  const t = useTranslations("Footer")
  return (
    <div className='bg-[#171D1D] p-5'>
        <h2 className='text-lg text-zinc-300 text-center'>{t("title")}</h2>
    </div>
  )
}

export default Footer