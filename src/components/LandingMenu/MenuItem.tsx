import cn from "classnames";

type MenuItemProps = {
  title: string;
  color: string;
  href: string;
  image: string;
};

const MenuItem = ({ title, color, image, href }: MenuItemProps) => {
  return (
    <a
      className={
        "relative group basis-1/6 transition-all hover:scale-[105%] overflow-hidden shadow-2xl hover:z-50 shadow-black " +
        color
      }
      href={href}
      tabIndex={0}
    >
      <img
        src={image}
        className="absolute object-cover opacity-25 group-hover:scale-[110%] h-screen transition-all"
      />

      <div className="flex flex-col h-full w-full align-center justify-end">
        <div className="text-center text-6xl text-white font-metra -rotate-90 whitespace-nowrap -translate-y-[3em] drop-shadow-md">
          {title}
        </div>
      </div>
    </a>
  );
};

export default MenuItem;
