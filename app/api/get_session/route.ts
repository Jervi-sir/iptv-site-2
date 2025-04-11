import { NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const sessionId = searchParams.get('session_id');

    if (!sessionId) {
      return NextResponse.json({ error: 'Session ID is required' }, { status: 400 });
    }

    // Retrieve the Checkout session from Stripe
    const session: any = await stripe.checkout.sessions.retrieve(sessionId, {
      expand: ['payment_intent.payment_method'], // Expand payment method details
    });

    // Retrieve the line items to get the price
    const lineItems = await stripe.checkout.sessions.listLineItems(sessionId);

    return NextResponse.json({
      amount: session.amount_total ? session.amount_total / 100 : 0, // Convert cents to dollars
      paymentMethod: session.payment_intent?.payment_method,
      date: session.created, // Unix timestamp of when the session was created
      currency: session.currency,
      lineItems: lineItems.data,
    });
  } catch (err: any) {
    return NextResponse.json(
      { error: err.message },
      { status: err.statusCode || 500 }
    );
  }
}