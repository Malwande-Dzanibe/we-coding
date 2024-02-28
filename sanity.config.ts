import {defineConfig} from 'sanity'
import { structureTool } from 'sanity/structure'
import postsSchema from './schemas/postsSchema'

 const client = defineConfig({
  title: 'Keep Coding Blog',
  projectId: 'oy71atob',
  dataset: 'production',
  apiVersion : "v2024-02-10",
  useCdn : true,
  basePath: "/admin",

  plugins: [
    structureTool()
    //googleMapsInput(),
  ],

  schema: {
    types : [postsSchema]
  },
})

export default client
