import cn from "classnames";

type MenuItemProps = {
  title: string;
  color: string;
  opened?: boolean;
  image?: string;
};

const MenuItem = ({ title, color, opened = false }: MenuItemProps) => {
  return (
    <div
      className={cn("flex-shrink hover:flex-grow transition-all " + color, {
        "flex-grow": opened,
        "flex-shrink": !opened,
      })}
    >
      <div className="h-full opacity-25 bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1529912626516-e58b23f44f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80')]">
        {title}
      </div>
      {/* <img
	src="https://images.unsplash.com/photo-1529912626516-e58b23f44f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80"
	className="object-cover opacity-25 hover:opacity-1 hover:object-scale-down w-full h-full transition-all"
/> */}
    </div>
  );
};

export default MenuItem;
