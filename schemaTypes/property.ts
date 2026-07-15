import {defineField, defineType} from 'sanity'

export const propertyType = defineType({
  name: 'property',
  title: 'Projects',
  type: 'document',

  groups: [
    {name: 'basic', title: 'Basic Information'},
    {name: 'description', title: 'Description'},
    {name: 'media', title: 'Media'},
    {name: 'location', title: 'Location'},
    {name: 'features', title: 'Features'},
    {name: 'amenities', title: 'Amenities'},
  ],

  fields: [
    // ======================
    // BASIC INFORMATION
    // ======================

    defineField({
      name: 'name',
      title: 'Property Name',
      type: 'string',
      group: 'basic',
      validation: Rule => Rule.required(),
    }),

    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      group: 'basic',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: Rule => Rule.required(),
    }),

    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      group: 'basic',
      options: {
        list: [
          {title: 'Residential', value: 'Residential'},
        ],
        layout: 'dropdown',
      },
      validation: Rule => Rule.required(),
    }),

    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      group: 'basic',
      options: {
        list: [
          {title: 'Ongoing', value: 'Ongoing'},
          {title: 'Completed', value: 'Completed'},
        ],
        layout: 'dropdown',
      },
      validation: Rule => Rule.required(),
    }),

    // ======================
    // DESCRIPTION
    // ======================

    defineField({
      name: 'shortDescription',
      title: 'Short Description',
      type: 'text',
      rows: 3,
      group: 'description',
    }),

    // ======================
    // MEDIA
    // ======================

    defineField({
        name: 'coverImage',
        title: 'Cover Image',
        type: 'image',
        group: 'media',
        options: {
            hotspot: true,
        },
        validation: Rule => Rule.required(),
    }),

    defineField({
        name: 'brochure',
        title: 'Brochure (PDF)',
        type: 'file',
        group: 'media',
        options: {
            accept: '.pdf',
        },
    }),

    // ======================
    // LOCATION
    // ======================

    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
      group: 'location',
    }),

    defineField({
      name: 'map',
      title: 'Google Maps Embed URL',
      type: 'url',
      group: 'location',
    }),

    // ======================
    // FEATURES
    // ======================

    defineField({
      name: 'features',
      title: 'Features',
      type: 'array',
      of: [{type: 'feature'}],
      group: 'features',
    }),

    // ======================
    // AMENITIES
    // ======================

    defineField({
      name: 'amenities',
      title: 'Amenities',
      type: 'array',
      of: [{type: 'amenity'}],
      group: 'amenities',
    }),

  ],
  preview: {
  select: {
    title: "name",
    media: "coverImage",
    status: "status",
    category: "category",
  },

  prepare({ title, media, status, category }) {
    return {
      title,
      subtitle: `${status || ""} • ${category || ""}`,
      media,
    }
  },
},
})