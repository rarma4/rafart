import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'

type Props = {
    imageSrc: string
    title: string
    description: string,
    tecnologies: string[],
    link: string,
    linkWeb: string,
    delay: number,
    active: boolean,
    buttonActive: boolean
}
const CardProject = ({
    imageSrc,
    title,
    description,
    tecnologies,
    link,
    linkWeb,
    delay,
    active,
    buttonActive
}: Props) => {
    const t = useTranslations("WorksPage")

    return (
        <div data-aos="fade-up" data-aos-delay={delay * 100}>
            <div
                className={`
                group border rounded-2xl transition-all duration-300 transform
                ${active
                                ? 'border-amber-500 -translate-y-4'
                                : 'border-zinc-700'
                            }
                hover:border-zinc-600 hover:-translate-y-4
                `}
            >
                <div className="relative w-full aspect-16/8 overflow-hidden rounded-t-2xl">
                    <Image
                        src={imageSrc}
                        alt={title}
                        title={title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        priority
                        className={`
                        object-cover transition-all duration-300
                        ${active ? 'scale-110' : ''}
                        group-hover:scale-110 group-hover:blur-sm
                        `}
                    />

                    <div
                        className={`
                            absolute inset-0 bg-[#000000aa]
                            flex items-center justify-center
                            transition-opacity duration-300
                            ${active ? 'opacity-100' : 'opacity-0'}
                            group-hover:opacity-100 gap-4
                        `}
                    >
                        <Link href={linkWeb} target="_blank" rel="noopener noreferrer">
                            {buttonActive && (
                                <button className="px-4 py-2 text-sm rounded-lg bg-amber-500 hover:bg-zinc-800 hover:scale-x-104 transition-all duration-300 text-zinc-800 hover:text-amber-500 font-semibold flex items-center gap-2">
                                    <span className="text-base font-bold">
                                        {t("seeWeb")}
                                    </span>
                                </button>
                            )}

                        </Link>
                        <Link href={link} target="_blank" rel="noopener noreferrer">
                            {buttonActive && (
                                <button className="px-4 py-2 text-sm rounded-lg bg-amber-500 hover:bg-zinc-800 hover:scale-x-104 transition-all duration-300 text-zinc-800 hover:text-amber-500 font-semibold flex items-center gap-2">
                                    <span className="text-base font-bold">
                                        {t("seeProject")}
                                    </span>
                                </button>
                            )}

                        </Link>
                    </div>
                </div>

                <div className="px-8 pb-8 flex flex-col gap-2">
                    <h2 className="mt-4 text-xl sm:text-2xl font-semibold text-amber-500">
                        {title}
                    </h2>
                    <p className="pt-2 font-medium text-zinc-300/80">
                        {description}
                    </p>

                    <div className="flex gap-2 mt-4 flex-wrap">
                        {tecnologies.map((name, index) => (
                            <span
                                key={index}
                                className="text-sm sm:text-xs py-1 px-3 font-medium text-zinc-300 bg-linear-to-br from-zinc-500 to-zinc-900 rounded-full shadow-md"
                            >
                                {name}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}


export default CardProject