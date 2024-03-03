"use client"

import React from 'react'
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
  
  const codingChallenge = post.challenge ? post.challenge.code : null
  const codingChallenge2 = post.challenge2 ? post.challenge2.code : null
          
  return (
    <div>
        <PortableText 
        className='portable'
        content={post.intro}   
        />
        {
          codingChallenge && (
            <div className='highl'>
            <SyntaxHighlighter  language="javascript" style={atomOneDark} customStyle={{
              padding : "20px"
            }}>
              {codingChallenge}
            </SyntaxHighlighter>
        </div>
          )
        }
        {post.afterFirstChallenge && (
          <PortableText 
          className='portable'
          content={post.afterFirstChallenge}   
          />
        )}
        {
          codingChallenge2 && (
            <div className='highl'>
            <SyntaxHighlighter language="javascript" style={atomOneDark} customStyle={{
              padding : "20px"
            }}>
              {codingChallenge2}
            </SyntaxHighlighter>
        </div>
          )
        }
        <PortableText 
        className='portable'
        content={post.outro}
        />
        <p>
             Thank you for visiting. Visit our <a href='https://web.facebook.com/profile.php?id=100077502305937' target='_blank'>Facebook</a>  page
        </p>
        
    </div>
  )
}

export default SinglePageContent