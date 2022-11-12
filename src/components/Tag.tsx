const Tag = ({ text }: { text: string }) => {
  return (
    <div className="bg-stone-600 rounded-md px-2 py-1 text-white text-sm">
      {text}
    </div>
  );
};

export default Tag;
