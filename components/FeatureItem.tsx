import Image from "next/image"

interface featureprops {
    title:string,
    desc:string,
    img:string
}
const FeatureItem = ({title,desc,img}:featureprops) => {
  return (
    <li className="flex w-full flex-1 flex-col items-start">
<div className="rounded-full p-4 lg:p-7 bg-green-50">
   <Image
   src={img}
   alt="map"
   key={title}
   width={28} height={28}
   />
</div>
<h1 className="bold-20 lg:bold-32 mt-5 capitalize">{title}</h1>
<p className="regular-16 mt-5 bg-white/80 text-gray-30 lg:mt-[30px] lg:bg-none">
        {desc}
      </p>
    </li>
  )
}

export default FeatureItem