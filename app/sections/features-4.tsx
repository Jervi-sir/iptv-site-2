import { Library, Globe, Smartphone, Star, Clock, Shield } from 'lucide-react'

export default function Features4() {
  return (
    <section className="py-12 md:py-20">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
        <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center md:space-y-12">
          <h2 className="text-balance text-4xl font-medium lg:text-5xl">Your Ultimate Content Solution</h2>
          <p>Access a curated media library with features built for seamless exploration and reliability.</p>
        </div>

        <div className="relative mx-auto grid max-w-4xl divide-x divide-y border *:p-12 sm:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Library className="size-4" />
              <h3 className="text-sm font-medium">Extensive Content Library</h3>
            </div>
            <p className="text-sm">Access thousands of curated media items, covering diverse categories and interests.</p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Globe className="size-4" />
              <h3 className="text-sm font-medium">Worldwide Content</h3>
            </div>
            <p className="text-sm">Enjoy media from over 50 countries, bringing global libraries to your fingertips.</p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Smartphone className="size-4" />
              <h3 className="text-sm font-medium">Multi-Device Access</h3>
            </div>
            <p className="text-sm">Use on any device—phone, tablet, laptop, or more—with no extra hassle.</p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Star className="size-4" />
              <h3 className="text-sm font-medium">High-Quality Media</h3>
            </div>
            <p className="text-sm">Get crisp, reliable content with minimal interruptions for a smooth experience.</p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Clock className="size-4" />
              <h3 className="text-sm font-medium">Instant Setup</h3>
            </div>
            <p className="text-sm">Start exploring in minutes—no complicated setup or long waits required.</p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Shield className="size-4" />
              <h3 className="text-sm font-medium">Reliable Service</h3>
            </div>
            <p className="text-sm">Count on 99.9% uptime and secure access for uninterrupted enjoyment.</p>
          </div>
        </div>
      </div>
    </section>
  )
}