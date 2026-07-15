import {defineField, defineType} from 'sanity'

export const featureType = defineType({
  name: 'feature',
  title: 'Feature',
  type: 'object',

  fields: [
    defineField({
      name: 'text',
      title: 'Text',
      type: 'string',
    }),

    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
})