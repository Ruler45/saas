"use client";

import Link from "next/link";
import {
  ArrowRight,
  Code,
  ImageIcon,
  MessageSquare,
  Music,
  VideoIcon,
} from "lucide-react";
import { Card } from "../../../../../components/ui/card";
import { cn } from "../../../../../lib/utils";

const tools = [
  {
    label: "Chat",
    icon: MessageSquare,
    href: "/chat",
    color: "text-violet-500",
    bgColor: "bg-violet-500/10",
  },
  {
    label: "Image Generation",
    icon: ImageIcon,
    href: "/image",
    color: "text-pink-500",
  },
  {
    label: "Video Generation",
    icon: VideoIcon,
    href: "/video",
    color: "text-orange-500",
  },
  {
    label: "Music Generation",
    icon: Music,
    href: "/music",
    color: "text-emerald-500",
  },
  {
    label: "Code Generation",
    icon: Code,
    href: "/code",
    color: "text-green-500",
  },
];

const Dashboard = () => {
  return (
    <div>
      <div className="mb-8 space-y-4 px-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center ">
          Explore the power of AI
        </h2>
        <p className="text-muted-foreground font-light text-sm md:text-lg text-center ">
          Chat with our AI assistant to get started with your AI journey.
        </p>
        <div className=" px-4 md:px-20 lg:px-32 space-y-4">
          {tools.map((tool) => (
            <Link href={`${tool.href}`} key={tool.href}>
              <Card className="p-4 border-black/5 flex items-center justify-between hover:shadow-md transition-all cursor-pointer">
                <div className="flex items-center gap-x-4">
                  <div className={cn("p-2 w-fit rounded-md", tool.bgColor)}>
                    <tool.icon className={cn("w-8 h-8", tool.color)} />
                  </div>
                  <div className="font-semibold">{tool.label}</div>
                </div>
                <ArrowRight className="w-6 h-6" />
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
