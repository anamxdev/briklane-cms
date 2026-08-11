import { defineField, defineType } from "sanity";

export const categoryType = defineType({
  name: "category",
  title: "Categories",
  type: "document",

  fields: [
    defineField({
      name: "name",
      title: "Category Name",
      type: "string",
      validation: Rule => Rule.required(),
    }),

    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
      },
      validation: Rule => Rule.required(),
    }),
  ],

  preview: {
    select: {
      title: "name",
    },
  },
});