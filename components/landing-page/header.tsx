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
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

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
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};

export default header;
