import Link from 'next/link';
import { mainNav } from '@/lib/config/site';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/layout/Container';
import { Logo } from '@/components/ui/Logo';
import { MobileMenu } from '@/components/layout/MobileMenu';

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white/95 backdrop-blur">
      <Container className="flex h-16 items-center justify-between gap-4 lg:h-[72px]">
        <Logo />

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main navigation">
          {mainNav.map((item) =>
            'children' in item && item.children ? (
              <div key={item.href} className="group relative">
                <Link
                  href={item.href}
                  className="inline-flex items-center gap-1 text-sm font-medium text-foreground transition-colors hover:text-primary"
                >
                  {item.label}
                  <svg className="h-4 w-4 text-muted" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.94a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
                <div className="invisible absolute left-0 top-full z-50 min-w-[200px] rounded-xl border border-border bg-white py-2 opacity-0 shadow-lg transition-all group-hover:visible group-hover:opacity-100">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block px-4 py-2 text-sm text-foreground hover:bg-surface hover:text-primary"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-foreground transition-colors hover:text-primary"
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="flex items-center gap-3">
          <Button href="/contact" size="sm" className="hidden lg:inline-flex">
            Order
          </Button>
          <MobileMenu />
        </div>
      </Container>
    </header>
  );
}
