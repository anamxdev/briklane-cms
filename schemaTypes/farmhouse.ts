import { defineField, defineType } from "sanity"

export const farmhouseType = defineType({
  name: "farmhouse",
  title: "Farmhouse",
  type: "document",

  fields: [
    defineField({
      name: "name",
      title: "Name",
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

    defineField({
      name: "location",
      title: "Location",
      type: "string",
    }),

    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 5,
    }),

    defineField({
      name: "coverImage",
      title: "Cover Image",
      type: "image",
      options: { hotspot: true },
    }),

    defineField({
      name: "galleryImages",
      title: "Gallery Images",
      type: "array",
      of: [{ type: "image" }],
    }),

    defineField({
        name: "galleryVideos",
        title: "Gallery Videos",
        type: "array",
        of: [{ type: "file" }],
    }),

    defineField({
      name: "details",
      title: "Property Details",
      type: "array",
      of: [{ type: "string" }],
    }),

    defineField({
      name: "locationMap",
      title: "Google Maps Embed URL",
      type: "url",
    }),
  ],
})