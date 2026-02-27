/*
 * @Author: clhuang v-clhuang@abcft.com
 * @Date: 2026-02-26 19:21:54
 * @LastEditors: clhuang v-clhuang@abcft.com
 * @LastEditTime: 2026-02-26 19:28:22
 * @FilePath: \my-next-demo\app\dashboard\template.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
"use client"
import { useState } from "react";

export default function TemplateLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const [count,setCount] = useState(0)
  
  return (
      <div className="border-2 border-dashed border-black p-4">
         <div className="flex gap-4 font-bold text-purple-500">
        </div>
        <h2>dashboard template {count}</h2>
        <button className="bg-black text-white p-2 my-2 rounded-md " onClick={()=>setCount(count + 1)}>Increment</button>
          {children}
      </div>
  );
}