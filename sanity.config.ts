import {defineConfig} from 'sanity'
import { deskTool } from 'sanity/desk'
import postsSchema from './schemas/postsSchema'

 const client = defineConfig({
  title: 'Keep Coding Blog',
  projectId: 'oy71ato',
  dataset: 'production',
  apiVersion : "v2024-02-10",
  useCdn : true,
  basePath: "/admin",

  plugins: [
    deskTool(),
    //googleMapsInput(),
  ],

  schema: {
    types : [postsSchema]
  },
})

export default client
