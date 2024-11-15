"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Logo from "../../public/cypresslogo.svg";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
const routes = [
  {
    title: "Features",
    href: "#features",
  },
  {
    title: "Resources",
    href: "#resources",
  },
  {
    title: "Pricing",
    href: "#pricing",
  },
  {
    title: "Testimonials",
    href: "#testimonials",
  },
];

const components: { title: string; href: string; description: string }[] = [];

const header = ({}) => {
  const [path, setPath] = useState("#products");
  return (
    <header className="p-4 flex justify-center items-center">
      <Link href="/" className="w-full flex gap-2">
        <Image src={Logo} alt="Logo" width={25} height={25} />
        <span className="font-semibold dark:text-white">Notion.</span>
      </Link>
      <NavigationMenu className="hidden md:block">
        <NavigationMenuList className="gap-6">
          <NavigationMenuItem>
            <NavigationMenuTrigger
              onClick={() => setPath("#resources")}
              className={cn({
                "dark:text-white": path === "#resources",
                "dark:text-white/40": path !== "#resources",
                "font-normal": true,
                "text-xl": true,
              })}
            >
              Resources
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <span className="flex h-full w-full select-none flex-col justify-end bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md ">
                    Welcome
                  </span>
                </li>
                <ListItem href="#" title="Introduction">
                  Reusable Components
                </ListItem>
                <ListItem href="#" title="Installation">
                  How to install dependencies and structure your app.
                </ListItem>
                <ListItem href="#" title="Typography">
                  Style for headings, paragraphs, lists....etc
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger
              onClick={() => setPath("#pircing")}
              className={cn({
                "dark:text-white": path === "#pricing",
                "dark:text-white/40": path !== "#pricing",
                "font-normal": true,
                "text-xl": true,
              })}
            >
              Pricing
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-4 w-[400px] md:grid-rows-2">
                <ListItem href="#" title="Pro Plan">
                  Unlock the full power with collabration.
                </ListItem>
                <ListItem href="#" title="Free Plan">
                  Great for teams just starting out.
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:-[500px] md:grid-cols-2 lg:w-[60px]">
                {components.map((component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    href={component.href}
                  >
                    {component.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href={"#"}>
              <NavigationMenuLink
                className={cn(navigationMenuTriggerStyle(), {
                  "dark:text-white": path === "#testimonials",
                  "dark:text-white/40": path !== "#testimonials",
                  "font-normal": true,
                  "text-xl": true,
                })}
              >
                Testimonials
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <aside className="flex w-full gap-2 justify-end">
        <Link href={"/login"}>
          <Button variant={"secondary"} className="p-1 hidden sm:block">
            Login
          </Button>
        </Link>
      </aside>
    </header>
  );
};

export default header;

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "group block select-none space-y-1 font-medium leading-none"
          )}
          {...props}
        >
          <div className="text-white text-sm font-medium leading-none">
            {title}
          </div>
          <p className="group-hover:text-white/70 line-clamp-2 text-sm leading-snug text-white/40"></p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});

ListItem.displayName = "ListItem";
