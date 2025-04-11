import { Logo } from '@/components/logo'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { InfiniteSlider } from '@/components/motion-primitives/infinite-slider'

export default function ChannelsSection() {
  return (
    <section>
      <div className="bg-muted dark:bg-background py-24 md:py-32">
        <div className="mx-auto max-w-5xl px-6">
          <div className="bg-muted/25 group relative mx-auto max-w-[22rem] items-center justify-between space-y-6 [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] sm:max-w-md">
            <div
              role="presentation"
              className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:32px_32px] opacity-50"></div>
            <div>
              <InfiniteSlider
                gap={24}
                speed={20}
                speedOnHover={10}>
                {
                  [
                    { id: '', img: '/cloud-logo/1.png' },
                    { id: '', img: '/cloud-logo/2.png' },
                    { id: '', img: '/cloud-logo/3.png' },
                    { id: '', img: '/cloud-logo/4.png' },
                    { id: '', img: '/cloud-logo/5.png' },
                  ].map((item, index) => (
                    <ContentCard key={index}>
                      <img src={item.img} style={{ width: 50 }} />
                    </ContentCard>
                  ))
                }
              </InfiniteSlider>
            </div>

            <div>
              <InfiniteSlider
                gap={24}
                speed={20}
                speedOnHover={10}
                reverse>
                {
                  [
                    { id: '', img: '/cloud-logo/6.png' },
                    { id: '', img: '/cloud-logo/7.png' },
                    { id: '', img: '/cloud-logo/8.png' },
                    { id: '', img: '/cloud-logo/9.png' },
                    { id: '', img: '/cloud-logo/10.png' },
                  ].map((item, index) => (
                    <ContentCard key={index}>
                      <img src={item.img} style={{ width: 50 }} />
                    </ContentCard>
                  ))
                }
              </InfiniteSlider>
            </div>
            <div>
              <InfiniteSlider
                gap={24}
                speed={20}
                speedOnHover={10}>
                {
                  [
                    { id: '', img: '/cloud-logo/11.png' },
                    { id: '', img: '/cloud-logo/12.png' },
                    { id: '', img: '/cloud-logo/13.png' },
                    { id: '', img: '/cloud-logo/14.png' },
                    { id: '', img: '/cloud-logo/15.png' },
                  ].map((item, index) => (
                    <ContentCard key={index}>
                      <img src={item.img} style={{ width: 50 }} />
                    </ContentCard>
                  ))
                }
              </InfiniteSlider>
            </div>
            <div className="absolute inset-0 m-auto flex size-fit justify-center gap-2">
              <ContentCard
                className="shadow-black-950/10 size-16 bg-white/25 shadow-xl backdrop-blur-md backdrop-grayscale dark:border-white/10 dark:shadow-white/15"
                isCenter={true}>
                <Logo />
              </ContentCard>
            </div>
          </div>
          <div className="mx-auto mt-12 max-w-lg space-y-6 text-center">
            <h2 className="text-balance text-3xl font-semibold md:text-4xl">Explore Curated Content Collections</h2>
            <p className="text-muted-foreground">Access a diverse library of media, including news, lifestyle, and cultural collections, available anytime, anywhere.</p>

            <Button
              variant="outline"
              size="sm"
              asChild>
              <Link href="/#pricing_unlocked">Start My Subscription</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

const ContentCard = ({ children, className, isCenter = false }: any) => {
  return (
    <div className={cn('bg-background relative z-20 flex size-12 rounded-full border', className)}>
      <div className={cn('m-auto size-fit *:size-5', isCenter && '*:size-8')}>{children}</div>
    </div>
  )
}