import { PortableTextBlock } from "sanity"

export type postType = {
    _id : string,
    _createdAt : string,
    name : string,
    bait: string,
    slug : string,
    challenge2 : PortableTextBlock[],
    intro : PortableTextBlock[],
    afterFirstChallenge : PortableTextBlock[],
    outro : PortableTextBlock[],
    challenge : PortableTextBlock[]
}