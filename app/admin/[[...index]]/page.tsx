"use client"

import React from 'react'
import { NextStudio } from 'next-sanity/studio'
import client from '@/sanity.config'

const page = () => {
  return (
        <NextStudio config={client}/>
  )
}

export default page