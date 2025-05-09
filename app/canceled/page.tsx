// CanceledPage.tsx
'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { XCircle, Sun, Moon, AlertCircle } from 'lucide-react';
import Link from 'next/link';

export default function CanceledPage() {
  const [isDark, setIsDark] = useState(false); // Local state for theme

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <div className={`flex flex-col items-center justify-center min-h-screen bg-zinc-950`}>
      <main className="overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 isolate hidden opacity-65 contain-strict lg:block"
        >
          <div className={`w-140 h-320 -translate-y-87.5 absolute left-0 top-0 -rotate-45 rounded-full ${isDark ? 'bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,45%,.08)_0,hsla(0,0%,35%,.02)_50%,hsla(0,0%,25%,0)_80%)]' : 'bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]'}`} />
          <div className={`h-320 absolute left-0 top-0 w-60 -rotate-45 rounded-full ${isDark ? 'bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,45%,.06)_0,hsla(0,0%,25%,.02)_80%,transparent_100%)]' : 'bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]'} [translate:5%_-50%]`} />
          <div className={`h-320 -translate-y-87.5 absolute left-0 top-0 w-60 -rotate-45 ${isDark ? 'bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,45%,.04)_0,hsla(0,0%,25%,.02)_80%,transparent_100%)]' : 'bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]'}`} />
        </div>
        <div className="relative z-50 flex flex-col items-center justify-center min-h-screen">
          <Card className={`max-w-md w-full space-y-6 p-6 rounded-lg shadow-lg bg-zinc-950 border-zinc-900`}>
            <div className="flex flex-col items-center">
              <AlertCircle className="text-orange-500 h-16 w-16" />
              <h1 className="text-3xl font-bold mt-4">Payment Canceled</h1>
              <p className={`text-gray-500 mt-2 text-center`}>
                It looks like you canceled your payment. No charges were made. Ready to try again?
              </p>
            </div>
            <div className="flex justify-center gap-4">
              <Link
                href="/checkout"
                className={`inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 bg-zinc-900 text-white hover:bg-zinc-800 focus:ring-gray-500 transition`}
                prefetch={false}
              >
                Retry Payment
              </Link>
              <Link
                href="/checkout"
                className={`inline-flex items-center justify-center px-4 py-2 border text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 border-gray-300 text-gray-700 bg-white hover:bg-zinc-300 focus:ring-gray-500 transition`}
                prefetch={false}
              >
                Back to Home
              </Link>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
}