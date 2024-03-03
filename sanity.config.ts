import {defineConfig} from 'sanity'
import { structureTool } from 'sanity/structure'
import postsSchema from './schemas/postsSchema'
import {codeInput} from "@sanity/code-input"

 const client = defineConfig({
  title: 'Keep Coding Blog',
  projectId: 'oy71atob',
  dataset: 'production',
  apiVersion : "v2024-02-10",
  useCdn : true,
  basePath: "/admin",

  plugins: [
    structureTool(),
    codeInput()
  ],

  schema: {
    types : [postsSchema]
  },
})

export default client
