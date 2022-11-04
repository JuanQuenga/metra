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
      title: "Community",
      color: "bg-red-600",
      image:
        "https://images.unsplash.com/photo-1656587175141-79babfda47cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format",
    },
    {
      title: "Affiliates",
      color: "bg-orange-600",
      image:
        "https://images.unsplash.com/photo-1528150443491-c8042c6bc419?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format",
    },
    {
      title: "Current Issue",
      color: "bg-yellow-600",
      image:
        "https://images.unsplash.com/photo-1495638488670-437e54b3bab4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format",
    },
    {
      title: "Publishing",
      color: "bg-green-600",
      image:
        "https://images.unsplash.com/photo-1562038969-e85c13ecb2ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format",
    },
    {
      title: "Advertising",
      color: "bg-blue-600",
      image:
        "https://images.unsplash.com/photo-1592598187272-d1ee6d661ce1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format",
    },
    {
      title: "Contact",
      color: "bg-violet-600",
      image:
        "https://images.unsplash.com/photo-1637498975777-71f10ab4fc84?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format",
    },
  ];

  return (
    <div className="relative flex flex-row min-h-screen w-full bg-slate-600 cursor-pointer z-0">
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
