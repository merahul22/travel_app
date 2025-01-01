import Image from "next/image"

type buttonprops ={
    type:'button'|'submit',
    variant:string,
    icon?:string,
    full?:boolean,
    title:string
}
const Button = ({title,full,icon,type,variant}:buttonprops) => {
  return (
    <button type={type}  className={`flexCenter gap-3 rounded-full border ${variant} ${full && 'w-full'}`}>
        {icon && <Image src={icon} alt={title} width={24} height={24}/>}
<label className="bold-16 whitespace-nowrap cursor-pointer">{title}</label>
    </button>
  )
}

export default Button