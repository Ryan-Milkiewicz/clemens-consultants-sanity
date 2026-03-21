import {defineField, defineType} from 'sanity'

export const ServiceSection = defineType({
  name: 'services-page',
  title: 'Services Page',
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
      title: 'Service Sections',
      name: 'sections',
      type: 'array',
      of: [
        {
          type: 'object',
          title: 'Service Section',
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
            }),
            defineField({
              title: 'Photo',
              name: 'photo',
              type: 'image',
            }),
            defineField({
              title: 'Service Items',
              name: 'items',
              type: 'array',
              of: [{type: 'string'}],
            }),
            defineField({
              title: 'Closing Statement',
              name: 'closingStatement',
              type: 'text',
              rows: 3,
            }),
            // // Optional sub-sections (e.g. for Audit & Assurance)
            // defineField({
            //   title: 'Sub Sections',
            //   name: 'subSections',
            //   type: 'array',
            //   of: [
            //     {
            //       type: 'object',
            //       title: 'Sub Section',
            //       preview: {
            //         select: {title: 'title'},
            //       },
            //       fields: [
            //         defineField({
            //           title: 'Title',
            //           name: 'title',
            //           type: 'string',
            //           validation: (rule) => rule.required(),
            //         }),
            //         defineField({
            //           title: 'Description',
            //           name: 'description',
            //           type: 'text',
            //           rows: 4,
            //         }),
            //         defineField({
            //           title: 'Service Items',
            //           name: 'items',
            //           type: 'array',
            //           of: [{type: 'string'}],
            //         }),
            //       ],
            //     },
            //   ],
            // }),
          ],
        },
      ],
    }),
  ],
})
