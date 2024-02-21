
import { postType } from '@/types/postType'
import { createClient, groq } from 'next-sanity'

const onePost = async (postSlug : string) : Promise<postType>  => {

    const client = createClient({
        projectId: 'oy71atob',
        dataset: 'production',
        apiVersion : "v2024-02-10",
        useCdn : true,
    })

  return client.fetch(groq`*[_type == "post" && slug.current == $postSlug][0]{
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
  }`,{postSlug})
}

export default onePost