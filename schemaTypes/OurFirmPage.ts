import {defineField, defineType} from 'sanity'

export const OurFirmPage = defineType({
  name: 'our-firm',
  title: 'Our Firm Page',
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
      rows: 4,
    }),
    defineField({
      title: 'Services List',
      name: 'servicesList',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      title: 'Closing Statement',
      name: 'closingStatement',
      type: 'text',
      rows: 3,
    }),
  ],
})
