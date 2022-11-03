import MenuItem from "./MenuItem";

const LandingMenu = () => {
  return (
    <div className="flex flex-row group min-h-screen w-full bg-slate-600">
      <MenuItem title="Community" color="bg-red-600" />
      <MenuItem title="Affiliates" color="bg-orange-600" />
      <MenuItem title="Current Issue" color="bg-yellow-600" opened={true} />
      <MenuItem title="Upcoming Issues" color="bg-green-600" />
      <MenuItem title="Advertising" color="bg-blue-600" />
      <MenuItem title="Contact" color="bg-violet-600" />
    </div>
  );
};

export default LandingMenu;
