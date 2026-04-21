import { NextResponse } from 'next/server';
import Stripe from 'stripe';

// Mock implementation - in production, STRIPE_SECRET_KEY must be in .env
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || 'sk_test_mock', {
  apiVersion: '2026-03-25.dahlia', // using a fixed api version
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { professionalId, targetTier } = body;

    if (!professionalId) {
      return NextResponse.json({ error: 'ID do profissional é obrigatório' }, { status: 400 });
    }

    // In a real application, you would fetch the Stripe Customer ID from the Prisma database
    // const profile = await prisma.professionalProfile.findUnique({ where: { id: professionalId } });
    
    // Create Checkout Sessions from body params.
    // This is mocked because we don't have real keys or real products configured in Stripe yet.
    /*
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price: 'price_1MockIdForTierUpgrade', // Replace with the real price ID created in Stripe Dashboard
          quantity: 1,
        },
      ],
      mode: 'subscription',
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/dashboard/billing?success=true&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/dashboard/billing?canceled=true`,
    });

    return NextResponse.json({ sessionId: session.id, url: session.url });
    */

    // Returning a mock success response for demonstration purposes
    return NextResponse.json({ 
      success: true, 
      message: 'Integração Stripe iniciada com sucesso. (Modo Mock)',
      mockUrl: '/dashboard/billing?success=true'
    });

  } catch (err: any) {
    console.error('Erro no Checkout do Stripe:', err);
    return NextResponse.json({ error: err.message }, { status: err.statusCode || 500 });
  }
}
