import {defineField, defineType} from 'sanity'

export const OurApproachSection = defineType({
  name: 'our-approach',
  title: 'Our Approach Page',
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
      title: 'Core Principles',
      name: 'principles',
      type: 'array',
      of: [
        {
          type: 'object',
          preview: {
            select: {title: 'title'},
          },
          fields: [
            defineField({
              title: 'Title',
              name: 'title',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              title: 'Description',
              name: 'description',
              type: 'text',
              rows: 3,
            }),
          ],
        },
      ],
    }),
  ],
})
