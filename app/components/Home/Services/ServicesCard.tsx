import { IconType } from 'react-icons'

type Props = {
    name: string
    description: string
    Icon: IconType
}

const ServicesCard = ({Icon, name, description}:Props) => {
  return (
    <div>
        <Icon className='w-15 h-15 text-amber-500'/>
        <h2 className='text-zinc-200 mt-6 font-bold text-xl md:text-2xl'>{name}</h2>
        <p className='mt-6 text-zinc-300'>{description}</p>
    </div>
  )
}

export default ServicesCard