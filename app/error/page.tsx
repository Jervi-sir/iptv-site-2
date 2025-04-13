// ErrorPage.tsx
'use client';

import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Card } from '@/components/ui/card';
import { AlertCircle, Sun, Moon } from 'lucide-react';
import Link from 'next/link';
import { Suspense } from 'react';

function ErrorPageContent() {
  const searchParams = useSearchParams();
  const message = searchParams.get('message') || 'An unexpected error occurred';
  const [isDark, setIsDark] = useState(false); // Local state for theme

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <div className={`flex flex-col items-center justify-center min-h-screen ${isDark ? 'bg-zinc-950' : 'bg-gray-50'}`}>
      <button
        onClick={toggleTheme}
        className={`absolute top-4 right-4 p-2 rounded-full ${isDark ? 'bg-gray-800 text-gray-200 hover:bg-gray-700' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'} transition`}
        aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      >
        {isDark ? <Sun size={20} /> : <Moon size={20} />}
      </button>
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
          <Card className={`max-w-md w-full space-y-6 p-6 rounded-lg shadow-lg ${isDark ? 'bg-zinc-950 text-gray-50' : 'bg-white text-gray-900'}`}>
            <div className="flex flex-col items-center">
              <AlertCircle className="text-red-500 h-16 w-16" />
              <h1 className="text-3xl font-bold mt-4">Payment Error</h1>
              <p className={`${isDark ? 'text-gray-400' : 'text-gray-500'} mt-2 text-center`}>
                {message}. Please try again or contact support if the issue persists.
              </p>
            </div>
            <div className="flex justify-center gap-4">
              <Link
                href="/#pricing_unlocked"
                className={`inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 ${isDark ? 'bg-gray-50 text-gray-900 hover:bg-gray-200 focus:ring-gray-300 focus:ring-offset-zinc-950' : 'bg-gray-900 text-white hover:bg-gray-800 focus:ring-gray-500'}`}
                prefetch={false}
              >
                Retry Payment
              </Link>
              <Link
                href="/"
                className={`inline-flex items-center justify-center px-4 py-2 border text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 ${isDark ? 'border-gray-700 text-gray-300 bg-zinc-950 hover:bg-zinc-900 focus:ring-gray-300 focus:ring-offset-zinc-950' : 'border-gray-300 text-gray-700 bg-white hover:bg-gray-50 focus:ring-gray-500'}`}
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

export default function ErrorPage() {
  return (
    <Suspense
      fallback={
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
          <main className="overflow-hidden">
            <div className="relative z-50 flex flex-col items-center justify-center min-h-screen">
              <Card className="max-w-md w-full space-y-6 p-6 bg-white rounded-lg shadow-lg">
                <div className="flex flex-col items-center">
                  <AlertCircle className="text-red-500 h-16 w-16" />
                  <h1 className="text-3xl font-bold text-gray-900 mt-4">Payment Error</h1>
                  <p className="text-gray-500 mt-2 text-center">Loading error details...</p>
                </div>
              </Card>
            </div>
          </main>
        </div>
      }
    >
      <ErrorPageContent />
    </Suspense>
  );
}