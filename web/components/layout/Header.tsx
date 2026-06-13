import Link from 'next/link';
import { siteConfig } from '@/lib/config/site';
import { Container } from '@/components/layout/Container';

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="text-lg font-bold text-primary">
          {siteConfig.name}
        </Link>
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main navigation">
          {/* Nav items wired in MobileMenu + full nav in next step */}
          <span className="text-sm text-muted">Navigation — connect design</span>
        </nav>
        <Link
          href="/contact"
          className="hidden rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white hover:bg-primary-dark lg:inline-flex"
        >
          Get a Quote
        </Link>
      </Container>
    </header>
  );
}
