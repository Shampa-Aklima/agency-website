"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cva } from "class-variance-authority";
import { cn } from "../component/lib/utils";

// Types
type DivProps = React.HTMLAttributes<HTMLDivElement>;
type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;
type AnchorProps = React.AnchorHTMLAttributes<HTMLAnchorElement>;
type UlProps = React.HTMLAttributes<HTMLUListElement>;
type LiProps = React.HTMLAttributes<HTMLLIElement>;

// Primitive polyfill
const NavigationMenuPrimitive = {
  Root: React.forwardRef<HTMLDivElement, DivProps>(({ children, className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "relative z-10 flex max-w-max flex-1 items-center justify-center",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )),
  List: React.forwardRef<HTMLUListElement, UlProps>(({ children, className, ...props }, ref) => (
    <ul
      ref={ref}
      className={cn(
        "group flex flex-1 list-none items-center justify-center space-x-1",
        className
      )}
      {...props}
    >
      {children}
    </ul>
  )),
  Item: React.forwardRef<HTMLLIElement, LiProps>(({ children, ...props }, ref) => (
    <li ref={ref} {...props}>
      {children}
    </li>
  )),
  Trigger: React.forwardRef<HTMLButtonElement, ButtonProps>(({ children, className, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(
        "group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium",
        className
      )}
      {...props}
    >
      {children}
      <ChevronDown
        className="relative top-[1px] ml-1 h-3 w-3 transition duration-200"
        aria-hidden="true"
      />
    </button>
  )),
  Content: React.forwardRef<HTMLDivElement, DivProps>(({ children, className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("absolute left-0 top-full w-full md:w-auto", className)}
      {...props}
    >
      {children}
    </div>
  )),
  Link: React.forwardRef<HTMLAnchorElement, AnchorProps>(({ children, ...props }, ref) => (
    <a ref={ref} {...props}>
      {children}
    </a>
  )),
  Viewport: React.forwardRef<HTMLDivElement, DivProps>(({ children, className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "origin-top-center relative mt-1.5 overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-lg",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )),
};

// Add display names
Object.entries(NavigationMenuPrimitive).forEach(([key, Component]) => {
  Component.displayName = `NavigationMenu.${key}`;
});

// Variants
const navigationMenuTriggerStyle = cva(
  "group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus:outline-none focus:bg-accent focus:text-accent-foreground disabled:opacity-50 disabled:pointer-events-none data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
);

// Final components

const NavigationMenu = React.forwardRef<HTMLDivElement, DivProps>(({ children, ...props }, ref) => (
  <NavigationMenuPrimitive.Root ref={ref} {...props}>
    {children}
    <NavigationMenuViewport />
  </NavigationMenuPrimitive.Root>
));
NavigationMenu.displayName = "NavigationMenu";

const NavigationMenuList = NavigationMenuPrimitive.List;
const NavigationMenuItem = NavigationMenuPrimitive.Item;
const NavigationMenuTrigger = NavigationMenuPrimitive.Trigger;
const NavigationMenuContent = NavigationMenuPrimitive.Content;
const NavigationMenuLink = NavigationMenuPrimitive.Link;

const NavigationMenuViewport = React.forwardRef<HTMLDivElement, DivProps>(({ className, ...props }, ref) => (
  <div className="absolute left-0 top-full flex justify-center">
    <NavigationMenuPrimitive.Viewport
      ref={ref}
      className={cn(
        "origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-lg md:w-[var(--radix-navigation-menu-viewport-width)]",
        className
      )}
      {...props}
    />
  </div>
));
NavigationMenuViewport.displayName = "NavigationMenu.Viewport";

export {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
};
