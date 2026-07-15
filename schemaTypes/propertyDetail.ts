import {defineField, defineType} from 'sanity'

export const propertyDetailType = defineType({
  name: 'propertyDetail',
  title: 'Property Detail',
  type: 'object',

  fields: [
    defineField({
      name: 'text',
      title: 'Detail',
      type: 'string',
    }),
  ],
})