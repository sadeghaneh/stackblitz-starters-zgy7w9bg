import { sqliteAdapter } from '@payloadcms/db-sqlite'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
      user: 'users',
        },
          collections: [
              {
                    slug: 'users',
                          auth: true,
                                fields: [],
                                    },
                                        {
                                              slug: 'products',
                                                    admin: {
                                                            useAsTitle: 'title',
                                                                  },
                                                                        fields: [
                                                                                {
                                                                                          name: 'title',
                                                                                                    type: 'text',
                                                                                                              required: true,
                                                                                                                      },
                                                                                                                              {
                                                                                                                                        name: 'price',
                                                                                                                                                  type: 'number',
                                                                                                                                                            required: true,
                                                                                                                                                                    },
                                                                                                                                                                            {
                                                                                                                                                                                      name: 'description',
                                                                                                                                                                                                type: 'richText',
                                                                                                                                                                                                        }
                                                                                                                                                                                                              ],
                                                                                                                                                                                                                  }
                                                                                                                                                                                                                    ],
                                                                                                                                                                                                                      secret: 'YOUR_SECRET_KEY_HERE',
                                                                                                                                                                                                                        sharp: {},
                                                                                                                                                                                                                          db: sqliteAdapter({
                                                                                                                                                                                                                              client: {
                                                                                                                                                                                                                                    url: 'file:./payload.db',
                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                          }),
                                                                                                                                                                                                                                            editor: lexicalEditor({}),
                                                                                                                                                                                                                                              typescript: {
                                                                                                                                                                                                                                                  outputFile: path.resolve(dirname, 'payload-types.ts'),
                                                                                                                                                                                                                                                    },
                                                                                                                                                                                                                                                    })
                                                                                                                                                                                                                                                    