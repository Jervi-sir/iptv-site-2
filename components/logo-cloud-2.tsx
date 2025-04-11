interface PartnerLogo {
  height: number; // Corrected from "heigth"
  src: string;
  alt: string;
}

export default function LogoCloud2() {
  const partnerLogos: PartnerLogo[] = [
    { height: 50, src: '/cloud-logo/1.png', alt: 'Partner 1' },
    { height: 50, src: '/cloud-logo/2.png', alt: 'Partner 2' },
    { height: 50, src: '/cloud-logo/3.png', alt: 'Partner 3' },
    { height: 50, src: '/cloud-logo/4.png', alt: 'Partner 4' },
    { height: 50, src: '/cloud-logo/5.png', alt: 'Partner 5' },
    { height: 50, src: '/cloud-logo/6.png', alt: 'Partner 6' },
    { height: 50, src: '/cloud-logo/7.png', alt: 'Partner 7' },
    { height: 50, src: '/cloud-logo/8.png', alt: 'Partner 8' },
    { height: 50, src: '/cloud-logo/9.png', alt: 'Partner 9' },
    { height: 50, src: '/cloud-logo/10.png', alt: 'Partner 10' },
  ];

  return (
    <section className="bg-transparent py-16">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-center text-lg font-medium">Your favorite companies are our partners.</h2>
        <div className="mx-auto mt-20 flex max-w-4xl flex-wrap items-center justify-center gap-x-0 gap-y-4 sm:gap-x-16 sm:gap-y-10">
          {partnerLogos.map((item, index) => (
            <img
              key={index}
              className="h-10 w-fit animate-breathe"
              style={{ animationDelay: `${index * 0.2}s` }}
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