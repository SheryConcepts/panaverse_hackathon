import { defineType } from "sanity"

export default defineType({
  type: "document",
  name: "product",
  title: "Product",
  fields: [
    {
      type: "string",
      name: "productTitle",
      title: "Title",
    },
    {
      type: "string",
      name: "productType",
      title: "Type",
    },
    {
      type: "number",
      name: "productPrice",
      title: "Price",
    },
    {
      type: "array",
      name: "productCategory",
      title: "Category",
      of: [
        {
          type: "string",
        },
      ],
      options: {
        layout: "checkbox",
        list: [
          { title: "Male", value: "male" },
          { title: "Kids", value: "kids" },
          { title: "Female", value: "female" },
        ],
      },
    },
    {
      type: "array",
      name: "productSizes",
      title: "Sizes",
      of: [
        {
          type: "string",
        },
      ],
      options: {
        layout: "checkbox",
        list: [
          { title: "XS", value: "XS" },
          { title: "S", value: "S" },
          { title: "M", value: "M" },
          { title: "L", value: "L" },
          { title: "XL", value: "XL" },
        ],
      },
    },
    {
      type: "array",
      name: "productImages",
      title: "Images",
      of: [{ type: "image" }],
    },
    {
      type: "slug",
      name: "productSlug",
      title: "Slug",
      options: {
        source: "productTitle",
        slugify: (input) => input.toLowerCase().replace(/\s+/g, "-"),
      },
    },
    {
      name: "productInformation",
      type: "object",
      title: "Product Information",
      fields: [
        {
          type: "text",
          name: "productDetails",
          title: "Product Details",
        },
        {
          type: "array",
          name: "productCare",
          title: "Product Care",
          of: [{ type: "string" }],
        },
      ],
    },
  ],
})
