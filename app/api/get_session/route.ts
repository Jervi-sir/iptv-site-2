// pages/api/get_payment_intent.ts
import { NextRequest, NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    console.log('searchParams: ', searchParams)
    const paymentIntentId = searchParams.get('payment_intent');
    console.log('paymentIntentId: ', paymentIntentId)
    if (!paymentIntentId) {
      return NextResponse.json(
        { error: 'Payment intent ID is required' },
        { status: 400 }
      );
    }

    const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId, {
      expand: ['payment_method'], // Expand payment_method to get card details
    });
    console.log('paymentIntent: ', paymentIntent)

    if (!paymentIntent) {
      return NextResponse.json(
        { error: 'Payment intent not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      amount: paymentIntent.amount / 100, // Convert from cents to dollars
      currency: paymentIntent.currency,
      paymentMethod: paymentIntent.payment_method,
      date: paymentIntent.created, // Unix timestamp
    });
  } catch (error: any) {
    console.error('Internal Error:', error);
    return NextResponse.json(
      { error: `Internal Server Error: ${error.message}` },
      { status: 500 }
    );
  }
}