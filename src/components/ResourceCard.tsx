import Tag from "./Tag";

type ResourceCardProps = {
  name: string;
  description: string;
  website: string;
  tags: string[];
};
const ResourceCard = ({
  name,
  website,
  description,
  tags,
}: ResourceCardProps) => {
  return (
    <div className="w-full bg-stone-800 rounded-md p-4 flex flex-col">
      <header>
        <h3 className="text-lg text-white font-bold">{name}</h3>
      </header>
      <div className="flex gap-1">
        {tags && tags.map((tag) => <Tag text={tag} />)}
      </div>
      <div className="text-stone-300 flex-grow mt-2 mb-4">
        <p className="text-stone-400">
          {description ?? "No description provided."}
        </p>
      </div>
      <footer className="">
        <a
          href={website}
          target="_blank"
          className="rounded-md bg-white px-4 py-2"
        >
          Website
        </a>
      </footer>
    </div>
  );
};

export default ResourceCard;
