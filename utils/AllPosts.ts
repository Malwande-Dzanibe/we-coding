
import { postType } from "@/types/postType"
import {createClient, groq} from "next-sanity"

const AllPosts = async () : Promise<postType[]> => {

  const client = createClient(
    {
        projectId: 'oy71atob',
        dataset: 'production',
        apiVersion : "v2024-02-10",
        useCdn : true,
    }
  )  

  return client.fetch(groq`*[ _type == "post"]{
    _id,
    _createdAt,
    bait,
    afterFirstChallenge,
    challenge2,
    name,
    "slug" : slug.current,
    intro,
    outro,
    challenge
  }`)
}

export default AllPosts