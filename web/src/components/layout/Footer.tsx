import Link from 'next/link';
import { footerNav, siteConfig } from '@/lib/config/site';
import { Container } from '@/components/layout/Container';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-slate-200 bg-slate-50">
      <Container className="grid gap-10 py-12 md:grid-cols-4">
        <div className="md:col-span-1">
          <p className="text-lg font-bold text-primary">{siteConfig.name}</p>
          <p className="mt-2 text-sm text-muted">{siteConfig.defaultDescription}</p>
        </div>

        <div>
          <p className="text-sm font-semibold text-foreground">Company</p>
          <ul className="mt-3 space-y-2">
            {footerNav.company.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm text-muted hover:text-primary">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-foreground">Services</p>
          <ul className="mt-3 space-y-2">
            {footerNav.services.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm text-muted hover:text-primary">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-foreground">Resources</p>
          <ul className="mt-3 space-y-2">
            {footerNav.resources.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm text-muted hover:text-primary">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>

      <div className="border-t border-slate-200 py-4">
        <Container>
          <p className="text-center text-sm text-muted">
            © {year} {siteConfig.name}. All rights reserved.
          </p>
        </Container>
      </div>
    </footer>
  );
}
