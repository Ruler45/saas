"use client";

import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Code,
  ImageIcon,
  LayoutDashboard,
  MessageSquare,
  Music,
  Settings,
  VideoIcon,
} from "lucide-react";
import { cn } from "../../lib/utils";

const monsterrat = Montserrat({
  weight: "600",
  subsets: ["latin"],
});

const navlinks = [
  {
    name: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
    color: "text-sky-500",
  },
  {
    name: "Chat",
    icon: MessageSquare,
    href: "/chat",
    color: "text-violet-500",
  },
  {
    name: "Image Generation",
    icon: ImageIcon,
    href: "/image",
    color: "text-pink-500",
  },
  {
    name: "Video Generation",
    icon: VideoIcon,
    href: "/video",
    color: "text-orange-500",
  },
  {
    name: "Music Generation",
    icon: Music,
    href: "/music",
    color: "text-emerald-500",
  },
  {
    name: "Code Generation",
    icon: Code,
    href: "/code",
    color: "text-green-500",
  },
  {
    name: "Settings",
    icon: Settings,
    href: "/settings",
    color: "text-gray-500",
  },
];

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <div className="space-y-4 py-4 flex flex-col h-full bg-[#111827] text-white">
      <div className="flex-1 px-3 py-2">
        <Link href="/dashboard" className="flex items-center pl-3 mb-14">
          <div className="relative w-8 h-8 mr-4">
            <Image src="/logo.svg" fill alt="logo" />
          </div>
          <h1 className={cn("text-2xl font-bold", monsterrat.className)}>
            Name
          </h1>
        </Link>
        <div className="space-y-1">
          {navlinks.map((navlink) => {
            return (
              <Link
                key={navlink.name}
                href={navlink.href}
                className={cn(
                  "text-sm group flex p-3 w-full  justify-start font-medium cursor-pointer  hover:text-white hover:bg-[#1F2937] rounded-lg transition",
                  pathname === navlink.href ? "bg-[#1F2937]" : "text-zinc-400",
                )}
              >
                <div className="flex items-center flex-1">
                  <navlink.icon className={cn("w-6 h-6 mr-4", navlink.color)} />
                  {navlink.name}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
