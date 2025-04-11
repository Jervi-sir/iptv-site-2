'use client'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { AnimatedGroup } from '@/components/ui/animated-group'
import { useState, useEffect } from 'react'

// Animation variants
const transitionVariants = {
  item: {
    hidden: {
      opacity: 0,
      filter: 'blur(12px)',
      y: 12,
    },
    visible: {
      opacity: 1,
      filter: 'blur(0px)',
      y: 0,
      transition: {
        type: 'spring',
        bounce: 0.3,
        duration: 1.5,
      },
    },
  },
}

// Individual Price Component
function PriceItem({ plan, href }: any) {
  return (
    <AnimatedGroup variants={transitionVariants}>
      <Link
        href={href}
        className="hover:bg-transparent dark:hover:border-t-border bg-transparent group mx-auto flex w-fit items-center gap-4 rounded-full border p-1 pl-4 shadow-md shadow-zinc-950/5 transition-colors duration-300 dark:border-t-white/5 dark:shadow-zinc-950"
      >
        <span className="text-foreground text-sm">{plan}</span>
        <span className="dark:border-background block h-4 w-0.5 border-l bg-white dark:bg-zinc-700"></span>
        <div className="bg-transparent group-hover:bg-muted size-6 overflow-hidden rounded-full duration-500">
          <div className="flex w-12 -translate-x-1/2 duration-500 ease-in-out group-hover:translate-x-0">
            <span className="flex size-6">
              <ArrowRight className="m-auto size-3" />
            </span>
            <span className="flex size-6">
              <ArrowRight className="m-auto size-3" />
            </span>
          </div>
        </div>
      </Link>
    </AnimatedGroup>
  )
}

// Main Pricing Banner Component
export default function PricingBanner() {
  const pricingPlans = [
    { name: 'Basic - $9/mo', href: '#pricing' },
    { name: 'Premium - $15/mo', href: '#pricing' },
    { name: 'Ultimate - $25/mo', href: '#pricing' },
  ]
  
  const [currentPlanIndex, setCurrentPlanIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPlanIndex((prevIndex) => (prevIndex + 1) % pricingPlans.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [pricingPlans.length])

  return (
    <PriceItem 
      plan={pricingPlans[currentPlanIndex].name}
      href={pricingPlans[currentPlanIndex].href}
      key={currentPlanIndex}
    />
  )
}