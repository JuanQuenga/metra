const Navbar = () => {
  return (
    <nav className="flex flex-row justify-between h-[200px]">
      <div className="font-metra text-5xl">METRA</div>
      <NavLink color="bg-red-600" />
      <NavLink color="bg-red-600" />
      <NavLink color="bg-red-600" />
      <NavLink color="bg-red-600" />
      <NavLink color="bg-red-600" />
      <NavLink color="bg-red-600" />
    </nav>
  );
};

type NavLinkProps = {
  color: string;
};
const NavLink = ({ color }: NavLinkProps) => {
  return <div className={"basis-1/6 " + color}>Link</div>;
};

export default Navbar;
