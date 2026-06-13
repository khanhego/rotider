'use client';

import Link from 'next/link';
import { Container } from '@/components/layout/Container';

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <Container className="flex flex-1 flex-col items-center justify-center py-24 text-center">
      <h1 className="text-2xl font-bold">Something went wrong</h1>
      <p className="mt-4 text-muted">Please try again.</p>
      <div className="mt-8 flex gap-4">
        <button
          type="button"
          onClick={reset}
          className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white"
        >
          Try again
        </button>
        <Link href="/" className="rounded-lg border px-4 py-2 text-sm font-semibold">
          Back to Home
        </Link>
      </div>
    </Container>
  );
}
