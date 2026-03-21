import {defineField, defineType} from 'sanity'

export const IndustrySection = defineType({
  name: 'industry-section',
  title: 'Industry Section',
  type: 'document',
  fields: [
    defineField({
      title: 'Page Heading',
      name: 'heading',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      title: 'Page Subheading',
      name: 'subheading',
      type: 'text',
      rows: 3,
    }),
    defineField({
      title: 'Service Items',
      name: 'items',
      type: 'array',
      of: [{type: 'string'}],
    }),
  ],
})
