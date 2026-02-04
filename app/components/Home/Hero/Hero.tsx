'use client'
import Image from 'next/image'
import { BsArrowRight } from 'react-icons/bs'
import Typewriter from 'typewriter-effect'
import ParticlesHero from './ParticleBackground'
import { useTranslations } from 'next-intl'
import photHero from '../../../../public/assets/images/photo_hero.webp'
import Tilt from 'react-parallax-tilt'
const Hero = () => {
    const t = useTranslations('HeroPage');
    return (
        <div className='relative flex items-center justify-center text-zinc-300 h-screen overflow-hidden flex-col'>
            <ParticlesHero />
            <div className='relative z-10 flex flex-col items-center'>
                <Tilt scale={1.1} transitionSpeed={300}>
                    <Image src={photHero} alt='Rafael Marinho' title="Rafael Marinho" width={150} height={150} className='rounded-full border-8 border-[#f89406aa]' data-aos="fade-up"  priority/>
                </Tilt>
                <h1 data-aos="fade-up" data-aos-delay="200" className='text-2xl sm:text-4xl md:text-5xl lg:text-5xl mt-6 text-center font-bold tracking-wide'>{t('title')}<br />
                    {t('titleBreak')} <span className='text-amber-500'>{t('titleSpan')}</span>
                </h1>
                <h2 data-aos="fade-up" data-aos-delay="400" className='mt-5 text-[13px] px-2 text-center sm:text-2xl font-medium flex items-center'>
                    {t('subtitle')}
                    <span className='font-bold text-amber-500'>
                        <Typewriter options={{
                            strings: [
                                t('subtitleOp1'),
                                t('subtitleOp2'),
                                t('subtitleOp3'),
                                t('subtitleOp4'),
                            ],
                            autoStart: true,
                            loop: true,
                            delay: 75,
                            deleteSpeed: 50,
                            wrapperClassName: 'pl-2',

                        }} />
                    </span>
                </h2>
                {/* button to works */}
                <a href={'#works'}>
                    <button data-aos="fade-up" data-aos-delay="600" className='text-[#171D1D] mt-6 px-10 py-4 bg-amber-500 hover:bg-[#ff9500] transition-all duration-300 cursor-pointer rounded-full text-lg font-medium'>
                        <span className='text-[#171D1D]'>{t('button')}</span>
                        <BsArrowRight className='w-5 h-5 ml-2 inline-block' />
                    </button>
                </a>

            </div>
        </div>
    )
}

export default Hero