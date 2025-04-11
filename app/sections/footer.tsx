import { Logo } from '@/components/logo'
import { Facebook } from 'lucide-react'
import Link from 'next/link'

const links = [
  { title: 'Features', href: '#features' }, // Highlights content benefits
  { title: 'Pricing', href: '#pricing' },   // Key for sales
  { title: 'Feedback', href: '#feedback' }, // Customer testimonials
  { title: 'Why Us', href: '#why_us' },    // Showcases service value
]

export default function FooterSection() {
  const siteName = process.env.NEXT_PUBLIC_SITE_NAME || "Jervi Media Saas"; // Fallback

  return (
    <footer className="py-16 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <Link href="/#pricing_unlocked" aria-label="go home" className="mx-auto block size-fit">
          <Logo />
        </Link>

        <div className="my-8 flex flex-wrap justify-center gap-6 text-sm">
          {links.map((link, index) => (
            <Link key={index} href={link.href} className="text-muted-foreground hover:text-primary block duration-150">
              <span>{link.title}</span>
            </Link>
          ))}
        </div>
        <div className="my-8 flex flex-wrap justify-center gap-6 text-sm">
          <Link href="https://facebook.com/yourpage" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-muted-foreground hover:text-primary block">
            <Facebook />
          </Link>
        </div>
        <span className="text-muted-foreground block text-center text-sm">
          © {new Date().getFullYear()} {siteName}, All rights reserved
        </span>
      </div>
    </footer>
  )
}