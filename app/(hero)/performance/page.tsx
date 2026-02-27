import React from 'react'
import performanceSrc from '@/public/performance.jpg'
import Hero from '@/components/hero'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Performance'
} 

export default function Page() {
  return (
    <Hero imgUrl={performanceSrc} altText='performancePage' content='performance-performance-performance' />
  )
}