import {defineField, defineType} from 'sanity'

export const HeroSection = defineType({
  name: 'hero-section',
  title: 'Hero Section',
  type: 'document',
  fields: [
    defineField({
      title: 'Image',
      name: 'image',
      type: 'image',
    }),
    defineField({
      title: 'Headline',
      name: 'headlineTitle',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      title: 'Headline Subtitle',
      name: 'subtitle',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      title: 'Midline',
      name: 'midelineText',
      type: 'text',
      rows: 6,
      validation: (rule) => rule.required(),
    }),
    defineField({
      title: 'Call To Action Button 1',
      name: 'primaryCta',
      type: 'object',
      fields: [
        defineField({
          title: 'Label',
          name: 'label',
          type: 'string',
          initialValue: 'Schedule a Consultation',
          validation: (rule) => rule.required(),
        }),
        defineField({
          title: 'Link',
          name: 'href',
          type: 'string',
          validation: (rule) => rule.required(),
        }),
      ],
    }),
    defineField({
      title: 'Call To Action Button 2',
      name: 'secondaryCta',
      type: 'object',
      fields: [
        defineField({
          title: 'Label',
          name: 'label',
          type: 'string',
          initialValue: 'Contact Our Team',
          validation: (rule) => rule.required(),
        }),
        defineField({
          title: 'Link',
          name: 'href',
          type: 'string',
          validation: (rule) => rule.required(),
        }),
      ],
    }),
  ],
})
