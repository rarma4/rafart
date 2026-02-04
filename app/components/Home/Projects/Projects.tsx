import { useTranslations } from 'next-intl'
import { useEffect, useRef, useState } from 'react'
import CardProject from './CardProject'

const Projects = () => {

    const t = useTranslations("WorksPage")
    const project = [
        { id: 1, imageSrc: "/assets/images/cbhkd.webp", title: t("titelCard1"), description: t("descriptionCard1"), tecnologies: ["React", "TypeScript", "NextJs", "styled-Components"], link: "https://github.com/rarma4/cbhkd", linkWeb: "https://www.cbhkd.com.br", buttonActive:true },

        { id: 2, imageSrc: "/assets/images/dojo_gestao.webp", title: t("titelCard2"), description: t("descriptionCard2"), tecnologies: ["React", "NextJs", "Dashboard", "TypeScript", "Postgress"], link: "https://github.com/rarma4/dojo-gestao", linkWeb: "https://dojo-gestao.vercel.app/dashboard",buttonActive:true },

        { id: 3, imageSrc: "/assets/images/shopping_movie.webp", title: t("titelCard3"), description: t("descriptionCard3"), tecnologies: ["React", "TypeScript", "Zustand", "styled-Components", "Fetch API"], link: "https://github.com/rarma4/shopping-movie-zustand", linkWeb: "https://shopping-movie-zustand.vercel.app/", buttonActive:true },

        { id: 4, imageSrc: "/assets/images/shopping_movie.webp", title: t("titelCard4"), description: t("descriptionCard4"), tecnologies: ["React", "TypeScript", "Redux", "styled-Components", "Fetch API"], link: "https://github.com/rarma4/shopping-movie-redux", linkWeb: "https://shopping-movie-redux.vercel.app/", buttonActive:true },

        { id: 5, imageSrc: "/assets/images/peso_papel.webp", title: t("titelCard5"), description: t("descriptionCard5"), tecnologies: ["HTML", "Bootstrap", "Javascript"], link: "https://github.com/rarma4/Peso-do-papel", linkWeb: "https://peso-do-papel.vercel.app/", buttonActive:true },

        { id: 6, imageSrc: "/assets/images/centro_referencia.webp", title: t("titelCard6"), description: t("descriptionCard6"), tecnologies: ["HTML", "Bootstrap", "Javascript"], link: "https://github.com/rarma4/centro-de-referencia-bootstrap", linkWeb: "https://centro-de-referencia-bootstrap.vercel.app/", buttonActive:true },
 
    ]
    const [activeIndex, setActiveIndex] = useState<number | null>(null)
    const cardRefs = useRef<(HTMLDivElement | null)[]>([])


    useEffect(() => {
        if (window.innerWidth >= 768) return

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    const index = Number(entry.target.getAttribute('data-index'))
                    if (entry.isIntersecting) {
                        setActiveIndex(index)
                    }
                })
            },
            {
                threshold: 0,
                rootMargin: '-50% 0px -50% 0px'
            }
        )

        cardRefs.current.forEach(el => el && observer.observe(el))

        return () => observer.disconnect()
    }, [])

    return (
        <div className='py-16'>
            <h2 className='text-center text-4xl md:text-4xl xl:text-5xl font-bold text-zinc-300'>{t("title")} <br />{" "} <span className='text-amber-500'>{t("titleSpan")}</span></h2>
            <div className="mx-auto w-[85%] md:w-[70%] grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
                {project.map((p, index) => (
                    <div
                        key={p.id}
                        ref={(el) => {
                            cardRefs.current[index] = el
                        }} data-index={index}
                    >
                        <CardProject
                            delay={p.id}
                            imageSrc={p.imageSrc}
                            title={p.title}
                            description={p.description}
                            tecnologies={p.tecnologies}
                            link={p.link}
                            linkWeb={p.linkWeb}
                            active={activeIndex === index}
                            buttonActive={p.buttonActive}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projects