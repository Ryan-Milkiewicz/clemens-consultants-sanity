import {defineField, defineType} from 'sanity'

export const LeadershipPage = defineType({
  name: 'leadership',
  title: 'Leadership Page',
  type: 'document',
  preview: {
    select: {title: 'pageTitle'},
  },
  fields: [
    defineField({
      title: 'Page Title',
      name: 'pageTitle',
      type: 'string',
      initialValue: 'Leadership',
    }),
    defineField({
      title: 'Team Members',
      name: 'teamMembers',
      type: 'array',
      of: [
        {
          type: 'object',
          preview: {
            select: {title: 'name'},
          },
          fields: [
            defineField({
              title: 'Photo',
              name: 'photo',
              type: 'image',
            }),
            defineField({
              title: 'Name',
              name: 'name',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              title: 'Credentials',
              name: 'credentials',
              type: 'string',
            }),
            defineField({
              title: 'Role',
              name: 'role',
              type: 'string',
            }),
            defineField({
              title: 'Bio',
              name: 'bio',
              type: 'text',
              rows: 6,
            }),
            defineField({
              title: 'Experience Areas',
              name: 'experienceAreas',
              type: 'array',
              of: [{type: 'string'}],
            }),
            defineField({
              title: 'Closing Statement',
              name: 'closingStatement',
              type: 'text',
              rows: 4,
            }),
          ],
        },
      ],
    }),
  ],
})
