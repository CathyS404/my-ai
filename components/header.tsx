"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navigation = [
  { name: "功能", href: "#features" },
  { name: "定价", href: "#pricing" },
  { name: "文档", href: "#" },
  { name: "博客", href: "#" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <div className="flex items-center gap-x-12">
          <Link href="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">F</span>
            </div>
            <span className="text-xl font-semibold text-foreground">FlowAI</span>
          </Link>
          <div className="hidden lg:flex lg:gap-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="hidden lg:flex lg:items-center lg:gap-x-4">
          <Link
            href="#"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            登录
          </Link>
          <Link
            href="#"
            className="rounded-lg bg-foreground px-4 py-2 text-sm font-medium text-background hover:bg-foreground/90 transition-colors"
          >
            开始使用
          </Link>
        </div>
        <button
          type="button"
          className="lg:hidden text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>
      
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="px-6 py-4 space-y-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 border-t border-border flex flex-col gap-3">
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                登录
              </Link>
              <Link
                href="#"
                className="rounded-lg bg-foreground px-4 py-2 text-sm font-medium text-background text-center hover:bg-foreground/90 transition-colors"
              >
                开始使用
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
