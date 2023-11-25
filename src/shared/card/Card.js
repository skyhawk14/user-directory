import React from 'react'
import CardDescription from './decorators/CardDescription'
import CardFooter from './decorators/CardFooter'
import CardHeader from './decorators/CardHeader'

const Card = ({children}) => {
  return (
    <article className='card'>{children}</article>
  )
}

Card.Header = CardHeader
Card.Description = CardDescription
Card.Footer = CardFooter

export default Card