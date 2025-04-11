'use client';

import { useEffect, useState, Suspense } from 'react'; // Import Suspense
import { useSearchParams } from 'next/navigation';
import { AnimatedGroup } from '@/components/ui/animated-group';
import { Loader2 } from 'lucide-react';
import { PaidCard } from './paid-card';

interface SessionDetails {
  amount: number;
  paymentMethod: any;
  date: number;
  currency: string;
}

// Inner component that uses useSearchParams
function SuccessPageContent() {
  const searchParams = useSearchParams();
  const session_id = searchParams.get('session_id');
  const [sessionDetails, setSessionDetails] = useState<SessionDetails | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!session_id) {
      // Redirect to error page if no session_id
      window.location.href = '/error?message=No%20payment%20session%20found';
      return;
    }

    const fetchSessionDetails = async () => {
      try {
        setLoading(true);
        const response = await fetch(`/api/get_session?session_id=${session_id}`);
        if (!response.ok) {
          const data = await response.json();
          throw new Error(data.error || 'Failed to fetch session details');
        }
        const data = await response.json();
        setSessionDetails(data);
      } catch (err: any) {
        // Redirect to error page with message
        window.location.href = `/error?message=${encodeURIComponent(err.message)}`;
      } finally {
        setLoading(false);
      }
    };

    fetchSessionDetails();
  }, [session_id]);

  if (loading) {
    return (
      <Layout>
        <div className="flex flex-col items-center justify-center min-h-screen gap-4 bg-gray-50 dark:bg-zinc-950">
          <Loader2 className="animate-spin" size={30} />
          <p className="font-mono animate-caret-blink delay-1000">   Loading...</p>
        </div>
      </Layout>
    );
  }

  if (!sessionDetails) return null; // Handled by redirect to /error

  return (
    <Layout>
      <AnimatedGroup
        variants={{
          container: { visible: { transition: { delayChildren: 1 } } },
          item: {
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { type: 'spring', bounce: 0.3, duration: 2 },
            },
          },
        }}
      >
        <PaidCard
          amount={sessionDetails.amount}
          currency={sessionDetails.currency}
          paymentMethod={sessionDetails.paymentMethod}
          date={sessionDetails.date}
        />
      </AnimatedGroup>
    </Layout>
  );
}

// Layout component remains unchanged
const Layout = ({ children }: { children: React.ReactNode }) => (
  <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 dark:bg-zinc-950">
    <main className="overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 isolate hidden opacity-65 contain-strict lg:block"
      >
        <div className="w-140 h-320 -translate-y-87.5 absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
        <div className="h-320 absolute left-0 top-0 w-60 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]" />
        <div className="h-320 -translate-y-87.5 absolute left-0 top-0 w-60 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
      </div>
      {children}
    </main>
  </div>
);

// Wrap SuccessPageContent in Suspense
export default function SuccessPage() {
  return (
    <Suspense
      fallback={
        <Layout>
          <div className="flex flex-col items-center justify-center min-h-screen gap-4 bg-gray-50 dark:bg-zinc-950">
            <Loader2 className="animate-spin" size={30} />
            <p className="font-mono animate-caret-blink delay-1000">   Loading...</p>
          </div>
        </Layout>
      }
    >
      <SuccessPageContent />
    </Suspense>
  );
}