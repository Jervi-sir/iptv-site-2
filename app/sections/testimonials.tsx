import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Card, CardContent } from '@/components/ui/card'

type Testimonial = {
  name: string
  role: string
  image: string
  quote: string
}

const testimonials: Testimonial[] = [
  {
    name: 'Alex Carter',
    role: 'Content Fan',
    image: 'https://randomuser.me/api/portraits/men/1.jpg',
    quote: 'This platform is a game-changer! A huge library of curated content at my fingertips—worth every penny.',
  },
  {
    name: 'Maria Lopez',
    role: 'Busy Parent',
    image: 'https://randomuser.me/api/portraits/women/2.jpg',
    quote: 'I set it up in minutes, and now my kids can access their favorite collections while I explore other content. So easy!',
  },
  {
    name: 'James Patel',
    role: 'Hobbyist',
    image: 'https://randomuser.me/api/portraits/men/3.jpg',
    quote: 'The variety is unreal—tons of specialized content in great quality. I’ve ditched other subscriptions for good.',
  },
  {
    name: 'Sophie Nguyen',
    role: 'Student',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
    quote: 'As a student on a budget, this is the best deal. Loads of content, no contracts, and it works perfectly on my phone.',
  },
  {
    name: 'Liam Brooks',
    role: 'Retiree',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
    quote: 'I love the variety—news, classics, and global libraries. It’s like having a world of media at home.',
  },
  {
    name: 'Emma Davis',
    role: 'Freelancer',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
    quote: 'Content quality is top-notch, even on my slow Wi-Fi. The support team helped me get started in no time.',
  },
  {
    name: 'Omar Khan',
    role: 'Tech Enthusiast',
    image: 'https://randomuser.me/api/portraits/men/7.jpg',
    quote: 'Multi-device access is a lifesaver—I switch between my TV, laptop, and tablet without any issues.',
  },
  {
    name: 'Clara Rossi',
    role: 'Travel Blogger',
    image: 'https://randomuser.me/api/portraits/women/8.jpg',
    quote: 'I can access my favorite collections anywhere I go. The global libraries keep me connected while traveling.',
  },
  {
    name: 'Ethan Kim',
    role: 'Gamer',
    image: 'https://randomuser.me/api/portraits/men/9.jpg',
    quote: 'Affordable price, great quality, and exclusive content included? This platform is a total win.',
  },
  {
    name: 'Aisha Malik',
    role: 'Small Business Owner',
    image: 'https://randomuser.me/api/portraits/women/10.jpg',
    quote: 'My customers enjoy the media in my shop. Setup was simple, and it’s been reliable ever since.',
  },
  {
    name: 'Noah Schmidt',
    role: 'Fitness Coach',
    image: 'https://randomuser.me/api/portraits/men/11.jpg',
    quote: 'The content variety is amazing—news, lifestyle, and more, all in one place. I’m hooked!',
  },
  {
    name: 'Lila Torres',
    role: 'Teacher',
    image: 'https://randomuser.me/api/portraits/women/12.jpg',
    quote: 'No more expensive subscriptions. This platform gives me everything I need at a fraction of the cost.',
  },
]

const chunkArray = (array: Testimonial[], chunkSize: number): Testimonial[][] => {
  const result: Testimonial[][] = []
  for (let i = 0; i < array.length; i += chunkSize) {
    result.push(array.slice(i, i + chunkSize))
  }
  return result
}

const testimonialChunks = chunkArray(testimonials, Math.ceil(testimonials.length / 3))

export default function WallOfLoveSection() {
  return (
    <section>
      <div className="py-16 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <h2 className="text-title text-3xl font-semibold">Loved by Our Users</h2>
            <p className="text-body mt-6">See why thousands of happy customers choose our content solution every day.</p>
          </div>
          <div className="mt-8 grid gap-3 [--color-card:var(--color-muted)] sm:grid-cols-2 md:mt-12 lg:grid-cols-3 dark:[--color-muted:var(--color-zinc-900)]">
            {testimonialChunks.map((chunk, chunkIndex) => (
              <div key={chunkIndex} className="space-y-3 *:border-none *:shadow-none">
                {chunk.map(({ name, role, quote, image }, index) => (
                  <Card key={index}>
                    <CardContent className="grid grid-cols-[auto_1fr] gap-3 pt-6">
                      <Avatar className="size-9">
                        <AvatarImage alt={name} src={image} loading="lazy" width="120" height="120" />
                        <AvatarFallback>{name.charAt(0)}{name.split(' ')[1]?.charAt(0) || ''}</AvatarFallback>
                      </Avatar>

                      <div>
                        <h3 className="font-medium">{name}</h3>

                        <span className="text-muted-foreground block text-sm tracking-wide">{role}</span>

                        <blockquote className="mt-3">
                          <p className="text-gray-700 dark:text-gray-300">{quote}</p>
                        </blockquote>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}