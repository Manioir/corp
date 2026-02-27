/*
 * @Author: clhuang v-clhuang@abcft.com
 * @Date: 2026-02-27 20:03:20
 * @LastEditors: clhuang v-clhuang@abcft.com
 * @LastEditTime: 2026-02-27 20:05:48
 * @FilePath: \my-next-demo\components\hero.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from 'react'
import Image, { StaticImageData } from 'next/image'
import homeSrc from '@/public/home.jpg'

interface Iporps {
  imgUrl: StaticImageData;
  altText: string;
  content: string
}

export default function Hero(props: Iporps) {
  return (
    <div className='h-screen relative'>
      <div className='absolute inset-0 -z-10'>
        <Image alt={props.altText} src={props.imgUrl} fill className='object-cover'  />
        <div className='absolute inset-0 bg-gradient-to-r from-gray-900'></div>
      </div>
      <div className='flex justify-center pt-48'>
        <h1 className='text-white text-6xl'>{props.content}</h1>
      </div>
    </div>
  )
}

