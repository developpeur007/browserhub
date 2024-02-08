import Image from "next/image";
import React from 'react'
import Logo from '../../images/logo-default.419c1def_2qPCU1.svg'
import ArrowRight from '../../images/arrow-forward-outline.svg'
import ArrowBottom from '../../images/chevron-down-outline.svg'
import Link from "next/link";

export const Header = () => {
  return (
    <div className=" px-36 py-6 w-full flex justify-between items-center ">
        <div className="logo w-fit">
            <Image src={Logo} width={150} height={70} alt="Logo" />
        </div>
        <nav>
          <ul className="flex items-center gap-x-9">
            <li>
              <Link href={`/`} className="font-medium text-base flex items-center gap-x-1">
                <span>Products</span>
                <Image src={ArrowBottom} width={20} height={10} alt="arrow right" className=""/>
              </Link></li>
            <li><Link href={`/`} className="font-medium text-base">Blueprints</Link></li>
            <li><Link href={`/`} className="font-medium text-base">Pricing</Link></li>
            <li>
              <Link href={`/`} className="font-medium text-base flex items-center gap-x-1">
                <span>Resources</span>
                <Image src={ArrowBottom} width={20} height={10} alt="arrow right" className=""/>
              </Link></li>
          </ul>
        </nav>
        <Link href={`/`} className="font-medium text-base flex items-center gap-x-1">
          <span>Log in</span>
          
          <Image src={ArrowRight} width={12} height={1} alt="arrow right" className=""/>
          </Link>
    </div>
  )
}
