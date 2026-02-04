import ResumeCard from './ResumeCard'
import { FaDev , FaUserGraduate , FaReact, FaNode } from 'react-icons/fa'
import { RiJavascriptFill } from "react-icons/ri";
import { SiN8N } from "react-icons/si";
import { useTranslations } from 'next-intl'

const Resume = () => {
    const t = useTranslations('ResumePage');


    return (
        <div className='pt-20 pb-16'>
            <div className='w-[90%] sm:w-[70%] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-10'>
                 {/* EDUCATION PART */}
                <div>
                    <h2 className='text-3xl sm:text-4xl font-bold text-zinc-300'>
                        {t("educationTitle")} <span className='text-amber-500'>{t("educationTitleSpan")}</span>
                    </h2>
                    <div className='mt-10' data-aos="zoom-out" data-aos-anchor-placement="top-center" data-aos-delay="300">
                        <ResumeCard Icon={FaUserGraduate } role={t("resumeCardTitle0")} date={t("progress")} description={t("resumeCardDescription0")} />
                    </div>
                 {/* Course PART */}
                    <h2 className='text-3xl sm:text-4xl font-bold text-zinc-300 mt-10'>
                        {t("courseTitle")} <span className='text-amber-500'>{t("courseTitleSpan")}</span>
                    </h2>
                    <div className='mt-5' data-aos="zoom-out" data-aos-anchor-placement="top-center" data-aos-delay="100">
                        <ResumeCard Icon={SiN8N} role={t("resumeCardTitleCourse1")} date={t("progress1Course")} subrole={t("resumeCardSubTitleCourse1")} description={t("resumeCardDescriptionCourse1")} />
                        <ResumeCard Icon={RiJavascriptFill } role={t("resumeCardTitleCourse2")} date={t("progress2Course")} subrole={t("resumeCardSubTitleCourse2")} description={t("resumeCardDescriptionCourse2")} />
                        <ResumeCard Icon={FaNode} role={t("resumeCardTitleCourse3")} date={t("progress3Course")} subrole={t("resumeCardSubTitleCourse3")} description={t("resumeCardDescriptionCourse3")} />
                        <ResumeCard Icon={FaReact} role={t("resumeCardTitleCourse4")} date={t("progress4Course")} subrole={t("resumeCardSubTitleCourse4")} description={t("resumeCardDescriptionCourse4")} />
                    </div>
                </div>
                {/* WORK PART */}
                <div>
                    <h2 className='text-3xl sm:text-4xl font-bold text-zinc-300'>
                        {t("experienceTitle")} <span className='text-amber-500'>{t("experienceTitleSpan")}</span>
                    </h2>
                    <div className='mt-10' data-aos="zoom-in" data-aos-anchor-placement="top-center">
                        <ResumeCard Icon={FaDev} role={t("resumeCardTitle1")} subrole={t("resumeCardSubTitle1")} date={t("progress1")}  description={t("resumeCardDescription1")} />
                        <ResumeCard Icon={FaDev} role={t("resumeCardTitle2")} subrole={t("resumeCardSubTitle2")} date={t("progress2")} description={t("resumeCardDescription2")} />
                        <ResumeCard Icon={FaDev} role={t("resumeCardTitle3")} subrole={t("resumeCardSubTitle3")} date={t("progress3")}  description={t("resumeCardDescription3")} />
                        <ResumeCard Icon={FaDev} role={t("resumeCardTitle4")} subrole={t("resumeCardSubTitle4")} date={t("progress4")}  description={t("resumeCardDescription4")} />
                    </div>
                </div>
               

            </div>
        </div>

    )
}

export default Resume