import React from 'react'

interface UsernameDisplayProps{
id:string
}

export const UsernameDisplay = ({ id }: UsernameDisplayProps) => {
 
  return <div>{id}</div>
}