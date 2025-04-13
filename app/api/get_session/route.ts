// app/api/get_session/route.ts
import { NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const paymentIntentId = searchParams.get('session_id'); // It's a pi_ ID
    console.log('paymentIntentId:', paymentIntentId);

    if (!paymentIntentId) {
      return NextResponse.json({ error: 'Payment Intent ID is required' }, { status: 400 });
    }

    if (!paymentIntentId.startsWith('pi_')) {
      return NextResponse.json(
        { error: 'Invalid Payment Intent ID. Expected a Payment Intent ID (starts with pi_)' },
        { status: 400 }
      );
    }

    // Retrieve the Payment Intent from Stripe
    const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId, {
      expand: ['payment_method'], // Expand payment method details
    });
    console.log('paymentIntent:', paymentIntent);

    // Payment Intents don't have line items, so use metadata or a database
    // Example: Assume metadata contains line items or fetch from your DB
    const lineItems = paymentIntent.metadata.lineItems
      ? JSON.parse(paymentIntent.metadata.lineItems)
      : [];

    return NextResponse.json({
      amount: paymentIntent.amount ? paymentIntent.amount / 100 : 0, // Convert cents to dollars
      paymentMethod: paymentIntent.payment_method,
      date: paymentIntent.created, // Unix timestamp
      currency: paymentIntent.currency,
      lineItems, // Empty or from metadata/DB
    });
  } catch (err: any) {
    console.error('Stripe error:', err);
    return NextResponse.json(
      { error: err.message || 'Failed to retrieve payment details' },
      { status: err.statusCode || 500 }
    );
  }
}