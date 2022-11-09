export default {
  name: "resource",
  type: "document",
  title: "Resource",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name",
    },
    {
      name: "website",
      type: "string",
      title: "Website",
    },
    {
      name: "description",
      type: "string",
      title: "Desscription",
    },
    {
      title: "Categories", // new
      name: "categories",
      type: "array",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
    },
  ],
};
