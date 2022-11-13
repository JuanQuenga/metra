import { useEffect } from "react";
import MenuItem from "./MenuItem";

interface Links {
  title: string;
  color: string;
  image: string;
  href: string;
}

const LandingMenu = () => {
  useEffect(() => {
    const interval = setInterval(() => {
      console.log("This will run every second!");
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const links: Links[] = [
    {
      title: "About",
      color: "bg-red-600",
      image: "/landing/a.jpeg",
      href: "/about",
    },
    {
      title: "Events",
      color: "bg-orange-600",
      image: "/landing/b.jpeg",
      href: "/events",
    },
    {
      title: "Resources",
      color: "bg-yellow-600",
      image: "/landing/c.jpeg",
      href: "/resources",
    },
    {
      title: "Releases",
      color: "bg-green-600",
      image: "/landing/d.jpeg",
      href: "/releases",
    },
    {
      title: "Advertising",
      color: "bg-blue-600",
      image: "/landing/e.jpeg",
      href: "/advertising",
    },
    {
      title: "Contact",
      color: "bg-violet-600",
      image: "/landing/f.jpeg",
      href: "/contact",
    },
  ];

  return (
    <div className="relative flex flex-row h-screen w-full bg-slate-600 cursor-pointer z-0 overflow-hidden">
      {links.map((link) => (
        <MenuItem
          key={link.title}
          title={link.title}
          color={link.color}
          image={link.image}
          href={link.href}
        />
      ))}
    </div>
  );
};

export default LandingMenu;
