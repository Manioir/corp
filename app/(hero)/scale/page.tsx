import React from 'react'
import scaleSrc from '@/public/scale.jpg'
import Hero from '@/components/hero'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Scale'
} 

export default function Page() {
  return (
    <Hero imgUrl={scaleSrc} altText='scalePage' content='scale-scale-scale' />
  )
}