interface PartnerLogo {
  height: number; // Corrected from "heigth"
  src: string;
  alt: string;
}

export default function LogoCloud2() {
  const partnerLogos: PartnerLogo[] = [
    { height: 50, src: 'https://fstv.lol/chaines-logo/cnews-logo-min.png', alt: 'CNews Logo' },
    { height: 50, src: 'https://fstv.lol/chaines-logo/syfy-logo.png', alt: 'Syfy Logo' },
    { height: 50, src: 'https://fstv.lol/chaines-logo/mtv-logo.png', alt: 'MTV Logo' },
    { height: 50, src: 'https://fstv.lol/chaines-logo/6ter-min.png', alt: '6ter Logo' },
    { height: 50, src: 'https://fstv.lol/chaines-logo/france-24-logo-min.png', alt: 'France 24 Logo' },
    { height: 50, src: 'https://fstv.lol/chaines-logo/teletoon-logo-min.png', alt: 'Teletoon Logo' },
    { height: 50, src: 'https://fstv.lol/chaines-logo/nickelodeon-logo-min.png', alt: 'Nickelodeon Logo' },
    { height: 50, src: 'https://fstv.lol/chaines-logo/planete-aventure-logo-min.png', alt: 'Planete Aventure Logo' },
    { height: 50, src: 'https://fstv.lol/chaines-logo/rmc-decouverte.png', alt: 'RMC Decouverte Logo' },
    { height: 50, src: 'https://fstv.lol/chaines-logo/canal-j-logo-min.png', alt: 'Canal J Logo' },
  ];

  return (
    <section className="bg-transparent py-16">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-center text-lg font-medium">Your favorite companies are our partners.</h2>
        <div className="mx-auto mt-20 flex max-w-4xl flex-wrap items-center justify-center gap-x-12 gap-y-4 sm:gap-x-16 sm:gap-y-10">
          {partnerLogos.map((item, index) => (
            <img
              key={index}
              className="h-10 w-fit animate-breathe"
              style={{ animationDelay: `${index * 0.2}s` }} // Stagger the animation start
              src={item.src}
              alt={item.alt}
              height={item.height}
              width="auto"
            />
          ))}
        </div>
      </div>
    </section>
  )
}

{/* <img className="h-5 w-fit dark:invert" src="https://html.tailus.io/blocks/customers/nvidia.svg" alt="Nvidia Logo" height="20" width="auto" />
<img className="h-4 w-fit dark:invert" src="https://html.tailus.io/blocks/customers/column.svg" alt="Column Logo" height="16" width="auto" />
<img className="h-4 w-fit dark:invert" src="https://html.tailus.io/blocks/customers/github.svg" alt="GitHub Logo" height="16" width="auto" />
<img className="h-5 w-fit dark:invert" src="https://html.tailus.io/blocks/customers/nike.svg" alt="Nike Logo" height="20" width="auto" />
<img className="h-4 w-fit dark:invert" src="https://html.tailus.io/blocks/customers/laravel.svg" alt="Laravel Logo" height="16" width="auto" />
<img className="h-7 w-fit dark:invert" src="https://html.tailus.io/blocks/customers/lilly.svg" alt="Lilly Logo" height="28" width="auto" />
<img className="h-5 w-fit dark:invert" src="https://html.tailus.io/blocks/customers/lemonsqueezy.svg" alt="Lemon Squeezy Logo" height="20" width="auto" />
<img className="h-6 w-fit dark:invert" src="https://html.tailus.io/blocks/customers/openai.svg" alt="OpenAI Logo" height="24" width="auto" />
<img className="h-4 w-fit dark:invert" src="https://html.tailus.io/blocks/customers/tailwindcss.svg" alt="Tailwind CSS Logo" height="16" width="auto" />
<img className="h-5 w-fit dark:invert" src="https://html.tailus.io/blocks/customers/vercel.svg" alt="Vercel Logo" height="20" width="auto" />
<img className="h-5 w-fit dark:invert" src="https://html.tailus.io/blocks/customers/zapier.svg" alt="Zapier Logo" height="20" width="auto" /> */}
