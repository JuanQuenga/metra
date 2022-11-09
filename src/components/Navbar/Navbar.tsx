const Navbar = () => {
  const links = [
    {
      title: "Community",
      href: "/community",
    },
    {
      title: "Affiliates",
      href: "/community",
    },
    {
      title: "Issues",
      href: "/community",
    },
    {
      title: "Release Schedule",
      href: "/community",
    },
    {
      title: "Advertising",
      href: "/community",
    },
    {
      title: "Contact",
      href: "/community",
    },
  ];
  return (
    <header className="group h-20 bg-stone-800 mb-4">
      <div className="flex items-center">
        <div className="flex-grow pl-4 ">
          <span className="font-metra text-5xl text-transparent drop-shadow-lg bg-rainbow bg-clip-text animate-rainbow">
            METRA
          </span>
        </div>
        <nav className="items-center flex h-20 whitespace-nowrap gap-4 pr-4">
          {links.map((link) => (
            <NavLink key={link.href} title={link.title} href={link.href} />
          ))}
        </nav>
      </div>
      <div className="flex w-full h-2 group-hover:h-4 transition-all duration-300 ease-in-out">
        <div className="w-1/6 h-full bg-red-600" />
        <div className="w-1/6 h-full bg-orange-600" />
        <div className="w-1/6 h-full bg-yellow-600" />
        <div className="w-1/6 h-full bg-green-600" />
        <div className="w-1/6 h-full bg-blue-600" />
        <div className="w-1/6 h-full bg-violet-600" />
      </div>
    </header>
  );
};

type NavLinkProps = {
  title: string;
  href: string;
};
const NavLink = ({ title = "N/A", href = "/" }: NavLinkProps) => {
  return (
    <a href={href} className={"text-white basis-1/6 "}>
      {title}
    </a>
  );
};

export default Navbar;
