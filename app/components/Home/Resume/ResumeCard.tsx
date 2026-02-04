import { useState, useEffect, useRef } from 'react'
import { IconType } from 'react-icons'
import { useTranslations } from 'next-intl'

type Props = {
    role: string
    subrole?: string
    Icon: IconType
    date?: string
    description: string
}

const ResumeCard = ({ role, subrole, Icon, date, description }: Props) => {
    const t = useTranslations('ResumePage')
    const [isExpanded, setIsExpanded] = useState(false)
    const [contentHeight, setContentHeight] = useState<number>(0)
    const buttonRef = useRef<HTMLButtonElement>(null)
    const contentRef = useRef<HTMLDivElement>(null)
    
    const shouldShowExpandButton = description.includes('<br/>') || description.length > 200
    const truncatedDescription = description.split('<br/>')[0]
    
    useEffect(() => {
        if (contentRef.current) {
            setContentHeight(contentRef.current.scrollHeight)
        }
    }, [description])
    
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (isExpanded && buttonRef.current && !buttonRef.current.contains(event.target as Node)) {
                setIsExpanded(false)
            }
        }
        
        if (isExpanded) {
            document.addEventListener('click', handleClickOutside)
        }
        
        return () => {
            document.removeEventListener('click', handleClickOutside)
        }
    }, [isExpanded])
    
    const handleButtonClick = () => {
        setIsExpanded(!isExpanded)
    }
    
    return (
        <div className='mb-6'>
            <div className='flex items-start space-x-6 bg-[#171D1D] transition-all duration-1500 p-4 sm:p-8 rounded-md'>
                <div className='w-10 h-10 sm:w-14 sm:h-14 bg-[#2B2B2B] rounded-full flex items-center justify-center flex-col'>
                    <Icon className='sm:w-8 sm:h-8 w-6 h-6 text-zinc-300'/>
                </div>
                <div className='flex-1'>
                  <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1'>
                    <h2 className='text-zinc-200 text-xl sm:text-lg font-semibold'>
                        {role}
                    </h2>
                    {date && (
                        <h3 className='mt-2 sm:px-4 sm:py-1.5 px-4 py-1 rounded-full bg-zinc-200 text-zinc-600 w-fit sm:text-xs text-xs font-bold whitespace-nowrap'>
                            {date}
                        </h3>
                    )}
                    </div>
                    <h3 className='text-amber-500 text-xs sm:text-xs font-semibold mt-2'>
                        {subrole}
                    </h3>
                    <div className='relative'>
                        <div 
                            ref={contentRef}
                            className='text-zinc-300 text-sm sm:text-base pt-3 transition-all duration-1500 ease-out overflow-hidden'
                            style={{
                                maxHeight: isExpanded ? `${contentHeight}px` : '80px'
                            }}
                            dangerouslySetInnerHTML={{ __html: description }} 
                        />
                        {!isExpanded && shouldShowExpandButton && (
                            <div className='absolute bottom-0 left-0 right-0 h-12 bg-linear-to-t from-[#171D1D] to-transparent pointer-events-none transition-opacity duration-1500' />
                        )}
                    </div>
                    
                    {shouldShowExpandButton && (
                        <button 
                            ref={buttonRef}
                            onClick={handleButtonClick}
                            className='mt-2 text-amber-500 hover:text-amber-300 text-sm font-medium transition-colors'
                        >
                            {isExpanded ? t('labelLess') : t('labelMore')}
                        </button>
                    )}

                </div>
            </div>
        </div>
    )
}

export default ResumeCard