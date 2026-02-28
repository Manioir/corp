/*
 * @Author: clhuang v-clhuang@abcft.com
 * @Date: 2026-02-27 22:16:54
 * @LastEditors: clhuang v-clhuang@abcft.com
 * @LastEditTime: 2026-02-28 11:18:28
 * @FilePath: \corp\app\(hero)\scale\page.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from 'react'
import scaleSrc from '@/public/scale.jpg'
import Hero from '@/components/hero'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Scale'
} 

export default function Page() {
  return (
    <Hero imgUrl={scaleSrc} altText='scalePage' content='scale-scale-content' />
  )
}