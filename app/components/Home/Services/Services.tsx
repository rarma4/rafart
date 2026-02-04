import ServicesCard from './ServicesCard'
import { FaCode } from "react-icons/fa6";
import { FiShoppingCart } from "react-icons/fi";
import { useTranslations } from 'next-intl'
import { TbPhotoPentagon } from "react-icons/tb";

const Services = () => {
    const t = useTranslations('ServicesPage');

    return (
        <div className='py-16 flex items-center flex-col  w-[75%] mx-auto'>
            <h2 className='text-zinc-300 font-bold text-center text-4xl md:text-4xl xl:text-5xl'>
                {t("title")} <span className='text-amber-500'>{t("titleSpan")}</span>
            </h2>
            <h2 className='mt-5 text-sm px-2 text-center sm:text-2xl font-medium flex items-center text-zinc-300'>
                {t("subtitle")}
            </h2>
            <div className='w-[90%] sm:w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 mt-20 '>
                <div data-aos="fade-right" data-aos-anchor-placement="top-center" >
                    <ServicesCard Icon={FaCode} name={t("titleCard1")} description={t("descriptionCard1")} />
                </div>
                <div data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-delay="100" >
                    <ServicesCard Icon={FiShoppingCart} name={t("titleCard2")} description={t("descriptionCard2")} />
                </div>
                <div data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-delay="200" >
                    <ServicesCard Icon={TbPhotoPentagon} name={t("titleCard3")} description={t("descriptionCard3")} />
                </div>
               
            </div>
        </div>
    )
}

export default Services