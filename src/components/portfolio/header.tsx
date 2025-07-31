'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Download, Menu, X } from 'lucide-react';
import React from 'react';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';

export function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? 'bg-background/80 backdrop-blur-sm shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/" className="text-2xl font-headline font-bold text-primary transition-transform hover:scale-105">
          Waqas Ahmad
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-body text-lg text-foreground/80 transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
            <Button asChild className="group transition-transform hover:scale-105 hidden sm:inline-flex">
              <a href="/placeholder-resume.pdf" download>
                <Download className="mr-2 h-5 w-5 transition-transform group-hover:rotate-6" />
                Resume
              </a>
            </Button>
            <div className="md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" size="icon">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Open menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right">
                  <div className="flex flex-col gap-6 p-6">
                    <Link href="/" className="text-2xl font-headline font-bold text-primary self-start">
                      Waqas Ahmad
                    </Link>
                    <nav className="flex flex-col gap-4">
                      {navLinks.map((link) => (
                         <SheetClose asChild key={link.href}>
                            <Link
                              href={link.href}
                              className="font-body text-lg text-foreground/80 transition-colors hover:text-primary"
                            >
                              {link.label}
                            </Link>
                         </SheetClose>
                      ))}
                    </nav>
                    <Button asChild className="group transition-transform hover:scale-105 w-full">
                      <a href="/placeholder-resume.pdf" download>
                        <Download className="mr-2 h-5 w-5 transition-transform group-hover:rotate-6" />
                        Resume
                      </a>
                    </Button>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
        </div>
      </div>
    </header>
  );
}
