const Navbar = () => {
  const links = [
    {
      title: "Community",
      href: "/community",
    },
    {
      title: "Out Flashin",
      href: "/community",
    },
    {
      title: "Releases",
      href: "/releases",
    },
    {
      title: "Resources",
      href: "/resources",
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
    <header className="group h-20 bg-stone-900 mb-4">
      <div className="flex items-center">
        <div className="flex-grow pl-4 ">
          <span className="font-metra text-5xl text-transparent drop-shadow-lg bg-abstract bg-cover bg-bottom bg-clip-text hover:bg-top tracition-all duration-300 ease-in-out">
            METRA
          </span>
        </div>
        <nav className="pb-4 items-end flex h-20 whitespace-nowrap gap-6 pr-4">
          {links.map((link) => (
            <NavLink key={link.href} title={link.title} href={link.href} />
          ))}
        </nav>
      </div>
      <div className="flex w-full h-1 transition-all duration-300 ease-in-out bg-rainbowGradient"></div>
    </header>
  );
};

type NavLinkProps = {
  title: string;
  href: string;
};
const NavLink = ({ title = "N/A", href = "/" }: NavLinkProps) => {
  return (
    <a
      href={href}
      className={
        "text-white hover:bg-abstract hover:text-transparent bg-cover bg-center bg-clip-text font-antonio text-3xl basis-1/6 uppercase "
      }
    >
      {title}
    </a>
  );
};

export default Navbar;
