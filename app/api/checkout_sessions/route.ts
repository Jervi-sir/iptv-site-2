// pages/api/checkout_sessions.ts
import { NextResponse } from 'next/server';
import { headers } from 'next/headers';
import { stripe } from '@/lib/stripe';

export async function POST(request: Request) {
  try {
    const headersList = await headers();
    const origin = headersList.get('origin');

    // Parse the form data to get the priceId
    const formData = await request.formData();
    const priceId = formData.get('priceId') as string;

    if (!priceId) {
      return NextResponse.json(
        { error: 'Price ID is required' },
        { status: 400 }
      );
    }

    // Create Checkout Session
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price: priceId, // Use the dynamic priceId from the form
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/canceled`,
    });

    return NextResponse.redirect(session.url as string, 303);
  } catch (err: any) {
    return NextResponse.json(
      { error: err.message },
      { status: err.statusCode || 500 }
    );
  }
}