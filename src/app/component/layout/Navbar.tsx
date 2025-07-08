"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "../lib/utils";
import { Button } from "../../ui/button";
import { Icons } from "../../ui/icons";
import { ThemeSwitcher } from "../../ui/theme-switcher";
import Image from "next/image";

interface NavItem {
  title: string;
  href: string;
  children?: NavItem[];
}

interface NavbarProps {
  items?: NavItem[];
  className?: string;
}

const Navbar = ({ items = defaultNavItems, className }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 bg-background/80 backdrop-blur-sm",
        isScrolled ? "shadow-md py-2" : "py-4",
        className,
      )}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <h1 className="text-xl sm:text-2xl font-bold">NAZAH</h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {items.map((item, index) => (
              <NavbarItem key={index} item={item} />
            ))}
          </nav>

          {/* Right side actions */}
          <div className="hidden md:flex items-center space-x-3 lg:space-x-4">
            <ThemeSwitcher />
            <Button variant="outline" size="sm" className="text-sm">
              Sign In
            </Button>
            <Button size="sm" className="text-sm">Sign Up</Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-md hover:bg-accent/10 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t mt-2">
            <nav className="flex flex-col space-y-4">
              {items.map((item, index) => (
                <MobileNavItem key={index} item={item} />
              ))}
            </nav>
            <div className="mt-6 flex flex-col space-y-3">
              <div className="flex justify-center">
                <ThemeSwitcher />
              </div>
              <Button variant="outline" className="w-full text-sm">
                Sign In
              </Button>
              <Button className="w-full text-sm">Sign Up</Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

const NavbarItem = ({ item }: { item: NavItem }) => {
  const [isOpen, setIsOpen] = useState(false);

  if (item.children) {
    return (
      <div className="relative group">
        <button
          className="flex items-center space-x-1 text-foreground/80 hover:text-foreground transition-colors text-sm lg:text-base"
          onClick={() => setIsOpen(!isOpen)}
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          {item.title}
          <ChevronDown size={16} className={cn("transition-transform", isOpen ? "rotate-180" : "")} />
        </button>

        {isOpen && (
          <div
            className="absolute left-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-background/95 backdrop-blur-sm border z-10"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
          >
            {item.children.map((child, index) => (
              <Link
                key={index}
                href={child.href}
                className="block px-4 py-2 text-sm hover:bg-accent/10 transition-colors"
              >
                {child.title}
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <Link
      href={item.href}
      className="text-foreground/80 hover:text-foreground transition-colors text-sm lg:text-base"
    >
      {item.title}
    </Link>
  );
};

const MobileNavItem = ({ item }: { item: NavItem }) => {
  const [isOpen, setIsOpen] = useState(false);

  if (item.children) {
    return (
      <div>
        <button
          className="flex items-center justify-between w-full text-left text-sm"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span>{item.title}</span>
          <ChevronDown
            size={16}
            className={cn("transition-transform", isOpen ? "rotate-180" : "")}
          />
        </button>

        {isOpen && (
          <div className="mt-2 ml-4 space-y-2">
            {item.children.map((child, index) => (
              <Link
                key={index}
                href={child.href}
                className="block py-1 text-foreground/70 hover:text-foreground transition-colors text-sm"
              >
                {child.title}
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <Link
      href={item.href}
      className="block text-foreground/80 hover:text-foreground transition-colors text-sm"
    >
      {item.title}
    </Link>
  );
};

const defaultNavItems: NavItem[] = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  {
    title: "Services",
    href: "/services",
    // children: [
    //   { title: "Web Development", href: "/services/web-development" },
    //   { title: "Mobile Apps", href: "/services/mobile-apps" },
    //   { title: "UI/UX Design", href: "/services/design" },
    // ],
  },
  { title: "Pricing", href: "/pricing" },
  { title: "Contact", href: "/contact" },
];

export default Navbar;
