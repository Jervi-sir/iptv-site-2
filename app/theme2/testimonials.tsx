'use client'

export const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Laura Smith',
      rating: 5,
      text: `${process.env.NEXT_PUBLIC_SITE_NAME} has been a game-changer for my freelance business. The social media scheduler saves me hours every week!`,
      location: 'Austin, USA',
    },
    {
      id: 2,
      name: 'James Lee',
      rating: 5,
      text: `The email automation tool is fantastic. I’ve doubled my open rates since using ${process.env.NEXT_PUBLIC_SITE_NAME}.`,
      location: 'Sydney, Australia',
    },
    {
      id: 3,
      name: 'Anita Patel',
      rating: 4,
      text: 'GrowEasy’s task manager keeps my team on track. The support team is super responsive, too!',
      location: 'London, UK',
    },
    {
      id: 4,
      name: 'Carlos Rivera',
      rating: 5,
      text: 'I love how easy it is to integrate with my existing tools. GrowEasy is worth every penny.',
      location: 'Mexico City, Mexico',
    },
    {
      id: 5,
      name: 'Sophie Nguyen',
      rating: 5,
      text: `The analytics dashboard gives me insights I didn’t have before. ${process.env.NEXT_PUBLIC_SITE_NAME} is a must-have for small businesses.`,
      location: 'Hanoi, Vietnam',
    },
  ];

  return (
    <section id="testimonials" className="py-20 px-6 md:px-12 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          What Our <span className="gradient-heading">Users Say</span>
        </h2>
        <p className="text-lg text-gray-600 mb-12">
          Join thousands of businesses growing with GrowEasy
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.97a1 1 0 00.95.69h4.15c.969 0 1.371 1.24.588 1.81l-3.357 2.44a1 1 0 00-.364 1.118l1.287 3.97c.3.921-.755 1.688-1.54 1.118l-3.357-2.44a1 1 0 00-1.175 0l-3.357 2.44c-.784.57-1.838-.197-1.54-1.118l1.287-3.97a1 1 0 00-.364-1.118L2.824 9.397c-.784-.57-.382-1.81.588-1.81h4.15a1 1 0 00.95-.69l1.286-3.97z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-4">{testimonial.text}</p>
              <p className="font-semibold">{testimonial.name}</p>
              <p className="text-sm text-gray-500">{testimonial.location}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};