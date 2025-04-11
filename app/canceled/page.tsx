'use client';

import { Card } from '@/components/ui/card';
import { XCircle } from 'lucide-react';
import Link from 'next/link';

export default function CanceledPage() {
  return (
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
        <div className="relative z-50 flex flex-col items-center justify-center min-h-screen ">
          <Card className="max-w-md w-full space-y-6 p-6 bg-white rounded-lg shadow-lg dark:bg-zinc-950">
            <div className="flex flex-col items-center">
              <XCircle className="text-red-500 h-16 w-16" />
              <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-50 mt-4">
                Payment Canceled
              </h1>
              <p className="text-gray-500 dark:text-gray-400 mt-2 text-center">
                It looks like you canceled your payment. No charges were made. Ready to try again?
              </p>
            </div>
            <div className="flex justify-center gap-4">
              <Link
                href="/#pricing_unlocked" // Or wherever your checkout starts
                className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-gray-900 hover:bg-gray-800 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-200"
                prefetch={false}
              >
                Retry Payment
              </Link>
              <Link
                href="/"
                className="inline-flex items-center justify-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 dark:border-gray-700 dark:text-gray-300 dark:bg-zinc-950 dark:hover:bg-zinc-900"
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