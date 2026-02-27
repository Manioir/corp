/*
 * @Author: clhuang v-clhuang@abcft.com
 * @Date: 2026-02-27 19:23:49
 * @LastEditors: clhuang v-clhuang@abcft.com
 * @LastEditTime: 2026-02-27 21:29:40
 * @FilePath: \my-next-demo\components\header.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
"use client"
import Link from "next/link";
import { usePathname } from 'next/navigation';
import React from 'react'


const linkData = [
  {name: 'Performance', path: '/performance'},
  {name: 'Reliability', path: '/reliability'},
  {name: 'Scale', path: '/scale'}
]

export default function Header() {
  const pathname = usePathname()
  return (
    <div className="absolute w-full z-10">
          <div className="flex justify-between container mx-auto text-white p-8 items-center">
            <Link className="text-3xl" href='/'>Home</Link>
            <div className="text-xl space-x-3">
              {
                linkData.map(link=>(<Link className={pathname==link.path ? 'text-blue-400': ''} key={link.path} href={link.path}>{link.name}</Link>))
              }
            </div>
          </div>
        </div>
  )
}
