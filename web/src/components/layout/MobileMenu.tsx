'use client';

import Link from 'next/link';
import { useState } from 'react';
import { mainNav } from '@/lib/config/site';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils/cn';

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border text-foreground"
        aria-expanded={open}
        aria-label={open ? 'Close menu' : 'Open menu'}
      >
        {open ? (
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
            <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
          </svg>
        ) : (
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
            <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
          </svg>
        )}
      </button>

      <div
        className={cn(
          'fixed inset-0 top-16 z-40 bg-black/40 transition-opacity',
          open ? 'opacity-100' : 'pointer-events-none opacity-0',
        )}
        onClick={() => setOpen(false)}
        aria-hidden={!open}
      />

      <nav
        className={cn(
          'fixed right-0 top-16 z-50 h-[calc(100vh-4rem)] w-full max-w-sm border-l border-border bg-white p-6 shadow-xl transition-transform duration-300',
          open ? 'translate-x-0' : 'translate-x-full',
        )}
        aria-label="Mobile navigation"
        aria-hidden={!open}
      >
        <ul className="space-y-1">
          {mainNav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-2.5 text-sm font-medium text-foreground hover:bg-surface"
              >
                {item.label}
              </Link>
              {'children' in item && item.children && (
                <ul className="ml-4 space-y-1 border-l border-border pl-3">
                  {item.children.map((child) => (
                    <li key={child.href}>
                      <Link
                        href={child.href}
                        onClick={() => setOpen(false)}
                        className="block rounded-lg px-3 py-2 text-sm text-muted hover:text-primary"
                      >
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
        <div className="mt-6">
          <Button href="/contact" className="w-full">
            Order
          </Button>
        </div>
      </nav>
    </div>
  );
}
