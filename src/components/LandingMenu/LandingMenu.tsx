import { useEffect } from "react";
import MenuItem from "./MenuItem";

interface Links {
  title: string;
  color: string;
  image: string;
  opened?: boolean;
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
    },
    {
      title: "Events",
      color: "bg-orange-600",
      image: "/landing/b.jpeg",
    },
    {
      title: "Releases",
      color: "bg-yellow-600",
      image: "/landing/c.jpeg",
    },
    {
      title: "Releases",
      color: "bg-green-600",
      image: "/landing/d.jpeg",
    },
    {
      title: "Advertising",
      color: "bg-blue-600",
      image: "/landing/e.jpeg",
    },
    {
      title: "Contact",
      color: "bg-violet-600",
      image: "/landing/f.jpeg",
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
        />
      ))}
    </div>
  );
};

export default LandingMenu;
