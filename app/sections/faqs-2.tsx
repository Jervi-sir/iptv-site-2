import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import Link from 'next/link'

export default function FAQsTwo() {
  const faqItems = [
    {
      id: 'item-1',
      question: 'How do I set up my account?',
      answer: 'Setup is simple! After purchase, you’ll receive an email with your login details and instructions. Just sign in on your preferred device and start exploring your content library within minutes.',
    },
    {
      id: 'item-2',
      question: 'What devices can I use with this service?',
      answer: 'Our platform works on almost any device—phones, tablets, laptops, and more. If it supports a web browser or our interface, you’re ready to access your media!',
    },
    {
      id: 'item-3',
      question: 'How much content do I get?',
      answer: 'You’ll have access to thousands of curated media items, including diverse categories and global options. Exact amounts depend on your plan—check our pricing page for details!',
    },
    {
      id: 'item-4',
      question: 'Can I cancel my subscription anytime?',
      answer: 'Yes, there are no contracts! You can cancel your subscription at any time through your account dashboard or by contacting support. No hidden fees, no hassle.',
    },
    {
      id: 'item-5',
      question: 'What if I have technical issues?',
      answer: 'We offer 99.9% uptime, but if you experience issues, our 24/7 support team is here to help. Most problems can be fixed with a quick internet check or device restart—reach out if you need assistance!',
    },
  ]

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-balance text-3xl font-bold md:text-4xl lg:text-5xl">Frequently Asked Questions</h2>
          <p className="text-muted-foreground mt-4 text-balance">Get answers to common questions about your content subscription, from setup to access and beyond.</p>
        </div>

        <div className="mx-auto mt-12 max-w-xl">
          <Accordion
            type="single"
            collapsible
            className="bg-card ring-muted w-full rounded-2xl border px-8 py-3 shadow-sm ring-4 dark:ring-0">
            {faqItems.map((item) => (
              <AccordionItem
                key={item.id}
                value={item.id}
                className="border-dashed">
                <AccordionTrigger className="cursor-pointer text-base hover:no-underline">{item.question}</AccordionTrigger>
                <AccordionContent>
                  <p className="text-base">{item.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <p className="text-muted-foreground mt-6 px-8">
            Can’t find what you’re looking for? Contact our{' '}
            <Link
              href="/support"
              className="text-primary font-medium hover:underline">
              customer support team
            </Link>
          </p>
        </div>
      </div>
    </section>
  )
}