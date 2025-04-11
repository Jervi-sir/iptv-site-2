import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function CallToAction() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-5xl rounded-3xl border px-6 py-12 md:py-20 lg:py-32">
        <div className="text-center">
          <h2 className="text-balance text-4xl font-semibold lg:text-5xl">Access Curated Content Today</h2>
          <p className="mt-4">Unlock a diverse library of curated content—no contracts, no hassle, just seamless access.</p>

          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/#pricing_unlocked">
                <span>Start Your Plan</span>
              </Link>
            </Button>

            <Button asChild size="lg" variant="outline">
              <Link href="/#pricing_unlocked">
                <span>Contact Sales</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}