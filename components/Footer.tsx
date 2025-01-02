import Image from "next/image"
import Link from "next/link"
import React from "react";

export const FOOTER_LINKS = [
  {
    title: 'Learn More',
    links: [
      'About Hilink',
      'Press Releases',
      'Environment',
      'Jobs',
      'Privacy Policy',
      'Contact Us',
    ],
  },
  {
    title: 'Our Community',
    links: ['Climbing xixixi', 'Hiking hilink', 'Hilink kinthill'],
  },
];
export const SOCIALS = {
  title: 'Social',
  links: [
    '/facebook.svg',
    '/instagram.svg',
    '/twitter.svg',
    '/youtube.svg',
    '/wordpress.svg',
  ],
};
export const FOOTER_CONTACT_INFO = {
  title: 'Contact Us',
  links: [
    { label: 'Admin Officer', value: '123-456-7890' },
    { label: 'Email Officer', value: 'hilink@akinthil.com' },
  ],
};
const Footer = () => {
  return (
    <footer className="flexCenter mb-20">
<div className="padding-container max-container flex w-full flex-col gap-14">
       <div className="flex flex-col items-start justify-center gap-[10%] md:flex-row">
     <Link href="/">
     <Image 
     src="/hilink-logo.svg"
     alt="logo"
     width={74}
     height={29}
     />
     </Link>

     <div className='flex flex-wrap gap-10 sm:justify-between md:flex-1'>
      {
FOOTER_LINKS.map((columns)=>(
<Footercolumn title={columns.title}>
  
  <ul className="regular-14 flex flex-col gap-4 text-gray-30" >
    {
      columns.links.map((link)=>(
<Link href='/' key={link}>
   {link}
</Link>
      ))
    }
  </ul>
</Footercolumn>
))
      }
     </div>
    
     <div className="flex flex-col gap-5">
      
     <Footercolumn title={FOOTER_CONTACT_INFO.title}>
   {
    FOOTER_CONTACT_INFO.links.map((link)=>(
      <Link href={link.label} key={link.label} className="flex gap-4 md:flex-col lg:flex-row">
        <p className="whitespace-nowrap">{link.label}</p>
        <p className="medium-14 whitespace-nowrap text-blue-70">{link.value}</p>
      </Link>
    ))
   }
      </Footercolumn>
     </div>
     <div className="flex flex-col gap-5">
          <Footercolumn title={SOCIALS.title}>
            {
              <ul className="regular-14 flex gap-4 text-gray-30">
                {SOCIALS.links.map((link)=>(
                  <Link href={link} key={link}>
                    <Image
                    
                    src={link}
                    alt="social"
                    width={24} height={24}
                    />
                  </Link>
                ))}
              </ul>
            }
          </Footercolumn>
     </div>
       </div>
       <div className="border bg-gray-20" />
       <p className="regular-14 w-full text-center text-gray-30">2023 Hilink | All rights reserved</p>
</div>   
    </footer>
  )
}
interface footerprops {
  title:string,
  children:React.ReactNode
}
const Footercolumn=({title,children}:footerprops)=>{
  return (
<div className="flex flex-col gap-5 mt-10">
<h3 className="bold-18 whitespace-nowrap">{title}</h3>
{children}
</div>
  )
}

export default Footer