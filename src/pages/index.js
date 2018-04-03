import React from 'react'
import Link from 'gatsby-link'
import BEMHelper from 'react-bem-helper'
import viemodel from '../json'
import Paragraph from '../components/Paragraph'
import ButtonGroup from '../components/ButtonGroup'

const classes = new BEMHelper({
  name: 'content',
  prefix: 'c-',
})

const buttonClasses = new BEMHelper({
  name: 'button',
  prefix: 'c-',
})

const IndexPage = () => (
  <div {...classes('', 'intro')}>
    <h1>{viemodel.title}</h1>
    <Paragraph cssModfier="white">Tid: {viemodel.event.date}</Paragraph>
    <Paragraph cssModfier="white">
      Sted: {viemodel.event.city}, {viemodel.event.country}
    </Paragraph>
    <ButtonGroup>
      <Link {...buttonClasses('', 'white')} to="/speakers/">
        Talere
      </Link>
      <Link {...buttonClasses('', 'white')} to="/schedule/">
        Skjema
      </Link>
    </ButtonGroup>
  </div>
)

export default IndexPage
