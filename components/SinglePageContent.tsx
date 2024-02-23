"use client"

import React from 'react'
import { CopyBlock, androidstudio} from 'react-code-blocks'
import { postType } from '@/types/postType'
import PortableText from 'react-portable-text'
    // @ts-ignore
import SyntaxHighlighter from 'react-syntax-highlighter';
    // @ts-ignore
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

type Props = {
 post : postType
}

function SinglePageContent({post}:Props) {        

    // @ts-ignore
    const challengetoStr = post.challenge[0].children[0].text
    // @ts-ignore 
    const challengetoStr2 = post.challenge2 ? post.challenge2[0].children[0].text : null 
    
  return (
    <div>
        <PortableText 
        className='portable'
        content={post.intro}   
        />
        <div className='highl'>
            <SyntaxHighlighter language="javascript" style={atomOneDark} customStyle={{
              padding : "20px"
            }}>
              {challengetoStr}
            </SyntaxHighlighter>
        </div>
        {post.afterFirstChallenge && (
          <PortableText 
          className='portable'
          content={post.afterFirstChallenge}   
          />
        )}
        {
          challengetoStr2 && (
            <div className='highl'>
            <SyntaxHighlighter language="javascript" style={atomOneDark} customStyle={{
              padding : "20px"
            }}>
              {challengetoStr2}
            </SyntaxHighlighter>
        </div>
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