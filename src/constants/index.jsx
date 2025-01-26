import { BotMessageSquare, Construction, Layout, LayoutDashboard, Map, MessageCircle } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";


export const navItems = [
  { label: "Home", href: "#top"},
  { label: "Trucker Dashboard", href: "#" },
  { label: "Company Dashboard", href: "#" },
  { label: "Trucker Map", href: "#" },
  { label: "About Us", href: "#" },
  
];


export const features = [
  {
    icon: <LayoutDashboard />,
    text: "Driver's Dashboard",
    description:
      "Easily access your truckin' profile, which includes your personnal information, all your certifications, information about your current and future deliveries (weight, load, carry type, etc.), and information about your truck (Model, Fuel Level, Max Carry Load, etc.)",
  },
  {
    icon: <LayoutDashboard />,
    text: "Company Dashboard (Managers Only)",
    description:
      "Access all your driver's information grouped into one dashboard, get their live location, chat with them, create delivery posting for drivers, etc.",
  },
  {
    icon: <Map />,
    text: "Live Map",
    description:
      "Access a Live Map with Truckers around your area, get live feedback, ability to chat with other truckers. It also includes an incident report feature that drivers can use to alert other drivers, and be rerouted through a different, fuel-efficient and environmental-friendly route. ",
  },
  {
    icon: <MessageCircle />,
    text: "Truckin' Chat",
    description:
      "Title says it all, a chat for truckers. (maybe you can even meet the trucker of your life)",
  },
  {
    icon: <Construction />,
    text: "COMING SOON",
    description:
      "Please give us first place",
  },
  {
    icon: <Construction />,
    text: "COMING SOON",
    description:
      "Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please ",
  },
];
