import { defineField, defineType } from "sanity";

export const listingType = defineType({
  name: "listing",
  title: "Category Listings",
  type: "document",

  groups: [
    { name: "basic", title: "Basic Information" },
    { name: "media", title: "Media" },
    { name: "details", title: "Property Details" },
    { name: "location", title: "Location" },
  ],

  fields: [
    defineField({
      name: "name",
      title: "Property Name",
      type: "string",
      group: "basic",
      validation: Rule => Rule.required(),
    }),

    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      group: "basic",
      options: {
        source: "name",
      },
      validation: Rule => Rule.required(),
    }),

    defineField({
      name: "category",
      title: "Category",
      type: "reference",
      to: [{ type: "category" }],
      group: "basic",
      validation: Rule => Rule.required(),
    }),

    defineField({
      name: "location",
      title: "Location",
      type: "string",
      group: "basic",
    }),

    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 5,
      group: "basic",
    }),

    defineField({
      name: "details",
      title: "Property Details",
      type: "array",
      of: [{ type: "string" }],
      group: "details",
    }),

    defineField({
      name: "coverImage",
      title: "Cover Image",
      type: "image",
      options: {
        hotspot: true,
      },
      group: "media",
      validation: Rule => Rule.required(),
    }),

    defineField({
      name: "galleryImages",
      title: "Gallery Images",
      type: "array",
      of: [
        {
          type: "image",
          options: {
            hotspot: true,
          },
        },
      ],
      group: "media",
    }),

    defineField({
      name: "galleryVideos",
      title: "Gallery Videos",
      type: "array",
      of: [
        {
          type: "file",
          options: {
            accept: "video/*",
          },
        },
      ],
      group: "media",
    }),

    defineField({
      name: "locationMap",
      title: "Google Maps Embed URL",
      type: "url",
      group: "location",
    }),
  ],

  preview: {
    select: {
      title: "name",
      subtitle: "category.name",
      media: "coverImage",
    },
  },
});