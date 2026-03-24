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
      title: 'Industry Sections',
      name: 'sections',
      type: 'array',
      of: [
        {
          type: 'object',
          title: 'Industry Section',
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
              rows: 4,
              validation: (rule) => rule.required(),
            }),
            defineField({
              title: 'Photo',
              name: 'photo',
              type: 'string',
            }),
          ],
        },
      ],
    }),
  ],
})
