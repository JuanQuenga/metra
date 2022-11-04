import cn from "classnames";

type MenuItemProps = {
  title: string;
  color: string;
  opened?: boolean;
  image?: string;
};

const MenuItem = ({ title, color, image, opened = false }: MenuItemProps) => {
  return (
    <div
      className={
        "relative group basis-1/6 hover:basis-2/3 transition-all overflow-hidden " +
        color
      }
    >
      <img
        src={image}
        className="absolute object-cover opacity-25 group-hover:opacity-1 group-hover:scale-150 h-screen transition-all"
      />

      <div className="flex flex-col h-full w-full align-center group-hover:align-start justify-end">
        <div className="text-center text-6xl text-white font-metra -rotate-90 group-hover:rotate-0 transition-all whitespace-nowrap -translate-y-[3em] group-hover:-translate-y-[2em] drop-shadow-md">
          {title}
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
