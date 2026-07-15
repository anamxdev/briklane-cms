import {defineField, defineType} from 'sanity'

export const amenityType = defineType({
  name: 'amenity',
  title: 'Amenity',
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