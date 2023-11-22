'use client';

import { TextArea, TextField, TextFieldInput } from '@radix-ui/themes'
import React from 'react'

export default function NewIssuesPage() {
  return (
    <div className='max-w-xl space-y-3 '>
      <TextField.Root>
        <TextFieldInput placeholder='title'/>
      </TextField.Root>

      <TextArea placeholder='description'/>

    
    </div>
  )
}