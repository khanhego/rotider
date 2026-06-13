import Link from 'next/link';
import { Container } from '@/components/layout/Container';

export default function NotFound() {
  return (
    <Container className="flex flex-1 flex-col items-center justify-center py-24 text-center">
      <h1 className="text-4xl font-bold">404</h1>
      <p className="mt-4 text-muted">Page not found.</p>
      <Link href="/" className="mt-8 text-primary font-semibold hover:underline">
        Back to Home
      </Link>
    </Container>
  );
}
