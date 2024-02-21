"use client"

import React from 'react'
import { CopyBlock, androidstudio} from 'react-code-blocks'
import { postType } from '@/types/postType'
import PortableText from 'react-portable-text'
import { PortableTextBlock } from 'sanity'

type Props = {
 post : {
 
  _id : string,
  _createdAt : string,
  name : string,
  bait: string,
  slug : string,
  challenge2 : PortableTextBlock[],
  intro : PortableTextBlock[],
  afterFirstChallenge : PortableTextBlock[],
  outro : PortableTextBlock[],
  challenge : PortableTextBlock[],
}
}

function SinglePageContent({post}:Props) {        

    const challengetoStr : any = post.challenge ? post.challenge[0].children[0].text : null  
    const challengetoStr2 : any = post.challenge2 ? post.challenge2[0].children[0].text : null 
    

  return (
    <div>
        <PortableText 
        className='portable'
        content={post.intro}   
        />
        <CopyBlock
        text={challengetoStr}
        language='tsx'
        showLineNumbers
        wrapLongLines
        theme={androidstudio}
        />
        {post.afterFirstChallenge && (
          <PortableText 
          className='portable'
          content={post.afterFirstChallenge}   
          />
        )}
        {
          challengetoStr2 && (
            <CopyBlock
            text={challengetoStr2}
            language='tsx'
            showLineNumbers
            wrapLongLines
            theme={androidstudio}
            />
          )
        }
        <PortableText 
        className='portable'
        content={post.outro}
        />
        <p>
          For more coding challenges please follow me on <a href='https://web.facebook.com/profile.php?id=100077502305937' target='_blank'>Facebook</a> so that you will not miss out everytime I post one. Thank you for visiting.
        </p>
    </div>
  )
}

export default SinglePageContent