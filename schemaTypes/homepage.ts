import { defineArrayMember, defineField, defineType } from 'sanity'

export const homepage = defineType({
  name: 'homepage',
  title: 'Page d\'accueil',
  type: 'document',
  options: {
    singleton: true
  },
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
        type: 'object',
        name: 'hero',
        fields: [
            {type: 'string', name: 'title'},
            {type: 'text', name: 'text'},
            {type: 'image', name: 'image'},
            {type: 'string', name: 'trial'},
            {
                name: 'stats',
                type: 'array',
                title: 'Stats for Hero',
                of: [
                    defineArrayMember({
                        type: 'object',
                        name: 'stat',
                        fields: [
                            {type: 'string', name: 'value'},
                            {type: 'string', name: 'text'},
                        ]
                    }),
                ]
            }
        ],
    }),
    defineField({
        type: 'object',
        name: 'FeaturesSection',
        fields: [
            {type: 'string', name: 'title'},
            {type: 'text', name: 'text'},
            {
                name: 'features',
                type: 'array',
                title: 'Features for Features Section',
                of: [
                    defineArrayMember({
                        type: 'object',
                        name: 'feature',
                        fields: [
                            {type: 'string', name: 'title'},
                            {type: 'text', name: 'description'},
                            {type: 'image', name: 'icon'},
                        ]
                    }),
                ]
            }
        ],
    }),
  ]
})