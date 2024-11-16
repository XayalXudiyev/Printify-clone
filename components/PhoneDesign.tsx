import React, { HTMLAttributes } from 'react'
import { Configuration } from '@prisma/client'
import { cn } from '@/lib/utils'
import Image from 'next/image'

interface PhoneDesignProps extends HTMLAttributes<HTMLDivElement> {
    imgSrc: string
}

const PhoneDesign = ({ imgSrc, className, ...props }: PhoneDesignProps) => {
    return (
        <div className={cn("relative pointer-events-none -z-50 overflow-hidden", className)} {...props}>
            <Image 
            src='/phone-template.png' 
            alt="Phone Design" 
            width={896} 
            height={1831} 
            className='object-contain select-none pointer-events-none z-50'  />

            <div className='absolute inset-0 -z-10'>
                <Image src={imgSrc} alt="Phone Design" width={100} height={100} className='object-cover min-h-full min-w-full' />
            </div>
        </div>
    )
}

export default PhoneDesign