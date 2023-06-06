import { type SchemaTypeDefinition } from "sanity"

const pet: SchemaTypeDefinition = {
  name: "pet",
  type: "document",
  title: "Pet",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name",
    },
    {
      name: "breed",
      type: "string",
      title: "Breed",
    },
    {
      name: "contact",
      type: "email",
      title: "contact email",
    },
    {
      name: "image",
      type: "image",
      title: "Image",
    },
  ],
}

export default pet
