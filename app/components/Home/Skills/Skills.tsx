'use client'
import { useTranslations } from 'next-intl'
import { SiFigma, SiGit, SiGithub, SiJavascript, SiBootstrap , SiMysql, SiNextdotjs, SiNodedotjs, SiPostgresql, SiReact, SiTailwindcss, SiTypescript, SiPhp, SiWordpress } from 'react-icons/si'
import Tilt from 'react-parallax-tilt'

const skills = [
  // Core Frontend
  { name: 'React', icon: <SiReact />, percentage: 85 },
  { name: 'Next.js', icon: <SiNextdotjs />, percentage: 80 },
  { name: 'JavaScript', icon: <SiJavascript />, percentage: 85 },
  { name: 'TypeScript', icon: <SiTypescript />, percentage: 75 },
  { name: 'Tailwind CSS', icon: <SiTailwindcss />, percentage: 85 },
  { name: 'Bootstrap CSS', icon: <SiBootstrap />, percentage: 90 },

  // Backend & Databases
  { name: 'WordPress', icon: <SiWordpress/>, percentage: 90 },
  { name: 'PHP', icon: <SiPhp/>, percentage: 85 },
  { name: 'Node.js', icon: <SiNodedotjs />, percentage: 60 },
  { name: 'PostgreSQL', icon: <SiPostgresql />, percentage: 75 },
  { name: 'MySQL', icon: <SiMysql />, percentage: 80 },

  // Tools
  { name: 'Git', icon: <SiGit />, percentage: 85 },
  { name: 'GitHub', icon: <SiGithub />, percentage: 85 },
  { name: 'Figma', icon: <SiFigma />, percentage: 85 }
]

const Skills = () => {

    const t = useTranslations("SkillPage")
    return (
        <div className='text-zinc-300 py-16'>
            <h2 className='text-zinc-300 font-bold text-center text-3xl md:text-4xl xl:text-5xl'>
                {t("title")} <span className='text-amber-500'>{t("titleSpan")}</span>
            </h2>
            <div className='flex flex-wrap gap-6 justify-center mt-16 w-[75%] mx-auto'>
                {skills.map((skil, i) => {
                    return <Tilt key={skil.name} scale={1.1} transitionSpeed={300}>
                        <div data-aos="flip-right" data-aos-anchor-placement="top-center" data-aos-delay={i*10}
                         className='bg-[#f8940645] text-center w-30 h-38 rounded-3xl flex flex-col items-center justify-center shadow-lg transition hover:scale-105'>
                            <div className='text-4xl mb-4 text-zinc-300'>{skil.icon}</div>
                            <p className='text-1xl font-semibold'>{skil.percentage}%</p>
                            <p className='text-[#fbe3a2] mt-1'>{skil.name}</p>
                        </div>
                    </Tilt>
                })}

            </div>
        </div>
    )
}

export default Skills